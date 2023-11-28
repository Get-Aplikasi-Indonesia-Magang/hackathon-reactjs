const Card = props => {
  return /*#__PURE__*/(
    React.createElement("div", { class: "card" }, /*#__PURE__*/
    React.createElement("p", { class: "title" }, props.name), /*#__PURE__*/
    React.createElement("p", null, props.job)));


};

const App = () => {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Card, { name: "adreano", job: "CEO" }), /*#__PURE__*/
    React.createElement(Card, { name: "amalia", job: "PM" })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));