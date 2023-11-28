import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Footer </h3>
        {this.props.paraf()}
      </div>
    );
  }
}
export default Footer;
