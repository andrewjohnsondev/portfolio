import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { config } from '../styles/GlobalStyles';
import { send } from '@emailjs/browser';
import Error from './Contact/Error';
import { useRef, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Image from 'next/image';
import wait from 'waait';

const StyledForm = styled.form`
  width: 100%;
  max-width: 29rem;
  position: relative;

  .success {
    background-color: var(--color-neutral-100);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 7rem;
    z-index: 9999;
    padding: 3rem;
    opacity: ${({ success }) => (success ? '1' : '0')};
    transition: opacity 700ms ease;
    pointer-events: none;

    h3 {
      color: var(--color-neutral-900);
      text-transform: uppercase;
      font-size: 2.5rem;
      text-align: center;
      margin-top: 1rem;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    background-color: var(--color-neutral-100);
    position: relative;
    z-index: 1;
    height: 100%;
    border-radius: var(--br);
    padding: 1rem;
    position: relative;
    z-index: 1;

    & > * {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  label {
    color: var(--color-neutral-900);
    text-transform: uppercase;
    font: inherit;
    font-weight: var(--fw-600);
  }

  input,
  textarea {
    padding: 0.35rem;
    border: solid 1px #d7d7d7;
    border-radius: var(--br);
    font-weight: var(--fw-500);
    color: var(--color-neutral-300);

    &:focus-within {
      outline: var(--color-accent-400) solid 1px;
    }
  }

  button {
    border: none;
    border-radius: var(--br);
    cursor: pointer;
    padding: 0.75em 1.75em;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: var(--fw-700);
    background-color: var(--color-primary-400);
    color: var(--color-neutral-100);
    margin-top: 1.25rem;
    overflow: hidden;
    position: relative;

    span {
      z-index: 1;
    }

    &:hover::after,
    &:focus-visible::after {
      transform: translateX(0);
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--color-primary-700);
      transform: translateX(-100%);
      transition: transform 400ms ease;
    }
  }

  @media (min-width: ${config.med}) {
    .bg-pattern-accent {
      position: absolute;
      right: -6rem;
      bottom: -6rem;
      top: -6rem;
      left: -6rem;
      border-radius: var(--br);
    }

    .inner {
      padding: 2rem;
    }
  }
`;

function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const handleButtonChange = () => {
    if (loading) return <TailSpin height={18} width={18} color='#fff' />;
    if (success) return 'Sent!';
    return 'Send';
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email, subject, message }) => {
    setLoading(true);
    const templateParams = {
      from_email: email,
      from_subject: subject,
      message,
    };

    try {
      await send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE, templateParams, process.env.NEXT_PUBLIC_EMAILJS_KEY);
      setLoading(false);
      reset();
      setSuccess(true);
      await wait(4500);
      setSuccess(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <StyledForm success={success} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div className='success'>
        <img src='/assets/success.svg' alt='sent' />
        <h3>Thank you!</h3>
      </div>
      <div className='bg-pattern-accent'></div>
      <div className='inner'>
        <div>
          <label htmlFor='email'>Email</label>
          <input {...register('email', { required: true })} type='email' id='email' />
          {errors.email && <Error>Email is required</Error>}
        </div>
        <div>
          <label htmlFor='subject'>Subject</label>
          <input {...register('subject')} type='text' id='subject' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea {...register('message', { required: true })} rows={7} type='text' id='message' />
          {errors.message && <Error>Message is required</Error>}
        </div>
        <button className={success ? 'bg-secondary' : null} disabled={loading ? true : false} type='submit'>
          <span>{handleButtonChange()}</span>
        </button>
      </div>
    </StyledForm>
  );
}
export default Form;
