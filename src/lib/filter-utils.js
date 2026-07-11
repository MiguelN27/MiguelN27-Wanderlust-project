export const escapeRegExp = (value = "") => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const matchesSearch = (title, query) => {
  if (!query.trim()) return true;

  const safeQuery = escapeRegExp(query.trim());
  const regex = new RegExp(safeQuery, "i");
  return regex.test(title);
};
