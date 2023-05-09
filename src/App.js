import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import OtherInterests from "./Components/OtherInterests";
import Projects from "./Components/Projects";

class App extends Component {
  constructor(props) {
    super();
    this.state = { resumeData: {} };
  }

  getResumeData() {
    $.ajax({
      url: "/public/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Projects data={this.state.resumeData.projects} />
        <OtherInterests data={this.state.resumeData.otherInterests} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
