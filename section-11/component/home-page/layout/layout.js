import { Fragment } from "react";



function Layout () {
    return <Fragment>
        <MainNavigation />
        <main>{props.chilren}</main>
    </Fragment>
}