import './App.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {useState} from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import WhyUS from './components/WhyUS';
import NotFound from './components/NotFound';
import Post from './components/Post';

function App() {
  const [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin(prevLogin => !prevLogin);
  }

  return (
    <Router>
      {/* {forceRefresh} this props used in VrowserRouter forces refresh when pages are changed*/}
      <div className="App">
        <Header />
          <div className='container'>
            <button onClick={handleLogin}>{login ? 'Logout' : 'Login'}</button>
            <Switch>
              {/* Switch matches the very first component only. If exact is not used in any components, then the children path will be ignored and only home will be rendered. */}
              <Route path="/" exact component={Home} /> 
              {/* exact: matches exactly the path given If ignored, it displays content of all matching paths*/}
              <Route path="/about" strict component={About}>
                  <About login={login}/>
              </Route>
              {/* strict matches the trailing spaces exactly. E.g. /about will not be matched only /about/ will be matched */}
              <Route path="/about/whyus" component={WhyUS} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route path="/post/:id" component={Post}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;