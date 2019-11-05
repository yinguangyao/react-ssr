import Home from '../../client/src/pages/home'
import Detail from '../../client/src/pages/detail'

export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: '/detail', exact: true,
        component:Detail,
    },
    {
        path: '/detail/:a/:b', exact: true,
        component: Detail
    }
]