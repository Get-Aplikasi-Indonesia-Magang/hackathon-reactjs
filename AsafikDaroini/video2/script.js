function Card(props) {
  return /*#__PURE__*/(
    React.createElement("div", { class: "card" }, /*#__PURE__*/
    React.createElement("p", { class: "title" }, props.name), /*#__PURE__*/
    React.createElement("p", null, props.job)));


}

const App = () => {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Card, { name: "Solikin", job: "Pimpinan" }), /*#__PURE__*/
    React.createElement(Card, { name: "Slamat", job: "Sales" }), /*#__PURE__*/
    React.createElement(Card, { name: "Bagio", job: "Kuri" })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.querySelector('#root'));