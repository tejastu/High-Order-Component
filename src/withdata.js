import React, { Component } from "react";
import axios from "axios";

const Withdata = (WrappedComponent, fetchdata) => {
  class Withdata extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
      };
    }

    async componentDidMount() {
      let response = await axios.get(fetchdata);
      this.setState({ data: response.data });
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }
  return Withdata;
};

export default Withdata;
