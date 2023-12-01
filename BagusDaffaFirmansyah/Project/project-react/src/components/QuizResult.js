import React from 'react';

function QuizResult(props) {
  return (
    <>
      <div className="show-score">
        Skor Kamu:{props.score}
        <br />
        Total Soal kamu:{props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Coba Lagi ?
      </button>
    </>
  );
}

export default QuizResult;
