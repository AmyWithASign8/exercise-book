import './App.css';
import { Card, Header } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Cards'>
        <Card namingCard="Счетчик" descriptionCard="Обычный счетчик на ReactJS"/>
      </div>
    </div>
  );
}

export default App;
