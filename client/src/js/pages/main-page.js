import React from 'react';
import {Link} from "react-router-dom";
const mainPage = () => (
//------------------------------HTML----------------------------------------------------
  <article id="main-page">

    <article className="join-us">
      <section className="join-us__content">
        <h1>Добро пожаловать в CasaDeRitmo!</h1>
        <p className="p1">Начать танцевать легко! Приходите к нам, научитесь танцевать — и вы почувствуете, как вместе с танцем в вашу жизнь войдут бодрость, ритм и позитив</p>
        <button className="join-us__content--btn">
          <p className="p1">Записаться на бесплатное занятие</p>
        </button>
      </section>
    </article>

    <nav id="nav" className="mainPageList">

      <Link to="/events" className="mainPageList__link">
        <img src="./img/main-page/events.jpg" alt="Events"></img>
        <p>Анонсы и афиши</p>
      </Link>
      <Link to="/sales" className="mainPageList__link">
        <img src="./img/main-page/sales.jpg" alt="Sales"></img>
        <p>Акции</p>
      </Link>
      <Link to="/schedule" className="mainPageList__link">
        <img src="./img/main-page/schedule.jpg" alt="Schedule"></img>
        <p>Расписание</p>
      </Link>
      <Link to="/therapy/#lat" className="mainPageList__link">
        <img src="./img/main-page/therapy-lat.jpg" alt="lat-therapy"></img>
        <p>Латинотерапия</p>
      </Link>
      <Link to="/therapy/#psy" className="mainPageList__link">
        <img src="./img/main-page/therapy-psy.jpg" alt="psy-therapy"></img>
        <p>Психотерапия</p>
      </Link>
      <Link to="/styles" className="mainPageList__link">
        <img src="./img/main-page/styles.jpg" alt="Styles"></img>
        <p>Танцевальные стили</p>
      </Link>
      <Link to="/team" className="mainPageList__link">
        <img src="./img/main-page/team.jpg" alt="Team"></img>
        <p>Наша команда</p>
      </Link>
    </nav>

  </article>
//------------------------------HTML----------------------------------------------------
);

export default mainPage;
