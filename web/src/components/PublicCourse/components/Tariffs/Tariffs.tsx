import React from "react";
import { useTranslation } from "react-i18next";
import { Tariff } from "types/Course";
import { Currency } from "types/general";
import Typography from "components/ui/Typography";
import * as Styled from "./Tariffs.styled";

interface OwnProps {
  tariffs: Tariff[];
  currency: Currency;
}

export const Tariffs: React.FC<OwnProps> = ({ tariffs, currency }) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Typography variant="h5">{t("general.tariffs")}</Typography>
      <Styled.Tariffs>
        {tariffs.map((tariff) => (
          <Styled.Tariff key={tariff.title}>
            <Typography variant="h5">{tariff.title}</Typography>
            <Typography variant="body2" textAlign="center" marginTop="2rem">
              {tariff.description}
            </Typography>
            <Styled.Prices>
              {tariff.priceWithDiscount && (
                <Typography variant="h5" color="secondary" fontWeight="bold">
                  {tariff.priceWithDiscount} {currency}
                </Typography>
              )}
              <Styled.FullPrice
                variant={!!tariff.priceWithDiscount ? "h6" : "h5"}
                color={!!tariff.priceWithDiscount ? "" : "secondary"}
                $isDiscountAvailable={!!tariff.priceWithDiscount}
              >
                {tariff.fullPrice} {currency}
              </Styled.FullPrice>
            </Styled.Prices>
          </Styled.Tariff>
        ))}
      </Styled.Tariffs>
    </Styled.Wrapper>
  );
};
