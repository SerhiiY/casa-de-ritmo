import scroll from '../helpers/scroll';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.menuBtn = document.querySelector('.menu-button');
    this.fbIcon =  document.querySelector('.fb-icon');
    
    this.view.init();

    this.navs = document.body.querySelectorAll('#nav');
    this.menu = document.querySelector('.menu');

    this.init();
    scroll();
  }//constructor

  //-----------------------------------------------||Functions||------------------------------------------------------------------\\

  //-------------------------------------------------universal------------------------------------------------\\

  async renderWithServerData(pageURL, pageDOM, placeToRender) {
    const pageContent = await this.model.getPageContent(pageURL);
    const pageToRender = pageDOM(pageContent); // put page content to page DOM
    this.view.render(pageToRender, placeToRender);
    if(placeToRender.dataset.id === "modal-container") this.view.showModal(this.view.modalContainer);
  }//renderPageWithServerData


  addLinkClickListener(linkContainer, linkSelector, pageURL, pageDOM, placeToRender) {
    const link = linkContainer.querySelector(linkSelector);
    link.addEventListener('click', (event) => { 
      event.preventDefault();

      const containerChild = placeToRender.children[0];
      if(containerChild !== undefined) if(containerChild.className === event.target.className) return;

      if(pageURL !== null) this.renderWithServerData(pageURL, pageDOM, placeToRender);
      if(pageURL === null) this.view.render(pageDOM(), placeToRender);
      if(placeToRender.dataset.id === "modal-container") this.view.showModal(this.view.modalContainer);
    });
  }//giveLinkClickListener


  hideModalOnClick (modal) {  
    modal.addEventListener('click', (event) => {
      const target = event.target;
      if(target.dataset.id === "menu-container" || target.className === "page-link") return this.view.hideMenu(this.menu);
      if(target.dataset.id === "modal-container") return this.view.hideModal(this.view.modalContainer);
    });//modalEventListener
  } //hideMOdalonClick

  //---------------------------------------------disposable------------------------------------------------\\

  addMenuClickListeners() {
    this.addLinkClickListener(this.menu, '#salsa', null, this.view.mainPageDOM, this.view.mainContainer);
    this.addLinkClickListener(this.menu, '#bachata', null, this.view.mainPageDOM, this.view.mainContainer);
    this.addLinkClickListener(this.menu, '#kizomba', null, this.view.mainPageDOM, this.view.mainContainer);
    this.addLinkClickListener(this.menu, '#zouk', null, this.view.mainPageDOM, this.view.mainContainer);
    this.addLinkClickListener(this.menu, '#business', null, this.view.mainPageDOM, this.view.mainContainer);
    this.addLinkClickListener(this.menu, '#relationships', null, this.view.mainPageDOM, this.view.mainContainer);
    this.addLinkClickListener(this.menu, '#dance-trainer', null, this.view.mainPageDOM, this.view.mainContainer);
  }//addMenuClickListeners


  addButtonsClickListeners() {
    this.menuBtn.addEventListener('click', () => this.view.showMenu(this.menu));//btnEventListener
    this.fbIcon.addEventListener('click', () => window.location.href = 'https://www.facebook.com/CasaDeRitmo/');
    this.addLinkClickListener(document, '.gMaps-icon', null, this.view.gMapsDOM, this.view.modalContainer);
    for(const nav of this.navs){
      this.addLinkClickListener(nav, '#main-page', null, this.view.mainPageDOM, this.view.mainContainer);
      this.addLinkClickListener(nav, '#about-us-page', null, this.view.aboutUsPageDOM, this.view.mainContainer);
      this.addLinkClickListener(nav, '#contacts-page', null, this.view.contactsPageDOM, this.view.mainContainer);
    }
  }//addButtonsClickListeners


  init() {
    this.hideModalOnClick(this.view.modalContainer);
    this.hideModalOnClick(this.view.menuContainer);
    this.addMenuClickListeners();
    this.addButtonsClickListeners();
  }

}//class controller------------------------------------------------------------------------------------------------------------------