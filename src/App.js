import './App.css';
import { Card, Header } from './components';
import {Routes, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Cards'>
        <Routes>
          <Route path="/" element={<Card namingCard="Счетчик" cardRoute='dasda' descriptionCard="Обычный счетчик на ReactJS, самое простое упражнение."/> } exact/>
          <Route path="/Counter" element={<Card />} exact/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
