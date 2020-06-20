import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "./views/Landing/index";
import Home from "./views/Customer/Home/index";
import Cart from "./views/Customer/Cart/index";
import Checkout from "./views/Customer/Checkout/index";
// import Status from "./views/Customer/Status/index";
import Orders from "./views/Customer/Orders/index";
import Order from "./views/Customer/Order/index";
import OrderStatus from "./views/Customer/OrderStatus/index";
import Sales from "./views/Customer/Sales/index";
import { isAuthenticated } from "auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route{...rest} render={props => (
        isAuthenticated() ? (
            <Component{...props} />
        ) : (
                <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
            )
    )} />
);

export default (props) => (
    <BrowserRouter>
        <div style={{ marginBottom: 68, marginTop: 70 }}>
            <Switch>
                <Route path="/" exact={true} component={Landing} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/checkout" component={Checkout} />
                <PrivateRoute path="/orders" component={Orders} />
                <PrivateRoute path="/order/status" component={OrderStatus} />
                <PrivateRoute path="/order" component={Order} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/sales" component={Sales} />

                {/* <Route path="*" component={Status} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);
