import React, { Component } from "react";
import axios from "axios";
import Withdata from "./withdata";

const Post = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1>Post Data</h1>
        <div className="row">
          {props.data.map((data) => (
            <div className="col-md-12" key={data.id}>
              <ul className="list-group">
                <li className="list-group-item disabled" aria-disabled="true">
                  {data.title}
                </li>
                <li className="list-group-item">{data.body}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Withdata(Post, "https://jsonplaceholder.typicode.com/posts");
