/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

function App() {
  return (
    <div className="App">
      <div
        css={css`
          color: green;
        `}
      >
        Hello world
      </div>
    </div>
  );
}

export default App;
