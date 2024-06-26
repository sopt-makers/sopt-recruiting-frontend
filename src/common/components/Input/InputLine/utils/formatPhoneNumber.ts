export const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  const cleaned = value.replace(/[^\d]/g, ''); // 숫자가 아닌 문자는 모두 제거
  let formatted = cleaned;

  if (cleaned.length > 3) {
    formatted = cleaned.slice(0, 3) + '-';
    if (cleaned.length > 7) {
      formatted += cleaned.slice(3, 7) + '-';
      formatted += cleaned.slice(7, 11);
    } else if (cleaned.length > 6) {
      formatted += cleaned.slice(3, 6) + '-';
      formatted += cleaned.slice(6, 10);
    } else {
      formatted += cleaned.slice(3);
    }
  }

  return formatted;
};
