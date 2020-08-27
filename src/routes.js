import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Student from './pages/Student';
import Employee from './pages/Employee';
import Library from './pages/Library';
import Contracts from './pages/Contracts';
import BillsPayReceive from './pages/BillsPayReceive';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path = "/alunos" component={Student} />
                <Route path = "/funcionários" component={Employee} />
                <Route path = "/biblioteca" component={Library} />
                <Route path = "/contratos" component={Contracts} />
                <Route path = "/contas" component={BillsPayReceive} />
            </Switch>
        </BrowserRouter>
    )
}
