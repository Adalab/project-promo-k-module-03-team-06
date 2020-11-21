/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/no-redundant-roles */
import "./Form.scss";
import Design from "./Design/Design";
import Fill from "./Fill/Fill";
import Share from "./Share/Share";
import FormMenu from "./FormMenu/FormMenu";

const Form = (props) => {
  return (
    <section className="cards-form">
      <form className="form-container" action="" method="POST" role="form">
        <fieldset className="design">
          <FormMenu
            fieldsetName="design"
            fieldsetTitle="Diseña"
            fieldsetIcon="far fa-object-ungroup"
          >
            <Design palette={props.palette} sendPalette={props.sendPalette} />
          </FormMenu>
        </fieldset>

        <fieldset>
          <div className="fill">
            <FormMenu
              fieldsetName="fill"
              fieldsetTitle="Rellena"
              fieldsetIcon="far fa-keyboard"
            >
              <Fill
                name={props.name}
                job={props.job}
                photo={props.photo}
                phone={props.phone}
                email={props.email}
                linkedin={props.linkedin}
                github={props.github}
                sendInput={props.sendInput}
                sendImage={props.sendImage}
              />
            </FormMenu>
          </div>
        </fieldset>

        <fieldset className="form-share">
          <FormMenu
            fieldsetName="share"
            fieldsetTitle="Comparte"
            fieldsetIcon="fas fa-share-alt"
          >
            <Share data={props.data} />
          </FormMenu>
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
