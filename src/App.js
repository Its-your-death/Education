import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Headers/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <NavBar />
        <div className='App-wrapper-content'>
          <Route path ='/dialogs' component={Dialogs} />
          <Route path ='/profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
