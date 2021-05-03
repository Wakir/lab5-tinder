import './App.css';

import {BrowserRouter as Router, Link as NavLink, Route, Switch} from 'react-router-dom';

import Tinder from './components/Tinder';

function App() {
  return (
    <Router>
        <header>Tinder do projektów</header>
        <main>
            <nav>
                <NavLink to="/" exact>Lista ofert</NavLink>
                <NavLink to="/new">Dodaj nowy</NavLink>
            </nav>
          <Tinder/>
        </main>
    </Router>
);
}

export default App;
