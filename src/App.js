import React from 'react';
import { Route } from 'react-router-dom';

import './App.css'
import Navigation from './components/Navigation/Navigation';
import ViewIdeas from './containers/ViewIdeas/ViewIdeas';
import NewIdea from './containers/NewIdea/NewIdea';
import SingleIdea from './components/SingleIdea/SingleIdea';




function App() {
  return (
    <div>
    <Navigation />
    <Route path="/create-new-idea" component={NewIdea} />
    <Route path="/" exact component={ViewIdeas} />
    <Route path="/view-idea" component={SingleIdea} />
    </div>
  );
}

export default App;
