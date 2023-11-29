<!-- HTML -->

<div class="root"></div>   

<!-- CSS -->

.card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  width: 150px;
  box-shadow: 0px 2px 2px #ccc;
  display: inline-block;
  margin-right: 10px;
}

.title {
  font-weight : bold;
}

p {
  margin: 0;
}

<!-- Java Script -->

const Card = (props) => {
    return (
        <div class="card">
            <p class="title">{props.name}</p>
            <p>{props.job}</p>
        </div>
    )
}

const App = () => {
    return (
        <Card name="Sugeng" job="UI/UX"/>
        <Card name="Anton" job="Cleaning"/>
        <Card name="Cella" job="Sapu"/>
    )
}

ReactDOM.render(<App/>, querySelector("#root"))