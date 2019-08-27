import React from 'react';

export default function menu() {
  const data = 
    <nav className="menu">
      <nav id="nav">
        <h4>Menu</h4>
        <a href="" id="main-page">Main</a>
        <a href="" id="about-us-page">About</a>
        <a href="" id="contacts-page">Contacts</a>
      </nav>
      <section id='dances-section'>
        <h4>Dance styles</h4>
        <a href="" id="salsa">Salsa</a>
        <a href="" id="bachata">Bachata</a>
        <a href="" id="kizomba">Kizomba</a>
        <a href="" id="zouk">Zouk</a>
      </section>
      <section id='courses-section'>
        <h4>Courses & trainings</h4>
        <a href="" id="business">Business</a>
        <a href="" id="relationships">Relationships</a>
        <a href="" id="dance-trainer">Dance trainer</a>
      </section>
    </nav>
  ;
  return data;
}