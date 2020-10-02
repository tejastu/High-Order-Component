import React, { Component } from "react";
import Users from "./user.component";
import Post from "./post.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "english",
    };
  }

  changeLanguage = (data) => {
    this.setState({ lang: data });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Post />
          </div>
          <div className="col-md-6">
            <Users />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
