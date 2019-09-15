import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from '../static/footer';
import Header from '../static/header';
import SideBar from '../static/side-bar';
import Menu from '../modals/menu';

import MainPage from '../pages/main-page';
import AboutPage from '../pages/about-page';
import EventsPage from '../pages/events-page';
import GalleryPage from '../pages/gallery-page';
import IndivPage from '../pages/indiv-page';
import TherapyPage from '../pages/therapy-page';
import RentPage from '../pages/rent-page';
import SalesPage from '../pages/sales-page';
import SchedulePage from '../pages/schedule-page';
import StylesPage from '../pages/styles-page';
import TeamPage from '../pages/team-page';
import WeddingPage from '../pages/wedding-page';
import YogaPage from '../pages/yoga-page';
import NewsPage from '../pages/news-page';
import PricesPage from '../pages/prices-page';
import NotFoundPage from '../pages/not-found-page';

const App = () => {
  return (
    <section id="react-app">
      <Header />
      <section id="modal-container" className="modal-backdrop hidden"></section>
      <section id="menu-container" className="modal-backdrop hidden">
        <Menu />
      </section>
      <main>
        <SideBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/indiv" component={IndivPage} />
          <Route path="/therapy" component={TherapyPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/prices" component={PricesPage} />
          <Route path="/rent" component={RentPage} />
          <Route path="/sales" component={SalesPage} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/styles" component={StylesPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/wedding" component={WeddingPage} />
          <Route path="/yoga" component={YogaPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <a id="toTopLink" href="#toTop">
        <svg className="toTopBtn" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" width="32px" height="32px" fill="#DB4437" viewBox="0 0 155.139 155.139"
          style={{ enableBackground: "new 0 0 155.139 155.139" }} xmlSpace="preserve">
          <path d="M114.588,45.42h28.17L97.338,0l-45.42,45.42h28.516C76.4,98.937,48.529,142.173,12.381,152.686
            c5.513,1.605,11.224,2.452,17.071,2.452C73.601,155.139,109.94,107.111,114.588,45.42z"/>
        </svg>
      </a>
      <Footer />
    </section>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
);
