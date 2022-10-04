import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  /* display: flex; */
  grid-gap: ${p => p.theme.space[2]}px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;
