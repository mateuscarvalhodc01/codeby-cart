import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './RouteWrapper';

import * as Pages from '~/pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={Pages.Home} />
      <RouteWrapper path="/cart" exact component={Pages.Cart} />
      {/* <RouteWrapper path="*" exact component={NOTFOUNDPAGE} /> */}
    </Switch>
  );
};

export default Routes;
