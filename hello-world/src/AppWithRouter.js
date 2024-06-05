import './output.css';

import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';

import Page1 from './page1.jsx';
import Page2 from './page2.jsx';

const history = createBrowserHistory();

const AppWithRouter = (() => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' render={() => <Page1/>}/>
                <Route exact path='/page1' render={() => <Page1/>}/>
                <Route exact path='/page2' render={() => <Page2/>}/>
            </Switch>
        </Router>
    )
});

export default AppWithRouter;
