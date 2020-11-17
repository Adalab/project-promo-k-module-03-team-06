/* eslint-disable no-useless-constructor */

import "./InputImage.scss";

const InputImage = (props) => {
  const getImage = () => {
    const image = getImage.current.files[0];
    console.log(image);
  };

  return (
    <div className="fill-image">
      <div className="form">
        <label htmlFor="img-selector">Imagen de perfil</label>
        <button className="js__profile-trigger fill-image__btn" type="button">
          Añadir imagen
        </button>
        <input
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
