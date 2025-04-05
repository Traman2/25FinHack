import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Model from './pages/model';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/model' element={<Model/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
