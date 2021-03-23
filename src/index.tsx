import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "App";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter, Route } from 'react-router-dom';
import PersonDashboard from 'components/person/PersonDashboard';
import CompanyDashboard from 'components/company/CompanyDashboard';
import Welcome from 'components/Welcome';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/person" component={PersonDashboard} />
      <Route path="/company" component={CompanyDashboard} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
