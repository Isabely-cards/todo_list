import './App.css'
import { TodoWrapper } from './components/TodoWrapper/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoWrapper/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes
