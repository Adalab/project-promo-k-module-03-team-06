/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from "react";
import "./Form.scss";
import Design from "./Design/Design";
import Fill from "./Fill/Fill";
import Share from "./Share/Share";
import FormMenu from "./FormMenu/FormMenu";

class Form extends Component {
  constructor(props) {
    super(props);
    this.hide = "hidden";
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(ev) {
    if (this.hide === "hidden") {
      this.hide = "shown";
    } else {
      this.hide = "hidden";
    }

    this.forceUpdate();
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
              handleMenuClick={this.handleDropdown}
            />
            <div className={"colors " + this.hide}>
              <Design />
            </div>
          </fieldset>
          <fieldset>
            <div className="fill">
              <FormMenu
                fieldsetName="fill"
                fieldsetTitle="Rellena"
                fieldsetIcon="far fa-keyboard"
                handleMenuClick={this.handleDropdown}
              />
              <div className={this.hide}>
                <Fill />
              </div>
            </div>
          </fieldset>
          <fieldset className="form-share">
            <FormMenu
              fieldsetName="share"
              fieldsetTitle="Comparte"
              fieldsetIcon="fas fa-share-alt"
              handleMenuClick={this.handleDropdown}
            />
            <div className={this.hide}>
              <Share />
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Form;
