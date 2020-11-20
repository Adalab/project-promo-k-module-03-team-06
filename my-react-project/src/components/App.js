/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import Header from "./Header/Header";
import Preview from "./Preview/Preview";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import "../stylesheets/App.scss";

const App = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [job, setJob] = useState(localStorage.getItem("job") || "");
  const [photo, setPhoto] = useState(localStorage.getItem("photo") || "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [linkedin, setLinkedin] = useState(
    localStorage.getItem("linkedin") || ""
  );
  const [github, setGithub] = useState(localStorage.getItem("github") || "");
  const [palette, setPalette] = useState(
    localStorage.getItem("palette") || "palette-green"
  );

  // Transformando a valor numérico el valor inicial de palette
  let numberedPalette;
  if (palette === "palette-green") {
    numberedPalette = 1;
  } else if (palette === "palette-red") {
    numberedPalette = 2;
  } else if (palette === "palette-grey") {
    numberedPalette = 3;
  }

  // Objeto Data para envío a generador de tarjetas
  const [data, setData] = useState({
    name: name,
    job: job,
    photo: photo,
    phone: phone,
    email: email,
    linkedin: linkedin,
    github: github,
    palette: numberedPalette,
  });

  const handleInput = (inputId, inputValue) => {
    console.log(inputId);
    console.log(inputValue);
    if (inputId === "name") {
      setName(inputValue);
      localStorage.setItem("name", inputValue);
      setData({ ...data, name: inputValue });
    } else if (inputId === "job") {
      setJob(inputValue);
      localStorage.setItem("job", inputValue);
      setData({ ...data, job: inputValue });
    } else if (inputId === "phone") {
      setPhone(inputValue);
      localStorage.setItem("phone", inputValue);
      setData({ ...data, phone: inputValue });
    } else if (inputId === "email") {
      setEmail(inputValue);
      localStorage.setItem("email", inputValue);
      setData({ ...data, email: inputValue });
    } else if (inputId === "linkedin") {
      setLinkedin(inputValue);
      localStorage.setItem("linkedin", inputValue);
      setData({ ...data, linkedin: inputValue });
    } else if (inputId === "github") {
      setGithub(inputValue);
      localStorage.setItem("github", inputValue);
      setData({ ...data, github: inputValue });
    }
  };

  // Manejando paletas
  const handlePalette = (inputPalette) => {
    setPalette(inputPalette);
    localStorage.setItem("palette", inputPalette);
    let paletteData;
    if (inputPalette === "palette-green") {
      paletteData = 1;
    } else if (inputPalette === "palette-red") {
      paletteData = 2;
    } else if (inputPalette === "palette-grey") {
      paletteData = 3;
    }
    setData({ ...data, palette: paletteData });
  };

  // Manejando imagen
  const handleImage = (imageURL) => {
    setPhoto(imageURL);
    localStorage.setItem("photo", imageURL);
    setData({ ...data, photo: imageURL });
  };

  console.log(data);

  return (
    <>
      <Header />
      <main className="cards-main" role="main">
        <Preview
          name={name}
          job={job}
          photo={photo}
          phone={phone}
          email={email}
          linkedin={linkedin}
          github={github}
          palette={palette}
        />
        <Form
          name={name}
          job={job}
          photo={photo}
          phone={phone}
          email={email}
          linkedin={linkedin}
          github={github}
          sendInput={handleInput}
          palette={palette}
          sendPalette={handlePalette}
          sendImage={handleImage}
        />
      </main>
      <Footer />
    </>
  );
};

export default { App, data };
