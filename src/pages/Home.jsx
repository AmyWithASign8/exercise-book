import React from "react";
import { Card } from "../components";

function Home() {
  return (
    <div className="Cards">
      <Card
        namingCard="Счетчик"
        cardRoute="counter"
        descriptionCard="Обычный счетчик на ReactJS, самое простое упражнение."
      />
      <Card
        namingCard="Модальное окно"
        cardRoute="modal"
        descriptionCard="Обычное модальное окно двумя способами ( без использования библиотеки ). Первый способ не анимированное модальное окно, а второй анимированное."
      />
      <Card
        namingCard="Опрос"
        cardRoute="interview"
        descriptionCard="Опрос с шагом и подсчетом правильных ответов."
      />
      <Card
        namingCard="Лист пользователей"
        cardRoute="userlist"
        descriptionCard="Лист с пользователями, где сделан поиск, добавление и удаления пользователей из списка 'избранное', пользователи получены с помощью axios"
      />
    </div>
  );
}

export default Home;
