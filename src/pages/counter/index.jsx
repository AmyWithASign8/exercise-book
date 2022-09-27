import React from "react";
import "./Counter.scss";

function Counter() {
  const [conterMember, setCounterMember] = React.useState(0);
  const [conterInputMinus, setCounterInputMinus] = React.useState(0);
  const [conterInputPlus, setCounterInputPlus] = React.useState(0);

  const inputMinus = React.useRef();
  const inputPlus = React.useRef();

  const calculate = (chislo) => {
    setCounterMember(conterMember + chislo);
  };

  const calculateInput = (event, inputType) => {
    if (event.keyCode === 13) {
      calculate(
        inputType == "minus"
          ? Number(-conterInputMinus)
          : Number(conterInputPlus)
      );
      setCounterInputMinus(0);
      setCounterInputPlus(0);
    }
  };

  const clear = () => {
    setCounterMember(0);
  };
  React.useEffect(() => {
    console.log(inputMinus);
  }, []);
  return (
    <div className="Counter">
      <h2>Счетчик:</h2>
      <h1
        className={
          conterMember > 0 ? "greenH1" : conterMember < 0 ? "redH1" : "whiteH1"
        }
      >
        {conterMember}
      </h1>
      <div>
        <button>-</button>
        <input
          title="Нажмите Enter"
          id="minus"
          type="number"
          placeholder="Введите кол-во"
          ref={inputMinus}
          value={conterInputMinus}
          onKeyDown={(event) => calculateInput(event, inputMinus.current.id)}
          onChange={(event) => setCounterInputMinus(event.target.value)}
        />
        <button onClick={() => calculate(-100)}>-100</button>
        <button onClick={() => calculate(-10)}>-10</button>
        <button onClick={() => calculate(-1)}>-1</button>
        <button onClick={() => calculate(1)}>+1</button>
        <button onClick={() => calculate(10)}>+10</button>
        <button onClick={() => calculate(100)}>+100</button>
        <input
          id="plus"
          title="Нажмите Enter"
          type="number"
          placeholder="Введите кол-во"
          value={conterInputPlus}
          ref={inputPlus}
          onKeyDown={(event) => calculateInput(event, inputPlus.current.id)}
          onChange={(event) => setCounterInputPlus(event.target.value)}
        />
        <button>+</button>
      </div>
      <button onClick={clear}>Очистить</button>
    </div>
  );
}

export default Counter;
