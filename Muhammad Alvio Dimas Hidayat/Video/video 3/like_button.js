const e = React.createElement;

function LikeButton() {
    // Menampilkan button like
    return e(
        'button',
        { onClick: () => alert('berfungsi') },
        'Like'
    );
}

const domContainer = document.querySelector("#like_button_container");

ReactDOM.render(e(LikeButton), domContainer);