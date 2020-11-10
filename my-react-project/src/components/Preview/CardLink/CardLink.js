import React, { Component } from "react";
import "./CardLink.scss";


class CardLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <a
          href="#"
          className={"card-list__link js-" + this.props.linkType}
          aria-label={this.props.linkAria}
        >
          <div
            className={
              "card-list__icon-container js-border-" + this.props.linkType
            }
          >
            <i
              className={
                this.props.linkIcon +
                " card-list__icons js-color-" +
                this.props.linkType
              }
            ></i>
          </div>
        </a>
      </li>
    );
  }
}

export default CardLink;
