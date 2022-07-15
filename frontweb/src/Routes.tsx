import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <h1>Teste</h1>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;