import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Index from '../pages/Index';
import FormMessagePage from '../pages/FormMessagePage';
import NotFound from '../pages/NotFound';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/form" component={FormMessagePage} />
                <Route path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
            </Switch>
        </BrowserRouter>
    )
    
}