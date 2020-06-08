const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-Br', {
    currency: 'BRL',
    style: 'currency',
  }).format(value); // TODO

export default formatValue;
