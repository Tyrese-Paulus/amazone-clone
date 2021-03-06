import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'

function App() {
  return (
    <Router>
            <Header />
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
