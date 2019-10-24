import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import links from '../config/links';
import App from '../components/App';
import Provider from './provider';
import StartPage from '../components/StartPage';
import Register from '../components/Register';
import LoginOne from '../components/Login/LoginOne';
import LoginTwo from '../components/Login/LoginTwo';
import LoginThree from '../components/Login/LoginThree';

class Routes extends PureComponent {
  render() {
    return (
      <App>
        <Switch>
          <Provider>
            <Route exact path={links.start_page} component={StartPage} />
            <Route path={links.register} component={Register} />
            <Route path={links.login_one} component={LoginOne} />
            <Route path={links.login_two} component={LoginTwo} />
            <Route path={links.login_three} component={LoginThree} />
          </Provider>
        </Switch>
      </App>
    )
  }
}

export default withRouter(Routes);
