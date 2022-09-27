import React from "react";
import { Card } from "../../components";
import "./Home.scss";

function Home() {
  const exerciseArray = [
    {
      namingCard: "Счетчик",
      cardRoute: "counter",
      descriptionCard: "Обычный счетчик на ReactJS, самое простое упражнение.",
    },
    {
      namingCard: "Модальное окно",
      cardRoute: "modal",
      descriptionCard:
        "Обычное модальное окно двумя способами ( без использования библиотеки ). Первый способ не анимированное модальное окно, а второй анимированное.",
    },
    {
      namingCard: "Опрос",
      cardRoute: "interview",
      descriptionCard: "Опрос с шагом и подсчетом правильных ответов.",
    },
    {
      namingCard: "Лист пользователей",
      cardRoute: "userlist",
      descriptionCard:
        "Лист с пользователями, где сделан поиск, добавление и удаления пользователей из списка 'избранное', пользователи получены с помощью axios.",
    },
  ];

  const [inputSearch, setInputSearch] = React.useState("");

  const filteredCards = exerciseArray.filter((card) => {
    return card.namingCard.toLowerCase().includes(inputSearch.toLowerCase());
  });
  return (
    <div className="Home">
      <input
        placeholder="Введите название"
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
      />

      {filteredCards.length != 0 ? (
        <div className="Cards">
          {filteredCards.map((exercise) => (
            <Card
              namingCard={exercise.namingCard}
              cardRoute={exercise.cardRoute}
              descriptionCard={exercise.descriptionCard}
              key={exercise.cardRoute}
            />
          ))}
        </div>
      ) : (
        <h1>😔К сожалению по вашему запросу ничего не найдено😔</h1>
      )}
    </div>
  );
}

export default Home;
