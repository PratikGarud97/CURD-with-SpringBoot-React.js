import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import NewEmployee from './components/NewEmployee';
import Update from './components/Update';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<NewEmployee/>} />
      <Route path='/update/:id' element={<Update/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
