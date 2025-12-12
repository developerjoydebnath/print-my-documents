export const buildQueryParams = (params: Record<string, any>) => {
  const query = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined && params[key] !== null) {
      query.append(key, params[key]);
    }
  });
  return query.toString();
};
