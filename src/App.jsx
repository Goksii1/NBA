
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Playesr from './Players/Playesr';
import Teams from './Teams/Teams';
import Games from './Games/Games';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>

    <Header/>

    <Routes>
      <Route path= "/"  element={ <Main/>   } />
      <Route path= "/players"  element={  <Playesr/> } />
      <Route path= "/teams"  element={ <Teams/>   } />
      <Route path= "/games"  element={  <Games/>} />
    </Routes>
    </>
  );
}

export default App;
