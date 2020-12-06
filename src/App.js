import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import CreatePost from './components/CreatePost/CreatePost';
import PostView from './components/PostView/PostView';
import ChangePost from './components/ChangePost/ChangePost';

const App = () => {

  return (
    <div>
      <Router>
        <Route path="/" exact component={Main} />
        <Route
          path="/posts/new"
          exact
          component={CreatePost}
        />
        <Route
          path="/posts/view/:id"
          exact
          render={({ match }) => (<PostView id={match.params.id} />)}
        />
        <Route
          path="/posts/:id/change"
          exact
          render={({ match }) => (<ChangePost id={match.params.id} />)}
        />
      </Router>
    </div>
  );
}

export default App;
