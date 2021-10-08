export default class RestoService {
  _apiBase = 'http://localhost:3000';
  _apiProducts = 'https://murmuring-tor-81614.herokuapp.com';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error (`Could not fetch ${url}, received ${res.stutes}`);
    }

    return await res.json();

  }

  async getData(url) {
    const res = await fetch(`${this._apiProducts}${url}`);

    if (!res.ok) {
      throw new Error (`Could not fetch ${url}, received ${res.stutes}`);
    }

    return res.json();

  }

  getId () {
    return this.getData('/api/dealers/');
  }

  getGoods ({id = []}) {
    if (id) {
      const dealers = id.reduce((summ, item) => {
        return summ + item + ',';
      }, '');
      return this.getData(`/api/goods/?dealers=${dealers.slice(0, -1)}`);
    }
    else {
      return this.getData('/api/goods/');
    }
  }

// 0c4aab30,86e64a33


  
  async getMenuItems () {
    return await this.getResource('/menu/');
  }
}