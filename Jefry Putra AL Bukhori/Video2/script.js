const Card = props => {
    return (
      React.createElement("div", { class: "card" }, 
      React.createElement("p", { class: "title" }, props.name), 
      React.createElement("p", null, props.job)));
  
  
  };
  
  const App = () => {
    return (
      React.createElement("div", null, 
      React.createElement(Card, { name: "Cristiano Ronaldo", job: "CF" }), 
      React.createElement(Card, { name: "Marcelino Ferdinan", job: "AMF" }), 
      React.createElement(Card, { name: "Ivar Jenner", job: "DMF" })));
  
  
  };
  ReactDOM.render( React.createElement(App, null), document.querySelector('#main'));