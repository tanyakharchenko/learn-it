import React from "react";
import { useTranslation } from "react-i18next";
import { Tariff } from "types/Course";
import Typography from "components/ui/Typography";
import * as Styled from "./CreatedTariff.styled";

interface OwnProps {
  tariff: Tariff;
}

export const CreatedTariff: React.FC<OwnProps> = ({ tariff }) => {
  const { t } = useTranslation();
  return (
    <Styled.Wrapper>
      <Typography>{tariff.title}</Typography>
      <Typography>
        {t("general.price")}: {tariff.fullPrice}
      </Typography>
      {tariff.priceWithDiscount && (
        <Typography>
          {t("general.priceWithDiscount")}: {tariff.priceWithDiscount}
        </Typography>
      )}
    </Styled.Wrapper>
  );
};
