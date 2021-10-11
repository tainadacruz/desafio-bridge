import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
    }
    
    database = () => {
        this.props.history.push('/database');
    }   
    
    calculadora = () => {
        this.props.history.push('/input-number');
    } 

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                        <ul> 
                            <li className="navbar-brand" style={{marginLeft: "1em"}}> DESAFIO FULLSTACK BRIDGE </li> 
                            <li><button className="btn btn-primary" onClick={this.calculadora} style={{marginLeft: "1em"}}> Calculadora </button></li> 
                            <li><button className="btn btn-primary" onClick={this.database} style={{marginLeft: "1em"}}> Database </button></li> 
                        </ul>
                    </nav>
                </header>    
            </div>
        );
    }
}

export default HeaderComponent;