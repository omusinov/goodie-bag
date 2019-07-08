import React from 'react';
import { CandiesList } from './CandiesList';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { HashRouter as Router, Route } from 'react-router-dom';
import SingleCandy from './SingleCandy';

const Root = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <main>
        <Route path='/candies/:candyId' component={SingleCandy} />
        <Route exact path='/' component={Home} />
        <Route exact path='/candies' component={CandiesList} />
      </main>
    </div>
    </Router>
  )
}

export default Root
