import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ArticleDetail from './components/article/article-detail/article-detail';
import App from './App';

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home}/>
      <Route path="home" component= {Home} />
      <Route path="about" component= {About} />
      <Route path="contact" component= {Contact} />
      <Route path="/article/:id" component= {ArticleDetail} />
      <Route path="*" component= {Home} />
    </Route>
  </Router>
, document.getElementById('root'));
registerServiceWorker();