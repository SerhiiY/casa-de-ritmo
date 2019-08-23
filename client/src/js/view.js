import ReactDom from 'react-dom';

export default class View {
  constructor() {
  }

  render(itemToRender, placeToRender){
    ReactDom.render(itemToRender, placeToRender);
  }

}