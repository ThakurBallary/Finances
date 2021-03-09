export function formatAmount(amount: string): string {
  amount = amount.replace(/,/g, '');
  const indexOfPoint = amount.indexOf('.');
  const validCharacters = '0123456789.';
  for (const ch of amount) {
    if (
      !validCharacters.includes(ch) ||
      indexOfPoint !== amount.lastIndexOf('.')
    ) {
      return 'false';
    }
  }
  if (amount === '.') {
    amount = '0.';
  }
  let integer = amount;
  let decimal = '';
  if (indexOfPoint > 0) {
    integer = amount.substring(0, indexOfPoint);
    decimal = amount.substr(indexOfPoint, 3);
  }
  if (integer.length > 1 && integer[0] === '0') {
    integer = integer.substring(1);
  }
  if (integer.length > 7) {
    return 'false';
  } else if (integer.length > 5) {
    integer =
      integer.substring(0, integer.length - 5) +
      ',' +
      integer.substr(integer.length - 5, 2) +
      ',' +
      integer.substring(integer.length - 3);
  } else if (integer.length > 3) {
    integer =
      integer.substring(0, integer.length - 3) +
      ',' +
      integer.substring(integer.length - 3);
  }
  amount = integer + decimal;
  return amount;
}
