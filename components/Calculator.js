import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');

  function handleButtonClick(value) {
    if (display === '0') {
      if (value >= '0' && value <= '9') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    } else {
      setDisplay(display + value);
    }
  }

  function handleClear() {
    setDisplay('0');
  }

  function handleEquals() {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch (err) {
      setDisplay('0');
    }
  }

  return (
    <>
      <div>
        <input type="text" value={display} readOnly />
      </div>

      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>

      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>

      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>

      <div>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
    </>
  );
}