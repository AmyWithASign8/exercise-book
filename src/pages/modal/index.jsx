import React from "react";
import "./Modal.scss";
import cancelSvg from "../../assets/img/cancel.svg";

function Modal() {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [visibleModal2, setVisibleModal2] = React.useState(false);

  return (
    <div className="Modal">
      <button onClick={() => setVisibleModal(true)}>
        Открыть модальное окно(1 способ)
      </button>
      <button onClick={() => setVisibleModal2(true)}>
        Открыть модальное окно(2 способ)
      </button>
      {visibleModal && (
        <>
          <div className="overlay" onClick={() => setVisibleModal(false)}></div>
          <div className="window">
            <img src={cancelSvg} onClick={() => setVisibleModal(false)} />
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время
              послужили публикация листов Letraset с образцами Lorem Ipsum в
              60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется
              Lorem Ipsum.
            </p>
          </div>
        </>
      )}
      <div className={visibleModal2 ? "animated show" : "animated"}>
        <div className="overlay" onClick={() => setVisibleModal2(false)}></div>
        <div className="window">
          <img src={cancelSvg} onClick={() => setVisibleModal2(false)} />
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн. Его популяризации в новое время послужили публикация листов
            Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
            время, программы электронной вёрстки типа Aldus PageMaker, в
            шаблонах которых используется Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
