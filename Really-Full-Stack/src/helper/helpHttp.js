export function helpHttp(url, options = {}) {
  return fetch(url, options).then((res) =>
    res.ok
      ? res.json()
      : Promise.reject({
          erro: true,
          status: res.status,
          statusText: res.statusText,
        })
  );
}
