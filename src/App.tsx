import React from 'react';
import { css } from '@emotion/css/macro';
import { Router, Switch, Route } from 'react-router-dom';
import * as H from 'history';
import Home from './home';
import { Button, registerStyleVar, generate } from '@kuzurec/ui';

const light = css`
  color: green;
`;

export const getStyle = (theme: any) => ({
  title: css`
    color: ${theme.text.color};
  `
});

registerStyleVar({ primaryColor: 'green', hoverColor: generate('green')[4], activeColor: generate('green')[6] });

function App() {
  const style = getStyle({
    text: {
      color: '#3b71fb'
    }
  });

  return (
    <div className="App">
      <div className={style.title}>
        <div className={css({
          margin: '30px'
        })}>
        <Button btnType="primary">Hello</Button>
        </div>
        <Router history={H.createBrowserHistory()}>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
