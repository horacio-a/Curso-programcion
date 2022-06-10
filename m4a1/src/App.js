import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './componets/layout/Footer';
import Nav from './componets/layout/Nav';
import Header from './componets/layout/Header';


import ContactoPage from './pages/ContactoPage';
import IdexPage from './pages/IndexPage';
import NovedadesPage from './pages/MineriaPage';
import NosotrosPage from './pages/NosotrosPage';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path='/' element={<IdexPage />}/>
        <Route path='Nosotros' element={<NosotrosPage />}/>
        <Route path='novedades' element={<NovedadesPage />}/>
        <Route path='contacto' element={<ContactoPage />}/>

      </Routes>
      </BrowserRouter>


      <Footer />
    </div>


  );
}

export default App;
