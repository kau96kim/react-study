import React, { useState } from 'react';

function Error() {
  const [error, setError] = useState(false);
  
  const createError = () => {
    setError(true);
  }

  return (
    <div>
      {error ? Error() : <button onClick={createError}>Break the world</button>}
    </div>
  )
}

export default Error;