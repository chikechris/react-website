import React from 'react';
import './App.css';
import Home from './Components/pages/HomePage/Home';
import Services from './Components/pages/Services/Services';
import Products from './Components/pages/Products/Products';
import SignUp from './Components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;


