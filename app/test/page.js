'use client'
import React, { useRef, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    setCount(countRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Timer;
