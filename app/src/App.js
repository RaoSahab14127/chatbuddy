import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router  , Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' Component={HomePage}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/signup' Component={RegisterPage}/>
      </Router>
    </div>
  );
}

export default App;
