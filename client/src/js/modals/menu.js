import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => (
//------------------------------HTML----------------------------------------------------
  <nav id="menu">
    <section className="menu-nav">
      <section>
        <h4>Меню</h4>
        <Link to='/' className='page-link'>Главная</Link>
        <Link to='/events' className='page-link'>События</Link>
        <Link to='/gallery' className='page-link'>Галерея</Link>
      </section>
      <section>
        <h4>О нас</h4>
        <Link to='/about' className='page-link'>О нас</Link>
        <Link to='/team' className='page-link'>Команда</Link>
        <Link to='/styles' className='page-link'>Стили</Link>
        <Link to='/news' className='page-link'>Новости</Link>
      </section>
      <section>
        <h4>Занятия</h4>
        <Link to='/schedule' className='page-link'>Расписание</Link>
        <Link to='/sales' className='page-link'>Акции</Link>
        <Link to='/prices' className='page-link'>Цены</Link>
        <Link to='/indiv' className='page-link'>Индивидуальные занятия</Link>
        <Link to='/wedding' className='page-link'>Постановка свадебного танца</Link>
      </section>
      <section>
        <h4>Услуги</h4>
        <Link to='/therapy/#psy' className='page-link'>Психотерапия</Link>
        <Link to='/therapy/#lat' className='page-link'>Латинотерапия</Link>
        <Link to='/yoga' className='page-link'>Йога</Link>
        <Link to='/rent' className='page-link'>Аренда залов</Link>
      </section>
    </section>
  </nav>
//------------------------------HTML----------------------------------------------------
);

export default Menu;