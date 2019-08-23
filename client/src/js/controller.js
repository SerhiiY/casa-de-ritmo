import mainPage from './pages/main-page.js';
import contactsPage from './pages/contacts-page.js';
import aboutUsPage from './pages/about-us-page.js';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // main parts of html document
    this.header = document.querySelector('header');
    this.main = document.querySelector('main');
    this.footer = document.querySelector('footer');

    // functions to make react DOM element for rendering. Take data from db = pageContent
    this.mainPage = mainPage;
    this.renderPageWithServerData(`/pages/main-page`, this.mainPage, this.main);

    this.contactsPage = contactsPage;
    this.aboutUsPage = aboutUsPage;

    // add events for navigation bar links
    this.navs = document.body.querySelectorAll('#nav');

    for(const nav of this.navs){
      this.giveLinkClickListener(nav, '#main-page', '/pages/main-page', this.mainPage, this.main);
      this.giveLinkClickListener(nav, '#about-us-page', '/pages/about-us-page', this.aboutUsPage, this.main);
      this.giveLinkClickListener(nav, '#contacts-page', '/pages/contacts-page', this.contactsPage, this.main);
    }
    
  }

  async renderPageWithServerData(pageURL, pageDOM, placeToRender) {
    const pageContent = await this.model.getPageContent(pageURL);
    const pageToRender = pageDOM(pageContent); // put page content to page DOM
    this.view.render(pageToRender, placeToRender);
  }

  giveLinkClickListener(linkContainer, linkSelector, pageURL, pageDOM, placeToRender) {
    const link = linkContainer.querySelector(linkSelector);
    link.addEventListener('click', (event) => { 
      event.preventDefault();
      this.renderPageWithServerData(pageURL, pageDOM, placeToRender);
    });
  }

}