import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/opt/app/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "name": "blank",
        "path": "/blank",
        "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__blank__model.js' */'/opt/app/src/pages/blank/model.js').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__blank" */'../blank'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "table-list",
        "path": "/list/table-list",
        "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__list__table-list__model.ts' */'/opt/app/src/pages/list/table-list/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__list__table-list" */'../list/table-list'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "analysis",
        "path": "/dashboard/analysis",
        "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__dashboard__analysis__model.tsx' */'/opt/app/src/pages/dashboard/analysis/model.tsx').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__dashboard__analysis" */'../dashboard/analysis'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "user-login",
        "path": "/user-login",
        "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__user-login__model.ts' */'/opt/app/src/pages/user-login/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__user-login" */'../user-login'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "user-register",
        "path": "/user-register",
        "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__user-register__model.ts' */'/opt/app/src/pages/user-register/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__user-register" */'../user-register'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "workplace",
        "path": "/workplace",
        "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__workplace__model.ts' */'/opt/app/src/pages/workplace/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__workplace" */'../workplace'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/",
        "name": "welcome",
        "icon": "smile",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Welcome" */'../Welcome'),
  LoadingComponent: require('/opt/app/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/opt/app/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/opt/app/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
