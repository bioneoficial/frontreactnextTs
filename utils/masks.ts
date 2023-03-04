export const nameMask = (value: string) => {
  return value
    .replace(/\d/g, "")
    .replace(/[^a-zA-ZÀ-ú ]/g, "")
    .replace(/(\s{2,})/g, " ")
    .trim();
};

export const birthDateMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

export const formatBrazilianDate = (dateString: string) => {
  const day = dateString.substring(0, 2);
  const month = dateString.substring(3, 5);
  const year = dateString.substring(6, 10);
  return `${year}-${month}-${day}`;
};
