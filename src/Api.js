import React from 'react';
import Template from './Template';



class Api extends React.Component{
    

    constructor(props) {
        super(props);
        this.initialState =  {results:[], rows : [], term : ""};
        this.state = this.initialState;
        this.searchTerm = this.searchTerm.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        
    }
    
    componentDidMount(){
        
    }

    searchTerm(evt){
        evt.preventDefault();
        const URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+this.state.term+'&format=json&origin=*';
        console.log(URL);
        
        fetch(URL)
        .then( result => result.json())
        .then( result => {
            this.setState(this.initialState);
            const terms = result[1];
            const urls = result[3];
            terms.forEach( (term, index) => {
                this.setState({results: [...this.state.results, {"index": index, "term" : term, "url": urls[index]}]});
            });
            console.log(this.state.results);

            this.state.results.forEach( (row, index) => {

                let new_row = <tr key={row.index}><td>{row.index}</td>
                <td>{row.term}</td>
                <td><a href={row.url}>{row.url}</a></td></tr>;
                this.setState({rows: [...this.state.rows, new_row]})
            });
            console.log(this.state.rows);
        });
    }

    handleOnChange(evt){
        let new_term = evt.target.value
        new_term = (new_term.split(" ")).join("%20");
        console.log();
        this.setState({term: new_term});
    }

    render(){
        const Content = <React.Fragment>
        <form onSubmit={this.searchTerm}>
            <label htmlFor="term">Term</label>
            <input type="text" onChange={this.handleOnChange} placeholder="Term"></input>
            <input type="submit" value="submit"></input>
        </form>
        <table>
            <thead>
                <tr>
                    <td>Index</td>
                    <td>Term</td>
                    <td>Link</td>
                </tr>
            </thead>
            <tbody>
                {this.state.rows}
            </tbody>
        </table>
        </React.Fragment>
        return(
            <Template Content={Content}></Template>
            
        );
    }
        
}

export default Api;