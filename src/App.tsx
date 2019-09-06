import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home: React.FC = () => (
  <Layout>
    <h1>Test Dashboard</h1>
  </Layout>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
