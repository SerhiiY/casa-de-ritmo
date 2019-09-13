import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import mainPageDOM from '../pages/main-page';
import aboutPageDOM from '../pages/about-page';
import eventsPageDOM from '../pages/events-page';
import galleryPageDOM from '../pages/gallery-page';
import indivPageDOM from '../pages/indiv-page';
import latTherapyPageDOM from '../pages/lat-therapy-page';
import psyTherapyDOM from '../pages/psy-therapy-page';
import rentPageDOM from '../pages/rent-page';
import salesPageDOM from '../pages/sales-page';
import schedulePageDOM from '../pages/schedule-page';
import stylesPageDOM from '../pages/styles-page';
import teamPageDOM from '../pages/team-page';
import weddingPageDOM from '../pages/wedding-page';
import yogaPageDOM from '../pages/yoga-page';
import newsPageDOM from '../pages/news-page';
import pricesPageDOM from '../pages/prices-page';


import menuDOM from '../modals/menu.js';
import gMapsDOM from '../modals/gMaps.js';

export default class View {
  constructor() {
    this.mainContainer = document.querySelector('#mainContainer');
    this.modalContainer = document.querySelector('#modal-container');
    this.menuContainer = document.querySelector('#menu-container');

    this.menuDOM = menuDOM;
    this.gMapsDOM = gMapsDOM;

  }

  init() {
    // this.render(this.mainPageDOM(), this.mainContainer);
    this.render(this.menuDOM(), this.menuContainer);
    this.reactPagesRouter();
    this.reactModalsRouter();
  }

  render(itemToRender, placeToRender){
    ReactDOM.render(itemToRender, placeToRender);
  }

  reactPagesRouter() {
    ReactDOM.render((
      <Router>
        <Switch>
          <Route exact path="/" component={mainPageDOM} />
          <Route path="/about" component={aboutPageDOM} />
          <Route path="/events" component={eventsPageDOM} />
          <Route path="/gallery" component={galleryPageDOM} />
          <Route path="/indiv" component={indivPageDOM} />
          <Route path="/lat-therapy" component={latTherapyPageDOM} />
          <Route path="/psy-therapy" component={psyTherapyDOM} />
          <Route path="/news" component={newsPageDOM} />
          <Route path="/prices" component={pricesPageDOM} />
          <Route path="/rent" component={rentPageDOM} />
          <Route path="/sales" component={salesPageDOM} />
          <Route path="/schedule" component={schedulePageDOM} />
          <Route path="/styles" component={stylesPageDOM} />
          <Route path="/team" component={teamPageDOM} />
          <Route path="/wedding" component={weddingPageDOM} />
          <Route path="/yoga" component={yogaPageDOM} />
        </Switch>
      </Router>
    ), this.mainContainer);
  }

  reactModalsRouter() {
    ReactDOM.render((
      <Router>
        <Route path="/*#gmaps" component={this.gMapsDOM} />
      </Router>
    ), this.modalContainer);
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