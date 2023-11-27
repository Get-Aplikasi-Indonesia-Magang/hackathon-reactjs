// Membuat alias 'e' untuk 'React.createElement' agar lebih ringkas.
const e = React.createElement;

// Mendefinisikan komponen 'LikeButton'.
function LikeButton() {
  // Menggunakan 'React.createElement' untuk membuat elemen tombol.
  return e(
    'button',
    { onClick: () => alert('button work') },
    'Like'
  );
}

// Memilih elemen dengan id 'like_button_container' di dalam dokumen HTML.
const domContainer = document.querySelector('#like_button_container');

// Membuat root React untuk merender komponen di dalam elemen yang telah dipilih.
const root = ReactDOM.createRoot(domContainer);

// Me-render komponen 'LikeButton' di dalam root React.
root.render(e(LikeButton));
