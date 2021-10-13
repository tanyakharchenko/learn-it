import styled from "styled-components";
import Typography from "components/ui/Typography";

export const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
`;

export const Tariffs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Tariff = styled.div`
  width: 19rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 1rem;
  box-shadow: ${(props) => `0 0 10px ${props.theme.colors.lightGrey}`};
  margin: 1rem 1rem 0 1rem;
  border-radius: 4px;
`;

export const FullPrice = styled(Typography)<{ $isDiscountAvailable: boolean }>`
  text-decoration: ${(props) =>
    props.$isDiscountAvailable ? "line-through" : "none"};
  margin-top: ${(props) => (props.$isDiscountAvailable ? "1rem" : "0")};
  font-weight: ${(props) => (props.$isDiscountAvailable ? "normal" : "bold  ")};
`;

export const Prices = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
