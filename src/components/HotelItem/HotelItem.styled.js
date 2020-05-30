import styled from 'styled-components';

export const HotelItemWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 16px;
  /* box-shadow: inset 0 0 0 1px rgba(102, 109, 177, 0.2); */
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
  }
`;

/* ${mediaQuery(1024)} {
  transform: none;
} */

export const HotelImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const HotelInfo = styled.div`
  padding: 20px 24px;
`;

HotelInfo.Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #343a40;
`;
