import ReactDOM from 'react-dom';

import mainPageDOM from '../pages/main-page.js';
import contactsPageDOM from '../pages/contacts-page.js';
import aboutUsPageDOM from '../pages/about-us-page.js';
import menuDOM from '../modals/menu.js';
import gMapsDOM from '../modals/gMaps.js';

export default class View {
  constructor() {
    this.mainContainer = document.querySelector('main');
    this.modalContainer = document.querySelector('#modal-container');

    this.mainPageDOM = mainPageDOM;
    this.contactsPageDOM = contactsPageDOM;
    this.aboutUsPageDOM = aboutUsPageDOM;
    this.menuDOM = menuDOM;
    this.gMapsDOM = gMapsDOM;
    
  }

  render(itemToRender, placeToRender){
    ReactDOM.render(itemToRender, placeToRender);
  }

  show(item){
    item.className = item.className.replace(/\bhidden\b/g, "");
  }

  hide(item){
    let arr = item.className.split(" ");
    if (arr.indexOf('hidden') == -1) {
      item.className += " " + 'hidden';
    };
  }

  showMenu(menu){
    menu.style.setProperty("animation", 'menuShow 0.3s ease-in-out');
  }

  hideMenu(menu){
    menu.style.setProperty("animation", 'menuHide 0.5s ease-in-out');
  }

  showModal(){
    this.show(this.modalContainer);
    this.modalContainer.style.setProperty("animation", 'modalBgShow 0.3s ease-in-out');
  }

  hideModal(){
    this.modalContainer.style.setProperty("animation", 'modalBgHide 0.3s ease-in-out');
    setTimeout(() => this.hide(this.modalContainer), 250);
  }

}