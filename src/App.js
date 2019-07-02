import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom'

import {Home , ErrorPage} from './pages'

export default function App() {
  return (
   <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={() => <ErrorPage  code={404}/>}  />
      </Switch>
   </BrowserRouter>
  );
}
