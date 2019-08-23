import React from 'react';

export default function aboutUsPage(data) {
  return data =
    <article className="about-us-page">
      <section className="main-info">
        <img src={data.img} alt="img1"></img>
        <h1>{data.header}</h1>
        <h3>{data.about1}</h3>
      </section>
      <aside className="second-info">
        <p className="p1">{data.about2}</p>
        <p className="p2">{data.about3}</p>
      </aside>
    </article>
  ;

};