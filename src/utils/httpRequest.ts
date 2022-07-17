export const httpRequest = async (url: string) => {
  const response = await fetch(url);
  console.log(response);
  return await response.json();
};
