interface TurnIntoCurrencyProps {
  value: number;
  currencyDisplay?: 'symbol' | 'code' | 'name' | 'narrowSymbol';
  style?: 'decimal' | 'currency';
  locale?: 'pt-BR' | 'en-US';
  currency?: 'BRL' | 'USD';
}

export const turnIntoCurrency = ({
  value,
  currencyDisplay = 'symbol',
  style = 'currency',
  locale = 'pt-BR',
  currency = 'BRL'
}: TurnIntoCurrencyProps) => {
  return value.toLocaleString(locale, {
    style,
    currency,
    currencyDisplay
  });
};
