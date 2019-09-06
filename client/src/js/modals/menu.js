import React from 'react';

export default function menu() {
  const data = 
    <nav className="menu">
      <nav id="nav">
        <h4>Menu</h4>
        <a className="page-link" href="#main" id="main-page">Main</a>
        <a className="page-link" href="#main" id="about-us-page">About</a>
        <a className="page-link" href="#main" id="contacts-page">Contacts</a>
      </nav>
      <section id='dances-section'>
        <h4>Dance styles</h4>
        <a className="page-link" href="#main" id="salsa">Salsa</a>
        <a className="page-link" href="#main" id="bachata">Bachata</a>
        <a className="page-link" href="#main" id="kizomba">Kizomba</a>
        <a className="page-link" href="#main" id="zouk">Zouk</a>
      </section>
      <section id='courses-section'>
        <h4>Courses & trainings</h4>
        <a className="page-link" href="#main" id="business">Business</a>
        <a className="page-link" href="#main" id="relationships">Relationships</a>
        <a className="page-link" href="#main" id="dance-trainer">Dance trainer</a>
      </section>
    </nav>
  ;
  return data;
}