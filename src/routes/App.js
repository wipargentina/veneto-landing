import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Thanks from '../pages/Thanks';
import NotFound from '../pages/NotFound';
import Layout from '../template/Layout';

import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: 'GTM-N468JX6'
};
TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/landing' component={Home} />
          <Route exact path='/gracias' component={Thanks} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
