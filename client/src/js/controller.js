import mainPageReact from './pages/main-page.js';
import contactsPageReact from './pages/contacts-page.js';
import aboutUsPageReact from './pages/about-us-page.js';
import menuReact from './modals/menu.js';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // main parts of html body -------------------------------------------------------------------
    this.header = document.querySelector('header');
    this.mainContainer = document.querySelector('main');
    this.footer = document.querySelector('footer');
    this.modalContainer = document.querySelector('#modal-container');

    // DOM elements, created by React -------------------------------------------------------------
    this.mainPageDOM = mainPageReact;
    this.contactsPageDOM = contactsPageReact;
    this.aboutUsPageDOM = aboutUsPageReact;
    this.menuDOM = menuReact;

    // this.renderPageWithServerData(`/pages/main-page`, this.mainPageDOM, this.mainContainer);
    this.view.render(this.mainPageDOM(), this.mainContainer)

    this.menuBtn = document.querySelector('.menu-button');
    this.addMenuBtnClickListener(this.menuBtn);

    // add events for navigation bar links ---------------------------------------------------------
    this.navs = document.body.querySelectorAll('#nav');

    for(const nav of this.navs){
      this.addLinkClickListener(nav, '#main-page', null, this.mainPageDOM, this.mainContainer);
      this.addLinkClickListener(nav, '#about-us-page', null, this.aboutUsPageDOM, this.mainContainer);
      this.addLinkClickListener(nav, '#contacts-page', null, this.contactsPageDOM, this.mainContainer);
    }
    
  }//constructor

  //-------------------------------------------------functions--------------------------------------------------------------------

  async renderPageWithServerData(pageURL, pageDOM, placeToRender) {
    const pageContent = await this.model.getPageContent(pageURL);
    const pageToRender = pageDOM(pageContent); // put page content to page DOM
    this.view.render(pageToRender, placeToRender);
  }//renderPageWithServerData

  addLinkClickListener(linkContainer, linkSelector, pageURL, pageDOM, placeToRender) {
    const link = linkContainer.querySelector(linkSelector);
    link.addEventListener('click', (event) => { 
      event.preventDefault();
      if(pageURL !== null) this.renderPageWithServerData(pageURL, pageDOM, placeToRender);
      if(pageURL === null) this.view.render(pageDOM(), placeToRender);
    });
  }//giveLinkClickListener

  addMenuBtnClickListener(menuBtn) {
    menuBtn.addEventListener('click', (event) => {
      
      const modalChild = this.modalContainer.children[0];
      if(modalChild !== undefined) if(modalChild.className === 'menu') {
        this.view.showModalBgSmoothly(this.modalContainer);
        this.view.showMenuSmoothly(this.menu);
        return;
      }; 

      this.view.render(this.menuDOM(), this.modalContainer);
      this.menu = document.querySelector('.menu');

      this.view.showModalBgSmoothly(this.modalContainer);
      this.view.showMenuSmoothly(this.menu);

      const nav = this.menu.querySelector('#nav');

      this.addLinkClickListener(nav, '#main-page', null, this.mainPageDOM, this.mainContainer);
      this.addLinkClickListener(nav, '#about-us-page', null, this.aboutUsPageDOM, this.mainContainer);
      this.addLinkClickListener(nav, '#contacts-page', null, this.contactsPageDOM, this.mainContainer);

      const dancesNav = this.menu.querySelector('#dances-section');

      this.addLinkClickListener(dancesNav, '#salsa', null, this.mainPageDOM, this.mainContainer);
      this.addLinkClickListener(dancesNav, '#bachata', null, this.mainPageDOM, this.mainContainer);
      this.addLinkClickListener(dancesNav, '#kizomba', null, this.mainPageDOM, this.mainContainer);
      this.addLinkClickListener(dancesNav, '#zouk', null, this.mainPageDOM, this.mainContainer);

      const coursesNav = this.menu.querySelector('#courses-section');

      this.addLinkClickListener(coursesNav, '#business', null, this.mainPageDOM, this.mainContainer);
      this.addLinkClickListener(coursesNav, '#relationships', null, this.mainPageDOM, this.mainContainer);
      this.addLinkClickListener(coursesNav, '#dance-trainer', null, this.mainPageDOM, this.mainContainer);

      this.modalContainer.addEventListener('click', (event) => {
        const target = event.target;
        if(target.nodeName === "DIV" || target.nodeName === "A") {
          this.view.hideModalBgSmoothly(this.modalContainer);
          // this.view.hideMenuSmoothly(this.menu);
        }

      });//modalContinerEventListener

    });//btnEventListener
  }//giveMenuButtonClickListener

}//class controller------------------------------------------------------------------------------------------------------------------