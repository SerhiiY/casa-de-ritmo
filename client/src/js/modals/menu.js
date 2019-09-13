import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

const menu = () => (
  <Router>
    <nav id="menu">
      <section>
        <h4>Меню</h4>
        <Link to='/'>Главная</Link>
        <Link to='/events'>События</Link>
        <Link to='/gallery'>Галерея</Link>
      </section>
      <section>
        <h4>О нас</h4>
        <Link to='/about'>О нас</Link>
        <Link to='/team'>Команда</Link>
        <Link to='/styles'>Стили</Link>
        <Link to='/news'>Новости</Link>
      </section>
      <section>
        <h4>Занятия</h4>
        <Link to='/schedule'>Расписание</Link>
        <Link to='/sales'>Акции</Link>
        <Link to='/prices'>Цены</Link>
        <Link to='/indiv'>Индивидуальные занятия</Link>
        <Link to='/wedding'>Постановка свадебного танца</Link>
      </section>
      <section>
        <h4>Услуги</h4>
        <Link to='/psy-therapy'>Психотерапия</Link>
        <Link to='/lat-therapy'>Латинотерапия</Link>
        <Link to='/yoga'>Йога</Link>
        <Link to='/rent'>Аренда залов</Link>
      </section>
    </nav>
    </Router>
);

export default menu;