import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App';
import Home from '../pages/Home';
import { NotFoundPage } from '../pages/NotFoundPage';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  )
};

export default Rotas;