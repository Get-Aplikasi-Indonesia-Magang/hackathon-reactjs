const e = React.createElement;

function LikeButton(){
    return e(
        'button',
        { onClick: () => alert('button berfungsi') },
        'Like'
      );
}

// const Button = () => {
//     return <button>Like</button>
// }

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));