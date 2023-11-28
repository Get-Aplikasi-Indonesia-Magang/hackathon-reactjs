const Card = () => {
    return (
        <div class="card">
            <p class="title">Rafael Christian</p>
            <p>FrontEnd Dev</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Card />
            <Card />
        </div>
    )
}

ReactDOM.render(<App />,
document.querySelector('#root'))