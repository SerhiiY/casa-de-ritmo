import React from 'react';
import { Link } from "react-router-dom";

const SideBar = () => (
//------------------------------HTML----------------------------------------------------
<aside id="sidebar">
  <nav className="networks">
    <a href="https://t.me/casaderitmo_academy"><img src="./img/footer/telegram.svg" style={{ width: "32px", height: "32px" }} alt="Telegram"/></a>
    <a href="https://www.instagram.com/casaderitmo/"><img src="./img/footer/instagram.svg" style={{width:"32px", height:"32px"}} alt="Instagram"/></a>

    <a href="https://www.facebook.com/CasaDeRitmo/">
      <svg className="facebook-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 60.734 60.733" style={{ enableBackground:"new 0 0 60.734 60.733" }} xmlSpace="preserve">
        <path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
          v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
          v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"/>
      </svg>
    </a>

    <a href="https://www.facebook.com/LatinDanceOpenAir/">
      <svg className="facebook-air" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="32px" height="32px" viewBox="0 0 60.734 60.733" style={{ enableBackground: "new 0 0 60.734 60.733" }} xmlSpace="preserve">
        <path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
          v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
          v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"/>
      </svg>
    </a>

    <a href="https://www.youtube.com/channel/UCsZjPEyhx-mtgmRn4BjXyGw">
        <img src="./img/footer/youtube.svg" style={{ width: "32px", height:"32px"}} alt="YouTube" />
    </a>

    <svg className="gMaps-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
        width="32px" height="32px" fill="#DB4437" viewBox="0 0 257.853 257.853" style={{ enableBackground: "new 0 0 257.853 257.853" }}xmlSpace="preserve">
      <path d="M6.02,103.222V251l11.46,6.37l64.541-40.124l91.35,40.608l7.006-0.484l67.917-42.222l3.54-6.37V61l-11.46-6.37
        l-64.542,40.124L151.31,83.854c2.407-6.428,3.605-12.365,3.605-17.854c0-36.393-29.607-66-66-66s-66,29.607-66,66
        c0,6.047,1.453,12.637,4.377,19.829L9.56,96.853L6.02,103.222z M88.915,15c28.166,0,51,22.833,51,51s-51,76-51,76s-51-47.834-51-76
        S60.748,15,88.915,15z M21.02,107.391l13.04-8.106c4.523,7.653,10.438,15.905,17.777,24.815
        c13.211,16.039,26.267,28.327,26.816,28.842l10.262,9.624l10.262-9.624c0.549-0.515,13.605-12.803,26.816-28.842
        c7.944-9.645,14.221-18.519,18.869-26.697l28.51,12.673l7.006-0.484l56.457-35.098v130.116l-61.001,37.923l-91.35-40.608
        l-7.006,0.484L21.02,237.506V107.391z M118.915,65c0-16.542-13.458-30-30-30s-30,13.458-30,30s13.458,30,30,30
        S118.915,81.542,118.915,65z M73.915,65c0-8.271,6.729-15,15-15s15,6.729,15,15s-6.729,15-15,15S73.915,73.271,73.915,65z"/>
    </svg>
  </nav>
</aside> 
//------------------------------HTML----------------------------------------------------
);

export default SideBar;