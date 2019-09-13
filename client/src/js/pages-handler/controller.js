import scroll from '../helpers/scroll';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.menuBtn = document.querySelector('.menu-button');
    this.gMapsBtn = {
      link: document.querySelectorAll('.gMaps-icon'), 
      pageDOM: this.view.gMapsDOM, 
      placeToRender: this.view.modalContainer
    }

    this.view.init();

    this.menu = document.querySelector('#menu');

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


  addLinkClickListener(params) {
    const pageURL = params.hasOwnProperty("pageURL") ? params.pageURL : null;
    const pageDOM = params.hasOwnProperty("pageDOM") ? params.pageDOM : null;
    const placeToRender = params.hasOwnProperty("placeToRender") ? params.placeToRender : this.view.mainContainer;
    const links = Array.from(params.link);

    links.forEach(link => {
      link.addEventListener('click', (event) => { 
        event.preventDefault();

        const containerChild = placeToRender.children[0]; //Есть ли сейчас что-то отрисованное в контейнере
        if(containerChild !== undefined) if(containerChild.className === event.target.className) return;

        if(pageURL !== null) this.renderWithServerData(pageURL, pageDOM, placeToRender);
        if(pageURL === null) this.view.render(pageDOM(), placeToRender);
        if(placeToRender.id === "modal-container") this.view.showModal(this.view.modalContainer);
      });//addEventListener
    });
  }//giveLinkClickListener


  hideModalOnClick (modal) {  
    modal.addEventListener('click', (event) => {
      const target = event.target;
      if(target.id === "menu-container" || target.className === "page-link") return this.view.hideMenu(this.menu);
      if(target.id === "modal-container") return this.view.hideModal(this.view.modalContainer);
    });//modalEventListener
  } //hideMOdalonClick

  //---------------------------------------------disposable------------------------------------------------\\

  addButtonsClickListeners() {
    this.menuBtn.addEventListener('click', () => this.view.showMenu(this.menu));//btnEventListener
    this.addLinkClickListener(this.gMapsBtn);
  }//addButtonsClickListeners

  addLinksClickListeners() {

  }

  init() {
    this.hideModalOnClick(this.view.modalContainer);
    this.hideModalOnClick(this.view.menuContainer);
    this.addButtonsClickListeners();
    this.addLinksClickListeners();
  }

}//class controller------------------------------------------------------------------------------------------------------------------