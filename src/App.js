import './App.css';

import {BrowserRouter as Router, Link as NavLink} from 'react-router-dom';

import Navigate from './components/Navigate';
import Tinder from './components/Tinder';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <header>Tinder do projektów</header>
        <main>
          <Navigate/>
          <Tinder/>
        </main>
    </Router>
);
}

export default App;
