import React from "react";
import { BrowserRouter as Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Customer/Home";
import Cart from "./views/Customer/Cart";
import Checkout from "./views/Customer/Checkout";
import Status from "components/status/index";
import Orders from "./views/Customer/Orders";

export default (props) => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="*" >
                <Status text="Página não encontrada..." icon="fa fa-exclamation fa-100x" />
            </Route>
        </Switch>
    </BrowserRouter>
);
