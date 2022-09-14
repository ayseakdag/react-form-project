import React, { useEffect, useState } from 'react';

function Example() {
  // Yeni bir state değişkeni belirlenir, biz buna "count" diyeceğiz.
  const [count, setCount] = useState(5);

  useEffect(() => {
    // Browser API kullanılarak document title güncellenir
    console.log('usesff');
  }, []);

  console.log('body');

  setTimeout(() => {
    document.title = `You clicked ${count} times`;
  }, 3000);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
