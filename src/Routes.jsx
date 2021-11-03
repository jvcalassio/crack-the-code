import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterController from './Controllers/Register';
import PanelController from './Controllers/Panel';
import NewLeadController from './Controllers/NewLead';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/register">
                <RegisterController />
            </Route>
            <Route exact path="/">
                <PanelController />
            </Route>
            <Route exact path="/new">
                <NewLeadController />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;