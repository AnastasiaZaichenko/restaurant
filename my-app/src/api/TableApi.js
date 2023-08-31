export default class TableApi {
  static API = `https://64eda7071f8721827141862f.mockapi.io/api/restaurant/table/`;
  static request(url = "", method = "GET", body) {
    return fetch(TableApi.API + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Can not retrieve datas from server");
    });
  }
  static getList() {
    return TableApi.request().catch(() => {
      throw new Error("Can not retrieve datas from server");
    });
  }
  static getOne(id) {
    return TableApi.request(id).catch(() => {
      throw new Error("Can not retrieve table from server");
    });
  }

  static create(table) {
    return TableApi.request("", "POST", table).catch(() => {
      throw new Error("Can not create table on server");
    });
  }
  static delete(id) {
    return TableApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete table from server");
    });
  }
  static update(id, changes) {
    return TableApi.request(id, "PUT", changes).catch(() => {
      throw new Error("Can not update table on server");
    });
  }
}
