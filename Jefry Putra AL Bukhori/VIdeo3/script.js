const e = React.createElement;

function LikeButton(){
    return e(
        'button',
        {onClick: () => alert('Button Bekerja')},
        'Like'
    )
}

const domContainer = document.querySelector('#like_button');
ReactDOM.render(e(LikeButton), domContainer);