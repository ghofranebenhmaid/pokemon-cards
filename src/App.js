import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/style.scss';

import Home from './pages/Home';
import Pokemon from './pages/PokemonProfil';
import PageNotFound from './pages/404';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pokemon/:pokemonname' component={Pokemon} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
