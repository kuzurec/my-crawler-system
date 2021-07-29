import React from 'react';
import { css } from '@emotion/css/macro';

function App() {
  const mycolor = 'green';

  return (
    <div className="App">
      <div
        className={css`
          color: ${mycolor};
        `}
      >
        Hello world
      </div>
    </div>
  );
}

export default App;
