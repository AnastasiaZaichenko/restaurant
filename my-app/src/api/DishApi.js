export default class DishApi {
  static API = `https://64eda7071f8721827141862f.mockapi.io/api/restaurant/dish/`;
  static request(url = "", method = "GET", body) {
    return fetch(DishApi.API + url, {
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
    return DishApi.request().catch(() => {
      throw new Error("Can not retrieve datas from server");
    });
  }

  static getOne(id) {
    return DishApi.request(id).catch(() => {
      throw new Error("Can not retrieve dish from server");
    });
  }

  static create(dish) {
    return DishApi.request("", "POST", dish).catch(() => {
      throw new Error("Can not create dish on server");
    });
  }

  static delete(id) {
    return DishApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete dish from server");
    });
  }

  static update(id, changes) {
    return DishApi.request(id, "PUT", changes).catch(() => {
      throw new Error("Can not update dish on server");
    });
  }
}
