// ImageGridStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  padding: 8rem 2rem;
  @media (max-width: 360px) {
padding: 0rem}
`;

export const ImageWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 20px;
  margin-bottom: 1em;
  @media (max-width: 360px) {
  flex-direction: column;
  gap:0px
}
  
`;

export const Image = styled.img`
  width: 30em;
  height: 20em;
  /* object-fit: cover; */
  @media (max-width: 360px) {
width:20rem}
`;