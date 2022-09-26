import React from 'react';
import {Card} from '../components'

function Home() {
  return (
    <div>
        <Card namingCard="Счетчик" cardRoute='counter' descriptionCard="Обычный счетчик на ReactJS, самое простое упражнение."/>
        <Card namingCard="Модальное окно" cardRoute='modal' descriptionCard="Обычное модальное окно двумя способами ( без использования библиотеки ). Первый способ не анимированное модальное окно, а второй анимированное."/>
    </div>
  )
}

export default Home