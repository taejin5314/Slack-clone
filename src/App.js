import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';

function App() {
  const [User, setUser] = useState(null);

  return (
    <div className="app">
      <Router>
        {!User ? (
          <Login />
        ) : (
            <>
              {/* Header */}
              < Header />
              <div className="app__body">
                {/* Sidebar */}
                <Sidebar />

                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
