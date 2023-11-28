const Card = (props) =>{
return (
<div class="card"> 
  <p class="title">{props.name}</p>
  <p>{props.pekerjaan}</p> 
  </div>
  )
}

const App = () => {
return (
<div>
<Card name="Umma" pekerjaan="Desainer"/>
<Card name="Ridho" pekerjaan="Data Entery"/>
<Card name="Diko" pekerjaan="CEO"/>
</div>
)
}

ReactDOM.render(<App />, document.querySelector('#root'))