import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import TextField from "components/ui/TextField";
import CloseIcon from "components/icons/Close";
import IconButton from "components/ui/IconButton";
import PlusIcon from "components/icons/Plus";
import DoneIcon from "components/icons/Done";
import { Tariff } from "types/Course";
import * as Styled from "./ChooseTariff.styled";

interface OwnProps {
  saveTariff: (tariff: Tariff) => void;
}

export const ChooseTariff: React.FC<OwnProps> = ({ saveTariff }) => {
  const { t } = useTranslation();
  const [isAddFormVisible, setIsAddFormVisible] = React.useState(false);
  const theme = useTheme();

  const [tariff, setTariff] = React.useState({
    title: "",
    description: "",
    fullPrice: "",
    priceWithDiscount: "",
  });

  const clearForm = () => {
    setTariff({
      title: "",
      description: "",
      fullPrice: "",
      priceWithDiscount: "",
    });
  };

  const onTariffSave = () => {
    saveTariff(tariff);
    setIsAddFormVisible(false);
    clearForm();
  };

  const onTariffCancel = () => {
    setIsAddFormVisible(false);
    clearForm();
  };

  const onAddClick = () => {
    setIsAddFormVisible(true);
  };

  return (
    <>
      <Styled.TextButtonBlock>
        <Styled.Text>{t("general.tariffs")}</Styled.Text>
        <IconButton onClick={onAddClick} disabled={isAddFormVisible}>
          <PlusIcon sx={{ color: theme.colors.blue }} />
        </IconButton>
      </Styled.TextButtonBlock>
      {isAddFormVisible && (
        <Styled.PriceBlock>
          <TextField
            variant="standard"
            label={t("general.title")}
            fullWidth
            margin="dense"
            size="small"
            onChange={(event) =>
              setTariff({ ...tariff, title: event.target.value })
            }
            value={tariff.title}
          />
          <TextField
            variant="standard"
            label={t("general.description")}
            multiline
            fullWidth
            margin="dense"
            size="small"
            onChange={(event) =>
              setTariff({ ...tariff, description: event.target.value })
            }
            value={tariff.description}
          />
          <TextField
            variant="standard"
            label={t("general.price")}
            fullWidth
            margin="dense"
            size="small"
            onChange={(event) =>
              setTariff({ ...tariff, fullPrice: event.target.value })
            }
            value={tariff.fullPrice}
          />
          <TextField
            variant="standard"
            label={t("general.priceWithDiscount")}
            fullWidth
            margin="dense"
            size="small"
            onChange={(event) =>
              setTariff({ ...tariff, priceWithDiscount: event.target.value })
            }
            value={tariff.priceWithDiscount}
          />
          <Styled.ActionButtons>
            <IconButton onClick={onTariffCancel}>
              <CloseIcon />
            </IconButton>
            <IconButton onClick={onTariffSave}>
              <DoneIcon sx={{ color: theme.colors.blue }} />
            </IconButton>
          </Styled.ActionButtons>
        </Styled.PriceBlock>
      )}
    </>
  );
};
