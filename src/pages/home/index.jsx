import React from "react";
import { Card } from "../../components";
import "./Home.scss";

function Home() {
  const exerciseArray = [
    {
      imageCard:
        "https://sun9-34.userapi.com/impg/VsBNgh6bBaCoI-cO3QJTcFvfhppWV_KwbiOx_Q/h_zAV4HeVqU.jpg?size=915x348&quality=96&sign=8c74111e5d2eb6fcc34dce9506c520b7&type=album",
      namingCard: "Счетчик",
      cardRoute: "counter",
      descriptionCard: "Обычный счетчик на ReactJS, самое простое упражнение.",
    },
    {
      imageCard:
        "https://sun9-39.userapi.com/impg/0MpojAwoi9h5Wr2Cx2OXQe3OovzEvpHaKeIB1g/jsd9BzUOARY.jpg?size=1058x530&quality=96&sign=4dc0018ee80a88c959d78193905001a1&type=album",
      namingCard: "Модальное окно",
      cardRoute: "modal",
      descriptionCard:
        "Обычное модальное окно двумя способами ( без использования библиотеки ). Первый способ не анимированное модальное окно, а второй анимированное.",
    },
    {
      imageCard:
        "https://sun9-78.userapi.com/impg/rxcv5tHJfJsBAMWpL6uuANjjyxUQ65dxRjx3_w/lzFtmVqChIM.jpg?size=782x543&quality=96&sign=e8b273b2f52db7a6fe0d32527892974d&type=album",
      namingCard: "Опрос",
      cardRoute: "interview",
      descriptionCard: "Опрос с шагом и подсчетом правильных ответов.",
    },
    {
      imageCard:
        "https://sun9-41.userapi.com/impg/L_x81foTRnFOdBRGVQoo59eyqoYIkmkanrtIBg/TuVUUky80Xk.jpg?size=1047x723&quality=96&sign=4ee0d2023c783966b42eed308a93f5d0&type=album",
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
              imageCard={exercise.imageCard}
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
