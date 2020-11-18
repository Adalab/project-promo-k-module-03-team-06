/* eslint-disable no-useless-constructor */
import React from "react";
import "./InputImage.scss";
import ReactDOM from "react-dom";

const InputImage = (props) => {
  const getImage = () => {
    const photo = realClick.current.files[0];
    const reader = new FileReader();
    // console.log(photo);
    reader.onload = () => {
      const url = reader.result;
      // console.log(url);
      props.sendImage(url);
    };
    reader.readAsDataURL(photo);
  };

  const realClick = React.createRef();
  const handleFalseClick = () => {
    realClick.current.click();
  };

  return (
    <div className="fill-image">
      <div className="form">
        <label htmlFor="img-selector">Imagen de perfil</label>
        <button
          onClick={handleFalseClick}
          className="js__profile-trigger fill-image__btn"
          type="button"
        >
          Añadir imagen
        </button>
        <input
          ref={realClick}
          type="file"
          name="img-selector"
          id="img-selector"
          className="js__profile-upload-btn fill-image__hidden"
          accept="image/*"
          onChange={getImage}
        />
      </div>
      <div className="form fill-image__profile">
        <div className="js__profile-image"></div>
        <div className="js__profile-preview profile__preview"></div>
      </div>
    </div>
  );
};

export default InputImage;
