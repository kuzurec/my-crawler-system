import React, { FC } from 'react';
import { useHistory } from 'react-router';

const Home: FC = () => {
  const history = useHistory();
  console.log(history)
  return <>Home</>
}

export default Home;
