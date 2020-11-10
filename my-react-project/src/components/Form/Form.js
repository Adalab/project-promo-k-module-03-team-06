import React, { Component } from "react";
import "./Form.scss";
import Design from "./Design/Design";
import Fill from "./Fill/Fill";
import Share from "./Share/Share";
import FormMenu from "./FormMenu/FormMenu";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cards-form">
        <form
          className="js-form form-container"
          action=""
          method="POST"
          role="form"
        >
          <fieldset className="design">
            <FormMenu
              fieldsetName="design"
              fieldsetTitle="Diseña"
              fieldsetIcon="far fa-object-ungroup"
            >
              <Design />
            </FormMenu>
          </fieldset>

          <fieldset>
            <div className="fill">
              <FormMenu
                fieldsetName="fill"
                fieldsetTitle="Rellena"
                fieldsetIcon="far fa-keyboard"
              >
                <Fill />
              </FormMenu>
            </div>
          </fieldset>

          <fieldset className="form-share">
            <FormMenu
              fieldsetName="share"
              fieldsetTitle="Comparte"
              fieldsetIcon="fas fa-share-alt"
            >
              <Share />
            </FormMenu>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Form;
