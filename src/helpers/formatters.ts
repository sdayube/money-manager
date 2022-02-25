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

export const formatDate = (date: Date | string) => new Intl
  .DateTimeFormat('pt-BR')
  .format(
    typeof date === 'string' ? new Date(date) : date
  );
