import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/auth/Login";
import Chat from "./components/chat/Chat"
import NewsList from "./components/news/NewsList"
import { AuthProvider } from "./components/contexts/AuthContext"
function App() {
  return (
    <Router>
      <AuthProvider>  
        <Switch>
          <Route path = "/main" component={NewsList}/>
          <Route path = "/chat" component={Chat}/>
          <Route path = "/" component={Login} exact/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
