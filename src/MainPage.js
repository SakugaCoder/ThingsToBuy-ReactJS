import React from 'react'
import Template from './Template';
import './bootstrap.min.css';

class MainPage extends React.Component{
    state  = {
        data: []
    };
    url = "http://localhost:5000/";

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        fetch(this.url+"get-items", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }, 
            method: 'GET'
          })
          .then(response => {
            response.json().then( data => {
                  this.setState({data: data.content});
                  console.log(data);
              });
          });
    }

    deleteItem(item){
        console.log("Deleting: ");
        console.log(item);

        fetch(
            this.url+"delete-item/"+item,{
                headers: {
                    "Accept": "application/json",
                    "Content-Type":"application/json"
                },
                method: "DELETE"
            }
        )
        .then( response =>{
            response.json().then( response => {
                console.log(response);
                if(!response.error){
                    this.getItems();
                }
                else{
                    alert("Error. The element can be deleted");
                }
            });
        }

        );
    }
    render() {
        const { data } = this.state;

        const result = data.map((entry, index) => {
            console.log(entry);
            return <tr key={index}>
                    <td>{entry._id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.description}</td>
                    <td>{entry.price}</td>
                    <td>{entry.qty}</td>
                    <td><div style={ {backgroundImage: "url("+entry.img_url+")", backgroundSize: "cover", backgroundRepeat:"no-repeat", width:"100px", height:"90px"} }></div></td>
                    <td><button className="btn btn-danger" onClick={ () => this.deleteItem(entry._id)}>Delete</button></td>
            </tr>;
        });
        const Content = 
        <React.Fragment>
            <h2>Things to buy</h2>
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Qty</td>
                        <td>Img</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </React.Fragment>;
        return (
        <div><Template Content={Content}></Template></div>
        )
    }
}

export default MainPage;