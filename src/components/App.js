import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Index from '../pages/Index';
import FormMessagePage from '../pages/FormMessagePage';
import NotFound from '../pages/NotFound';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route exact path="/form" component={FormMessagePage}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
    
}