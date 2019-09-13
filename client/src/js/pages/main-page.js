import React from 'react';

const mainPage = () => (
//------------------------------HTML----------------------------------------------------
  <article id="main-page">

    <section className="join-us">
      <h1>Добро пожаловать в CasaDeRitmo!</h1>
      <p className="p1">Начать танцевать легко! Приходите к нам, научитесь танцевать — и вы почувствуете, как вместе с танцем в вашу жизнь войдут бодрость, ритм и позитив</p>
      <button className="join-us-btn"><p className="p1">Записаться на бесплатное занятие</p></button>
    </section>

    <nav id="nav" className="mainPageList">

      <a href="#events-page" id="events-page-link" className="mainPageList__link">
        <img src="./img/main-page/events.png" alt="Events"></img>
        <p>Анонсы и афиши</p>
      </a>
      <a href="#sales-page" id="sales-page-link" className="mainPageList__link">
        <img src="./img/main-page/sales.png" alt="Sales"></img>
        <p>Акции</p>
      </a>
      <a href="#schedule-page" id="schedule-page-link" className="mainPageList__link">
        <img src="./img/main-page/schedule.png" alt="Schedule"></img>
        <p>Расписание</p>
      </a>
      <a href="#latTherapy-page" id="latTherapy-page-link" className="mainPageList__link">
        <img src="./img/main-page/latTherapy.png" alt="latTherapy"></img>
        <p>Латинотерапия</p>
      </a>
      <a href="#psyTherapy-page" id="psyTherapy-page-link" className="mainPageList__link">
        <img src="./img/main-page/psyTherapy.png" alt="psyTherapy"></img>
        <p>Психотерапия</p>
      </a>
      <a href="#styles-page" id="styles-page-link" className="mainPageList__link">
        <img src="./img/main-page/styles.png" alt="Styles"></img>
        <p>Танцевальные стили</p>
      </a>
      <a href="#team-page" id="team-page-link" className="mainPageList__link">
        <img src="./img/main-page/team.png" alt="Team"></img>
        <p>Наша команда</p>
      </a>
    </nav>

  </article>
//------------------------------HTML----------------------------------------------------
);

export default mainPage;