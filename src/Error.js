import React, { useState } from 'react';

function Error() {
  const [error, setError] = useState(false);
  
  const createError = () => {
    setError(true);
  }

  if (error) {
    throw new Error("Custom Error");
  }
  return <button onClick={createError}>Break the world</button>
}

export default Error;