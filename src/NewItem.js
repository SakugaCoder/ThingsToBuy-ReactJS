import React from 'react';
import Template from './Template';

class NewItem extends React.Component{
    state =  {
        name:"",
        description:"",
        price: 0,
        qty: 0,
        img_url:""
    };

    initial_state = this.state;

    url = "http://localhost:5000/";

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch(this.url + "new-item",{
            headers:{
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(this.state)
        }).then( response => {
            response.json().then( response => {
                if(!response.error){
                    this.setState(this.initial_state);
                }
                else{
                    alert("Error");
                }
            });
        });
    }

    handleChange = (e) => {        
        console.log(e.target.id);
        console.log(e.target.value);
        this.setState({ [e.target.id] : e.target.value});

    }

    render(){
        const Content = <React.Fragment>
        <h2>New item</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" id="name" className="form-control"  value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" placeholder="Description" id="description" className="form-control" value={this.state.description} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" placeholder="Price" id="price" className="form-control" value={this.state.price}  onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="qty">Qty</label>
                    <input type="number" placeholder="Qty" id="qty" className="form-control" value={this.state.qty} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="img_url">Img url</label>
                    <input type="text" placeholder="Img url" id="img_url" className="form-control" value={this.state.img_url} onChange={this.handleChange}/>
                </div>

                <input type="submit" value="Save" className="btn btn-success"/>
            </form>
        </React.Fragment>;
        return(
            
            <Template Content={Content}></Template>
            
        );
    }
}

export default NewItem;