import "./App.scss";
import { Header } from "./components";
import { Routes, Route } from "react-router";
import { Counter, Home, Interview, Modal, UserList } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/counter" element={<Counter />} exact />
          <Route path="/modal" element={<Modal />} exact />
          <Route path="/interview" element={<Interview />} exact />
          <Route path="/userlist" element={<UserList />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
