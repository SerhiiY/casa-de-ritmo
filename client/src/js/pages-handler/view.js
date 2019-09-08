import ReactDOM from 'react-dom';

import mainPageDOM from '../pages/main-page.js';
import contactsPageDOM from '../pages/contacts-page.js';
import aboutUsPageDOM from '../pages/about-us-page.js';
import menuDOM from '../modals/menu.js';
import gMapsDOM from '../modals/gMaps.js';

export default class View {
  constructor() {
    this.mainContainer = document.querySelector('#mainContainer');
    this.modalContainer = document.querySelector('[data-id="modal-container"]');
    this.menuContainer = document.querySelector('[data-id="menu-container"]');

    this.mainPageDOM = mainPageDOM;
    this.contactsPageDOM = contactsPageDOM;
    this.aboutUsPageDOM = aboutUsPageDOM;
    this.menuDOM = menuDOM;
    this.gMapsDOM = gMapsDOM;
  }

  init() {
    this.render(this.mainPageDOM(), this.mainContainer);
    this.render(this.menuDOM(), this.menuContainer);
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
    this.showModal(this.menuContainer);
  }

  hideMenu(menu){
    menu.style.setProperty("animation", 'menuHide 0.5s ease-in-out');
    this.hideModal(this.menuContainer);
  }

  showModal(modal){
    this.show(modal);
    modal.style.setProperty("animation", 'modalBgShow 0.3s ease-in-out');
  }

  hideModal(modal){
    modal.style.setProperty("animation", 'modalBgHide 0.3s ease-in-out');
    setTimeout(() => this.hide(modal), 250);
  }

}