import React from "react";
import { Router as DefaultRouter, Route, Switch } from "react-router-dom";
import dynamic from "umi/dynamic";
import renderRoutes from "umi/_renderRoutes";
import history from "@tmp/history";
import RendererWrapper0 from "/opt/app/src/pages/.umi/LocaleWrapper.jsx";
import _dvaDynamic from "dva/dynamic";

const Router = require("dva/router").routerRedux.ConnectedRouter;

const routes = [
  {
    path: "/",
    component: _dvaDynamic({
      component: () =>
        import(
          /* webpackChunkName: "layouts__BasicLayout" */ "../../layouts/BasicLayout"
        ),
      LoadingComponent: require("/opt/app/src/components/PageLoading/index")
        .default
    }),
    Routes: [require("../Authorized").default],
    authority: ["admin", "user"],
    routes: [
      {
        path: "/",
        name: "welcome",
        icon: "smile",
        component: _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__Welcome" */ "../Welcome"),
          LoadingComponent: require("/opt/app/src/components/PageLoading/index")
            .default
        }),
        exact: true
      },
      {
        component: () =>
          React.createElement(
            require("/opt/app/node_modules/_umi-build-dev@1.9.5@umi-build-dev/lib/plugins/404/NotFound.js")
              .default,
            { pagesPath: "src/pages", hasRoutesInConfig: true }
          )
      }
    ]
  },
  {
    component: () =>
      React.createElement(
        require("/opt/app/node_modules/_umi-build-dev@1.9.5@umi-build-dev/lib/plugins/404/NotFound.js")
          .default,
        { pagesPath: "src/pages", hasRoutesInConfig: true }
      )
  }
];
window.g_routes = routes;
const plugins = require("umi/_runtimePlugin");
plugins.applyForEach("patchRoutes", { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach("onRouteChange", {
    initialValue: {
      routes,
      location,
      action
    }
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
    <RendererWrapper0>
      <Router history={history}>{renderRoutes(routes, {})}</Router>
    </RendererWrapper0>
  );
}
