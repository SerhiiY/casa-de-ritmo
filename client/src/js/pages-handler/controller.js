import scroll from '../helpers/scroll';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // DOM elements, created by React -------------------------------------------------------------
    this.view.render(this.view.mainPageDOM(), this.view.mainContainer);

    this.menuBtn = document.querySelector('.menu-button');
    this.fbIcon =  document.querySelector('.fb-icon');
    this.gMapsIcon = document.querySelector('.gMaps-icon');

    this.menuBtn.addEventListener('click', this.addMenuClickListeners.bind(this));//btnEventListener
    this.fbIcon.addEventListener('click', () => window.location.href = 'https://www.facebook.com/CasaDeRitmo/');
    this.gMapsIcon.addEventListener('click', () => 
    {
      this.view.render(this.view.gMapsDOM(), this.view.modalContainer);
      this.view.showModal();
    });
    this.hideModalClickListener();
    // add events for navigation bar links ---------------------------------------------------------
    this.navs = document.body.querySelectorAll('#nav');

    for(const nav of this.navs){
      this.addLinkClickListener(nav, '#main-page', null, this.view.mainPageDOM);
      this.addLinkClickListener(nav, '#about-us-page', null, this.view.aboutUsPageDOM);
      this.addLinkClickListener(nav, '#contacts-page', null, this.view.contactsPageDOM);
    }
    scroll();
  }//constructor

  //-------------------------------------------------functions--------------------------------------------------------------------

  async renderPageWithServerData(pageURL, pageDOM) {
    const pageContent = await this.model.getPageContent(pageURL);
    const pageToRender = pageDOM(pageContent); // put page content to page DOM
    this.view.render(pageToRender, this.view.mainContainer);
  }//renderPageWithServerData


  addLinkClickListener(linkContainer, linkSelector, pageURL, pageDOM) {
    const link = linkContainer.querySelector(linkSelector);
    link.addEventListener('click', (event) => { 
      event.preventDefault();

      const containerChild = this.view.mainContainer.children[0];
      if(containerChild !== undefined) if(containerChild.className === event.target.className) return;

      if(pageURL !== null) this.renderPageWithServerData(pageURL, pageDOM);
      if(pageURL === null) this.view.render(pageDOM(), this.view.mainContainer);
    });
  }//giveLinkClickListener


  addMenuClickListeners(event) {
    //if menu have already rendered
    const modalChild = this.view.modalContainer.children[0];
    if(modalChild !== undefined) if(modalChild.className === 'menu') {
      this.view.showModal();
      this.view.showMenu(modalChild);
      return;
    };
    //if menu was not rendered
    this.view.render(this.view.menuDOM(), this.view.modalContainer);
    this.menu = document.querySelector('.menu');

    this.view.showModal();
    this.view.showMenu(this.menu);

    const nav = this.menu.querySelector('#nav');
    this.addLinkClickListener(nav, '#main-page', null, this.view.mainPageDOM);
    this.addLinkClickListener(nav, '#about-us-page', null, this.view.aboutUsPageDOM);
    this.addLinkClickListener(nav, '#contacts-page', null, this.view.contactsPageDOM);

    const dancesNav = this.menu.querySelector('#dances-section');
    this.addLinkClickListener(dancesNav, '#salsa', null, this.view.mainPageDOM);
    this.addLinkClickListener(dancesNav, '#bachata', null, this.view.mainPageDOM);
    this.addLinkClickListener(dancesNav, '#kizomba', null, this.view.mainPageDOM);
    this.addLinkClickListener(dancesNav, '#zouk', null, this.view.mainPageDOM);

    const coursesNav = this.menu.querySelector('#courses-section');
    this.addLinkClickListener(coursesNav, '#business', null, this.view.mainPageDOM);
    this.addLinkClickListener(coursesNav, '#relationships', null, this.view.mainPageDOM);
    this.addLinkClickListener(coursesNav, '#dance-trainer', null, this.view.mainPageDOM);

    // scroll();
  }//addMenuClickListeners


  hideModalClickListener () {  
    this.view.modalContainer.addEventListener('click', (event) => {
      const target = event.target;
      if(target.id === "modal-container" || target.nodeName === "A") {
        this.view.hideModal();
      }
    });//modalContinerEventListener
  }

}//class controller------------------------------------------------------------------------------------------------------------------