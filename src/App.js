import {BrowserRouter, Route, Link} from 'react-router-dom'
import HeadStrip from './components/HeadStrip';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeadStrip />
        <Route path='/' exact component={Landing}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/contacts' component={Contacts}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
