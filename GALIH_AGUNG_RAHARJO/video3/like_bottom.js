const e = React.createElement;

function likeButton() {
    return e(
        'button',
        { onClick: () => console.log("button Work") },
        'Like'
    );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(likeButton));