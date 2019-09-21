import React from 'react';
import { Link } from "react-router-dom";

export default function schedulePage() {
  const data =
//------------------------------HTML----------------------------------------------------
    <article id="schedule-page">
      <h1>Расписание занятий</h1>
      <section className="schedule-container">
        <a href="./files/CDR_schedule.docx">
          <svg className="download-btn" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style={{enableBackground: "new 0 0 512 512", width: "32px", height: "32px"}} xmlSpace="preserve">
            <g>
              <path d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64
                c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472
                c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"/>
              <path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"/>
            </g>
          </svg>
          <span>Скачать расписание</span>
        </a>
        <img src="./img/schedule-page/monday.png" alt="monday"/>
        <img src="./img/schedule-page/tuesday.png" alt="tuesday"/>
        <img src="./img/schedule-page/wednesday.png" alt="wednesday"/>
        <img src="./img/schedule-page/thursday.png" alt="thursday"/>
        <img src="./img/schedule-page/saturday.png" alt="saturday"/>
        <img src="./img/schedule-page/sunday.png" alt="sunday" />
        <img src="./img/schedule-page/duration.png" alt="duration"/>
      </section>
    </article>
//------------------------------HTML----------------------------------------------------
  ;
  return data;
};