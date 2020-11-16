/* eslint-disable no-useless-constructor */
import Input from "./Input/Input";
import InputImage from "./InputImage/InputImage";
import "./Fill.scss";

const Fill = (props) => {
  return (
    <div>
      <Input
        inputName="name"
        inputLabel="Nombre completo"
        inputType="text"
        inputPlaceholder="Frida Kahlo"
        inputValue={props.name}
        sendInput={props.sendInput}
      />
      <Input
        inputName="job"
        inputLabel="Puesto"
        inputType="text"
        inputPlaceholder="Pintora"
        inputValue={props.job}
        sendInput={props.sendInput}
      />

      <InputImage photo={props.photo} />

      <Input
        inputName="email"
        inputLabel="Email"
        inputType="email"
        inputPlaceholder="frida.Kahlo@gmail.com"
        inputValue={props.tel}
        sendInput={props.sendInput}
      />
      <Input
        inputName="phone"
        inputLabel="Teléfono"
        inputType="tel"
        inputPlaceholder="666 555 444"
        inputValue={props.mail}
        sendInput={props.sendInput}
      />
      <Input
        inputName="linkedin"
        inputLabel="LinkedIn"
        inputType="text"
        inputPlaceholder="linkedin.com/in/frida-kahlo"
        inputValue={props.linkedin}
        sendInput={props.sendInput}
      />
      <Input
        inputName="github"
        inputLabel="GitHub"
        inputType="text"
        inputPlaceholder="frida-kahlo"
        inputValue={props.github}
        sendInput={props.sendInput}
      />
    </div>
  );
};

export default Fill;
