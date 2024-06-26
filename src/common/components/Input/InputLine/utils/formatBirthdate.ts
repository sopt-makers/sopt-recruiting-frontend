export const formatBirthdate = (value: string) => {
  if (!value) return value;
  const cleaned = value.replace(/[^\d]/g, ''); // 숫자가 아닌 문자는 모두 제거
  let formatted = cleaned;

  if (cleaned.length > 4) {
    formatted = cleaned.slice(0, 4) + '-';
    if (cleaned.length > 6) {
      formatted += cleaned.slice(4, 6) + '-';
      formatted += cleaned.slice(6, 10);
    } else if (cleaned.length > 8) {
      formatted += cleaned.slice(4, 6) + '-';
      formatted += cleaned.slice(6, 10);
    } else {
      formatted += cleaned.slice(4);
    }
  }

  return formatted;
};
