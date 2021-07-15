import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import {Route, Switch} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

function App() {

  let name = 'Manish'

  return (
    <>
    Gotta catch em' all
    <div style={{display: 'flex'}} >
      <PokemonList />
      <Route path={'/pokemon/:pokemonIndex'}  component={PokemonDetail} />

    {/* ----------------------------------------- */}
    {/* We did this before lunch */}
    {/* ----------------------------------------- */}
      {/* <MyNav /> */}
      {/* Switch ensure only one route is rendered at a time */}
      {/* <Switch> */}
          {/* Checks if the path in the url exactly mathces with / */}
          {/* <Route exact path={'/'} component={Profile} /> */}
          {/* Checks if the path in the url starts with /about */}
          {/* <Route path={'/about'}  component={About} /> */}


          {/* When you want to pass props yourself to components */}
          {/* <Route path={'/about'} render={(routeProps) => {
            return <About name={name}  {...routeProps}  />
          }} /> */}

          {/* Handle dynamic props like this. Use the `:` */}
          {/* <Route path={'/home/:myName'}  component={Home} /> */}
      {/* </Switch> */}
    </div>
    </>

  );
}

export default App;
