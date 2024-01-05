export function formatCurrency(amount: number | string): string {
  const roundedAmount = Math.floor(Number(amount));
  const formattedAmount = roundedAmount.toLocaleString();
  const formattedCurrency = formattedAmount;

  return formattedCurrency;
}
