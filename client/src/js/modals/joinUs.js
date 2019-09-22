import React from 'react';

export default function joinUs() {
  const data =
    <section id="joinUs">
      <form action="tel:+380950627459">
        <p className="p1">Заполните поля ниже и мы с вами свяжемся в близжайшее время =)</p>
        <input name="name" type="text" required placeholder="Введите имя"/>
        <input name="email" type="text" required placeholder="Введите email"/>
        <input name="phone" type="text" required placeholder="Введите номер телефона"/>
        <button type="submit">Связаться с нами!</button>
      </form>
    </section>
  ;

  return data;

}