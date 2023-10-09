export const primaryColor = "#09D57F";
export const appName = "bazaar";

export async function makeApiRequest(
  url,
  { method = "GET", data = null, token = null, apiKey = null }
) {
  try {
    let newOptions = {
      method,
      body: data,
    };

    const headers = {};

    if (token) {
      headers["x-access-token"] = token;
    }

    if (apiKey) {
      headers["x-api-key"] = apiKey;
    }

    if (data === null) {
      newOptions = newOptions;
    } else if (data instanceof FormData) {
      // to check if the data has file
      newOptions = { ...newOptions, body: data };
    } else {
      headers["Content-Type"] = "application/json";
      newOptions = { ...newOptions, body: JSON.stringify(data) };
    }

    newOptions.method = method;
    newOptions.headers = headers;

    const response = await fetch(
      process.env.REACT_APP_BASE_URL + url,
      newOptions
    );
    const processedData = await response.json();

    // if (response.ok) {
    //   return processedData;
    // }
    // else {
    //   throw new Error(processedData.message);
    // }

    if (response.ok) {
      return processedData;
    } else {
      if (response.status === 401) {
        // removeUserSession();
        // window.location.href = "/";
      }
      throw new Error(processedData.message);
    }
  } catch (error) {
    throw error;
  }
}
