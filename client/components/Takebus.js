import React from 'react'
import BusList from './Bus/BusList';

class Takebus extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="jumbotron">
                    <h1>Test task for me.</h1>
                </div>
                <div className="container-fluid">
                    <BusList />
                </div>
            </div>
        );
    }
}

export default Takebus;