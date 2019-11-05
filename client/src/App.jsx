import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {
    Home
} from './pages'
import routes from '../../common/config/routes'
import stores from './stores'

const App = () => {
    return (
        <Router>
            <Provider store={stores}>
                <Switch>
                    {
                        routes.map((item,index)=>{
                            return (
                                <Route path={item.path} 
                                    key={index} 
                                    exact={item.exact} 
                                    render={item.component}
                                >
                                </Route>
                            )
                        })
                    }
                </Switch>
            </Provider>
        </Router>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)