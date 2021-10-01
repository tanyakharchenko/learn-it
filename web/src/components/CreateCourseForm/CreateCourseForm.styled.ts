import styled from 'styled-components';
import Typography from "components/ui/Typography";
import Button from "components/ui/Button";

export const Form = styled.form`
    width: 45%;
    max-width: 40rem; 
`;

export const Text = styled(Typography)`
    color: ${(props) => props.theme.colors.secondaryText}
`;

export const TextButtonBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

export const PriceBlock = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const ActionButton = styled(Button)`
  margin-right: 1rem;
`;