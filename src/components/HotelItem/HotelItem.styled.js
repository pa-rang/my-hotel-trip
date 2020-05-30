import styled from 'styled-components';

export const HotelItemWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 2px;
  margin-bottom: 16px;
  box-shadow: inset 0 0 0 1px rgba(102, 109, 177, 0.2);
  transition: box-shadow 0.2s;

  &:hover {
  }
`;

export const HotelImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const HotelInfo = styled.div`
  padding: 24px;
`;