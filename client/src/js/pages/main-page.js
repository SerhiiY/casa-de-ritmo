import React from 'react';

export default function mainPage () {
  const data =
//------------------------------HTML----------------------------------------------------
    <article className="main-page">

      <section className="main-info">
        <img src='./img/main-page/main.jpg' alt="img1"></img>
        <h1>Welcome to Casa De Ritmo!</h1>
        <h3>It is the best dance school in the world!</h3>
      </section>

      <aside className="second-info">
        <p className="p1">We provide a lot of facilities and birthdays to feel comfortable and enjoy every evening!</p>
        <p className="p2">We have well-qualified and experienced teachers with great feeling of humor and with ability to talk about everything!</p>
      </aside>

    </article>
//------------------------------HTML----------------------------------------------------
  ;
  return data;
};