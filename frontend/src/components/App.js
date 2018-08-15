import React, { Component } from "react";

import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList />
        <ArticleDetail id="1" />
      </div>
    );
  }
}

export default App;
