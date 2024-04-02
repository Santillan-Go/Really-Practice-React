export const Request = (url, option = {}) => {
  if (option.method === "PUT" || option.method === "POST") {
    option.body = JSON.stringify(option.body);
  }

  return fetch(url, option)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status,
            statusText: res.statusText,
          })
    )
    .catch((err) => err);
};
