import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePage from './views/HomePage/HomePage';
// import MoviesView from './views/MoviesView';

export default function App() {
  return (
   
     <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {/* <Route path="/movies">
          <MoviesView />
        </Route> */}

      
      </Switch>

      </Container>

      
      );
}

