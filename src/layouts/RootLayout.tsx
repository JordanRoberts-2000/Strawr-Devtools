import { Component } from "solid-js";
import MainNavbar from "../features/mainNavigation/MainNavbar";
import { RouteProps } from "@solidjs/router";

const RootLayout: Component<RouteProps<string>> = ({children}) => {

    return (
        <div>
            {children}
            <MainNavbar/>
        </div>
    );
};

export default RootLayout