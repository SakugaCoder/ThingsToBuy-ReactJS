import React from 'react'
import Header from './Header';


export default class Template extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header></Header>
                <div className="container">
                    {this.props.Content}
                </div>
            </React.Fragment>
        );
    }
}
