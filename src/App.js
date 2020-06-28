import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import NewItem from './NewItem';
import Api from './Api';
class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route path="/new-item" component={NewItem}></Route>
                <Route path="/wikipedia-api-form" component={Api}></Route>
            </Switch>    
        );
    }
}

export default App;