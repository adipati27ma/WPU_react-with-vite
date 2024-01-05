import { useState } from 'react';
import PropTypes from 'prop-types';

function Header({ author }) {
  return <h1>Belajar React bareng {author ? author : 'WPU'}🚀</h1>;
}

Header.propTypes = {
  author: PropTypes.string,
};

function Button({ text, onClick, isDisabled }) {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}

function Text({ text }) {
  return <span>{text}</span>;
}

function App() {
  const students = ['sandhika', 'doddy', 'erik'];

  const [isCounterDisabled, setIsCounterDisabled] = useState(false);
  const [isResetDisabled, setIsResetDisabled] = useState(false);
  const [likes, setLikes] = useState(0);

  function handleClickAdd() {
    if (likes === 10) {
      setIsCounterDisabled(true);
      setIsResetDisabled(false);
      setLikes('done');
    } else {
      setLikes(likes + 1);
    }
  }
  function handleClickMinus() {
    if (likes === 0) {
      setIsCounterDisabled(true);
      setIsResetDisabled(false);
      setLikes('done');
    } else {
      setLikes(likes - 1);
    }
  }

  function handleReset() {
    setIsCounterDisabled(false);
    setIsResetDisabled(true);
    setLikes(0);
  }

  return (
    <>
      <Header author="pak Dhika" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={handleClickAdd} disabled={isCounterDisabled}>
        Like ({likes})
      </button>
      <br />

      <Button
        text="-"
        onClick={handleClickMinus}
        isDisabled={isCounterDisabled}
      />
      <Text text={likes} />
      <Button
        text="+"
        onClick={handleClickAdd}
        isDisabled={isCounterDisabled}
      />

      <br />
      <Button
        text="Reset!"
        onClick={handleReset}
        isDisabled={isResetDisabled}
      />
    </>
  );
}

export default App;
