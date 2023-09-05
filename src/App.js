import { BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Header from './components/Headers';
import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div>
      <Header />
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path ="/friends" exact>
        <FriendList/>
      </Route>
      <Route path = "/friends/add" exact>
        <AddFriend/>
      </Route>
    </div>
  );
}

export default App;
