import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

import AppointmentDashboard from '../pages/AppointmentDashboard';
import WeatherStationDashboard from '../pages/WeatherStationDashboard';
import MeteorologicalHistories from '../pages/MeteorologicalHistories';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route
      path="/AppointmentDashboard"
      component={AppointmentDashboard}
      isPrivate
    />
    <Route path="/dashboard" component={WeatherStationDashboard} isPrivate />
    <Route
      path="/weatherstation"
      component={MeteorologicalHistories}
      isPrivate
    />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;