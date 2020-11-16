/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import Header from "./Header/Header";
import Preview from "./Preview/Preview";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import "../stylesheets/App.scss";

const App = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleInput = (inputId, inputValue) => {
    console.log(inputId);
    console.log(inputValue);
    if (inputId === "name") {
      setName(inputValue);
    } else if (inputId === "job") {
      setJob(inputValue);
    } else if (inputId === "tel") {
      setTel(inputValue);
    } else if (inputId === "mail") {
      setMail(inputValue);
    } else if (inputId === "linkedin") {
      setLinkedin(inputValue);
    } else if (inputId === "github") {
      setGithub(inputValue);
    }
  };

  return (
    <>
      <Header />
      <main className="cards-main" role="main">
        <Preview
          name={name}
          job={job}
          photo={photo}
          tel={tel}
          mail={mail}
          linkedin={linkedin}
          github={github}
        />
        <Form
          name={name}
          job={job}
          photo={photo}
          tel={tel}
          mail={mail}
          linkedin={linkedin}
          github={github}
          sendInput={handleInput}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
