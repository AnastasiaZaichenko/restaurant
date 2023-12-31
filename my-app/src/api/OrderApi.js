export default class OrderApi {
  static API = `https://64eda7071f8721827141862f.mockapi.io/api/restaurant/order/`;
  static request(url = "", method = "GET", body) {
    return fetch(OrderApi.API + url, {
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
    return OrderApi.request().catch(() => {
      throw new Error("Can not retrieve datas from server");
    });
  }
  static getOne(id) {
    return OrderApi.request(id).catch(() => {
      throw new Error("Can not retrieve order from server");
    });
  }
  static create(order) {
    return OrderApi.request("", "POST", order).catch(() => {
      throw new Error("Can not create order on server");
    });
  }
  static delete(id) {
    return OrderApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete order from server");
    });
  }
  static update(id, changes) {
    return OrderApi.request(id, "PUT", changes).catch(() => {
      throw new Error("Can not update order on server");
    });
  }
}
