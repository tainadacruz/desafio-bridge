import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.database = this.database.bind(this);
        this.calculadora = this.calculadora.bind(this);
    }
 
    database(){
        this.props.history.push('/database');
    }   
    
    calculadora(){
        this.props.history.push('/input-number');
    } 

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <a className="navbar-brand" style={{marginLeft: "1em"}} href="#"> DESAFIO FULLSTACK BRIDGE </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"> 
                            <li className="nav-item"><a className="nav-link btn btn-primary" href="/input-number"> Calculadora </a></li> 
                            <li className="nav-item"><a className="nav-link btn btn-primary" href="/database"> Database </a></li> 
                        </ul>
                    </div>
                    </nav>
                </header>    
            </div>
        );
    }
}

export default HeaderComponent;