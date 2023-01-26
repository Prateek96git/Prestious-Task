import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Menu from './component/Menu';
import About from './component/About';
import HeadTail from './component/HeadTail';

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/home'} element={<Home/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/headTail'} element={<HeadTail/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;