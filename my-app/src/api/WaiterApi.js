export default class WaiterApi {
  static API = `https://mock-api-5678.nw.r.appspot.com/waiters/`;
  static request(url = "", method = "GET", body) {
    return fetch(WaiterApi.API + url, {
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
    return WaiterApi.request().catch(() => {
      throw new Error("Can not retrieve datas from server");
    });
  }
  static getOne(id) {
    return WaiterApi.request(id).catch(() => {
      throw new Error("Can not retrieve waiter from server");
    });
  }
  static create(waiter) {
    return WaiterApi.request("", "POST", waiter).catch(() => {
      throw new Error("Can not create waiter on server");
    });
  }
  static delete(id) {
    return WaiterApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete waiter from server");
    });
  }
  static update(id, changes) {
    return WaiterApi.request(id, "PUT", changes).catch(() => {
      throw new Error("Can not update waiter on server");
    });
  }
}
