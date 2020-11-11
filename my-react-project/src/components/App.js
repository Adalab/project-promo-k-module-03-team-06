/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Header from "./Header/Header";
import Preview from "./Preview/Preview";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import "../stylesheets/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main className="cards-main" role="main">
          <Preview />
          <Form />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
