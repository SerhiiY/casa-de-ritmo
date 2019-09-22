import React from 'react';

export default function joinUs() {
  const data =
    <section id="joinUs">
      <form action="./mailer/mail.php" method="POST">
        <p className="p1">Заполните поля ниже и мы с вами свяжемся в близжайшее время =)</p>
        <input required name="name" type="text" placeholder="Введите имя"/>
        <input required name="email" type="text" placeholder="Введите email"/>
        <input required name="phone" type="text" placeholder="Введите номер телефона"/>
        <button>Связаться с нами!</button>
      </form>
    </section>
  ;

  return data;

}