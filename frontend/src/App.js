import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = React.useState(null)
  const BASE_URL = "https://demo-react-nodeapp.herokuapp.com"
  React.useEffect(() => {
    axios.get(`${BASE_URL}/api`)
      .then(response => {
        setUser(response.data.user)
      })
  }, [])

  return user && (
    <div className="App">
      <header className="App-header">
        <img src={user.avatar_url} className="App-logo" alt="logo" />
        <p>
          {user.login}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
