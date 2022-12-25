export const requestData = async (url, spiner, setData) => {
  spiner(true);
  const request = await (await fetch(url)).json();
  await setData(request);
  spiner(false);
};
