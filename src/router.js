import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './components/Layout';
import InputMoneyBug from './routes/InputMoneyBug';
import ResultPage from './routes/ResultPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={InputMoneyBug} />
          <Route path="/page1" exact component={ResultPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
