export default class Model {
  constructor() {
    this.pageData = {};
    this.API_URL = 'http://localhost:8000';
  }

  async getPageContent(pageURL) {
    await fetch(this.API_URL + pageURL)
    .then( response => {
      if(response.ok) return response.json();
      throw new Error('Can not get page data!');
    })
    .then(data => {
      this.pageData = data;
      })
    .catch(error => console.error('Can not get page data!', error));
    return this.pageData;
  }

}