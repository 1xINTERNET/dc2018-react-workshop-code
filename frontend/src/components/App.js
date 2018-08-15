import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={ArticleList} />
          <Route path="/article/:id" component={ArticleDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
