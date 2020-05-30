import styled from 'styled-components';

export const Page = styled.section`
  width: 1072px;
  display: flex;
  margin: auto;
  padding: 120px 0 80px 0;
  /* @media (max-width: 768px) {
    min-width: 100%;
    padding: 48px 0;
    background-color: lightgray;
  } */
`;

Page.Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
`;