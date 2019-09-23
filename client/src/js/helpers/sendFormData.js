import React from 'react';
import ReactDOM from 'react-dom';
import thanksJoinUs from '../modals/thanksJoinUs';

const modalContainer = $('#modal-container')[0];

const thankYouFn = (modal) => {
  ReactDOM.render(thanksJoinUs(), modal);
  modal.className = modal.className.replace(/\bhidden\b/g, "");
  modal.style.setProperty("animation", 'modalBgShow 0.3s ease-in-out');
};

const token = '950190261:AAFs-RZUsWy9sXYOutWYCIwd6_ApGb8f8H4';
const chat_id = '-366038242';

export default function sendFormData(evt) {

  const userName = $('input[name="name"]')[0].value;
  const userEmail = $('input[name="email"]')[0].value;
  const userPhone = $('input[name="phone"]')[0].value;

  if (!userName || !userEmail || !userPhone) return;

  const userMsg = `${userName} оставил заявку на звонок. Email: ${userEmail} Номер телефона: ${userPhone}`;
  
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${userMsg}`)
  .then( response => {
    if(response.ok) return response.json();
    throw new Error('Can not get page data!');
  })
  .then(data => {
    console.log(data);
    })
  .catch(error => console.error('Can not get page data!', error));

  thankYouFn(modalContainer);
}

