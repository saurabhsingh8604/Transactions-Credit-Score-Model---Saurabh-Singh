import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Signup from '../pages/SignupPage'
import Login from '../pages/LoginPage';
import Cibil from '../pages/CibilReportPage'
import CompanyDetails from '../components/Signup/CompanyDetails';
import KYC from '../components/Signup/KYC'
import Dashboard from '../components/Dashboard';
import FIDashboard from '../components/Dashboard/FIDashboard';

export default function AppRoutes() {
  return (
    <Router>
     <Switch>
        <Route exact path={'/signup'} component={Signup}></Route>
        <Route exact path={'/login'} component={Login}></Route>
        <Route exact path={'/companydetails'} component={CompanyDetails}></Route>
        <Route exact path={'/cibil-score'} component={Cibil}></Route>
        <Route exact path={'/kyc'} component={KYC}></Route>
        <Route exact path={'/dashboard'} component={Dashboard}></Route>
        <Route exact path={'/fi-dashboard'} component={FIDashboard}></Route>
        
     </Switch>
    </Router>
    
  )
}
