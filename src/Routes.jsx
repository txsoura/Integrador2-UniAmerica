import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "./views/Landing/index";
import Home from "./views/Customer/Home/index";
import Cart from "./views/Customer/Cart/index";
import Checkout from "./views/Customer/Checkout/index";
import Status from "./views/Customer/Status/index";
import Orders from "./views/Customer/Orders/index";
import Order from "./views/Customer/Order/index";
import OrderStatus from "./views/Customer/OrderStatus/index";
import Login from "./components/Form/Login/index";
import Signup from "./components/Form/Sign-up/index";
import ListaProdutos from "./components/ProductList/index";
import Entregador from "./components/Form/Entregador/index";
import Recuperar from "./components/Form/Recuperarsenha/index";
import { isAuthenticated } from "auth";
import Product from "views/Customer/Product";
import Perfil from "views/Customer/Profile";

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
                <PrivateRoute path="/app/cart" component={Cart} />
                <PrivateRoute path="/app/checkout" component={Checkout} />
                <PrivateRoute path="/app/orders" component={Orders} />
                <PrivateRoute path="/app/order/status" component={OrderStatus} />
                <PrivateRoute path="/app/order" component={Order} />
                <PrivateRoute path="/app/home" component={Home} />
                <PrivateRoute path="/app/product" component={Product} />
                <PrivateRoute path="/app/profile" component={Perfil} />
                <Route path="/auth/Login" component={Login} />
                <Route path="/resister/Signup" component={Signup} />
                <Route pacth="/senha/recuperar" component={Recuperar} />
                <Route path="/products/ListaProdutos" component={ListaProdutos} />
                <Route path="/p/entregador" component={Entregador} />

                <Route path="*" component={Status} />

            </Switch>
        </div>
    </BrowserRouter>
);
