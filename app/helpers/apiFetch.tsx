const apiURL = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

const apiFetch = async (endpoint: string, method = 'GET' as string) => {
  const res = await fetch(apiURL + endpoint, {
    method: method,
  });
  return await res?.json();
};

export default apiFetch;
