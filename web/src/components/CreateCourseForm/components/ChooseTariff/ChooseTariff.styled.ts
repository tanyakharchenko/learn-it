import styled from "styled-components";
import Typography from "components/ui/Typography";

export const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.lightContrast};
    padding: 1rem 2rem;
    border-radius: 10px;
    margin-top: 0.5rem;
    max-width: 50%;
`;

export const Text = styled(Typography)`
    color: ${(props) => props.theme.colors.secondaryText}
`;

export const TextButtonBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  margin-left: auto;
`;