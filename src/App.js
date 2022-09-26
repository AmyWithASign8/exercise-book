import './App.scss';
import { Card, Header } from './components';
import {Routes, Route} from 'react-router';
import { Counter, Home, Interview, Modal } from './pages';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Cards'>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/counter" element={<Counter/>} exact/>
          <Route path="/modal" element={<Modal/>} exact/>
          <Route path="/interview" element={<Interview/>} exact/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
