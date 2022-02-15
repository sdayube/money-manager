export const formatCurrency = (value: number) => new Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL',
  },
).format(value / 100);

export const parseCurrency = (value: string) => parseInt(
  value.replace(/[^\d]+/g, ''),
  10,
);