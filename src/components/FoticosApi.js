import React, {Component} from 'react';


class FoticosApi extends Component {
    constructor () {
        super();
        this.state = {
            pictures: [],
        };
    }

componentWillMount(){
    fetch('https://randomuser.me/api/?results=494').then(results =>{
        return results.json();
    }).then(data =>{
        let pictures = data.results.map((pic) =>{
            return(
                <div key={pic.results}>
                    <img src={pic.picture.medium} alt="fotico" />
                </div>
            )
        })
        this.setState({pictures: pictures});
    })
}

render(){
    return(
        <div className="row">
            {this.state.pictures}
        </div>  
 
        
    )
}
}

export default FoticosApi;
