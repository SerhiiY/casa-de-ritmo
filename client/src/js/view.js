import ReactDom from 'react-dom';

export default class View {
  constructor() {
  }

  render(itemToRender, placeToRender){
    ReactDom.render(itemToRender, placeToRender);
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

  showMenuSmoothly(menu){
    menu.style.setProperty("animation", 'menuShow 0.5s ease-in-out');
  }

  hideMenuSmoothly(menu){
    menu.style.setProperty("animation", 'menuHide 0.5s ease-in-out');
  }

  showModalBgSmoothly(modal){
    this.show(modal);
    modal.style.setProperty("animation", 'modalBgShow 0.5s ease-in-out');
  }

  hideModalBgSmoothly(modal){
    modal.style.setProperty("animation", 'modalBgHide 0.5s ease-in-out');
    setTimeout(this.hide, 400, modal);
  }

}