import React from 'react'
import './Counter.scss'

function Counter() {

    const [conterMember, setCounterMember] = React.useState(0);
    const [conterInputMinus, setCounterInputMinus] = React.useState(0);
    const [conterInputPlus, setCounterInputPlus] = React.useState(0);

  const onClickPlus = () =>{
    setCounterMember(conterMember+1);
  }
  const onClickPlus10 = () =>{
    setCounterMember(conterMember+10);
  }
  const onClickPlus100 = () =>{
    setCounterMember(conterMember+100);
  }
  const onClickPlusInput = () =>{
    setCounterMember(conterMember+Number(conterInputPlus));
  }

  const onClickMinus = () =>{
    setCounterMember(conterMember-1);
  }
  const onClickMinus10 = () =>{
    setCounterMember(conterMember-10);
  }
  const onClickMinus100 = () =>{
    setCounterMember(conterMember-100);
  }
  const onClickMinusInput = () =>{
    setCounterMember(conterMember-conterInputMinus);
  }
  const countClear = () => {
    setCounterMember(0);
  }
  return (
    <div className='Counter'>
        <h2>Счетчик:</h2>
        <h1 className={conterMember > 0 ? 'greenH1' : conterMember < 0 ? 'redH1' : 'whiteH1'}>{conterMember}</h1>
        <div>
            <button onClick={onClickMinusInput}>-</button>
            <input type="number" placeholder='Введите кол-во' onChange={(event) => setCounterInputMinus(event.target.value)}/>
            <button onClick={onClickMinus100}>-100</button>
            <button onClick={onClickMinus10}>-10</button>
            <button onClick={onClickMinus}>-1</button>
            <button onClick={onClickPlus}>+1</button>
            <button onClick={onClickPlus10}>+10</button>
            <button onClick={onClickPlus100}>+100</button>
            <input type="number" placeholder='Введите кол-во' onChange={(event) => setCounterInputPlus(event.target.value)}/>
            <button onClick={onClickPlusInput}>+</button>
        </div>
        <button onClick={countClear}>Очистить</button>
    </div>
  )
}

export default Counter