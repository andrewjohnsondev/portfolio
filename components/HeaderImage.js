import styled from 'styled-components';

const StyledHeaderImage = styled.div`
  background-image: url('https://res.cloudinary.com/dsg1cr4ug/image/upload/v1666593002/Portfolio/camille-couvez-H5PnIYI_1I0-unsplash_2_qzgzil.jpg');
  background-position: center;
  background-size: cover;
  height: 100%;
  right: 0;
  top: 0;
  width: 50%;
  position: absolute;
  border-radius: var(--br);

  .overlay {
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

function HeaderImage() {
  return (
    <StyledHeaderImage>
      <div className='overlay'></div>
    </StyledHeaderImage>
  );
}
export default HeaderImage;
