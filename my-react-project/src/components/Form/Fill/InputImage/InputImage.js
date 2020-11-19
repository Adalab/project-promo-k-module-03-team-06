/* eslint-disable no-useless-constructor */
import React from "react";
import "./InputImage.scss";

const InputImage = (props) => {
  const getImage = () => {
    const image = realClick.current.files[0];
    console.log(image);
    const reader = new FileReader();
    reader.onload = () => {
      const imageURL = reader.result;
      props.sendImage(imageURL);
    };
    reader.readAsDataURL(image);
  };

  const realClick = React.createRef();
  const handleFalseClick = () => {
    realClick.current.click();
  };

  const photo = props.photo || "";

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
        <div
          className="js__profile-preview profile__preview"
          style={{ backgroundImage: "url(" + photo + ")" }}
        ></div>
      </div>
    </div>
  );
};

export default InputImage;
