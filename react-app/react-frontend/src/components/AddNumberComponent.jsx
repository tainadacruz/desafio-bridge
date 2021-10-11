import React, { Component } from 'react';
import NumberService from '../services/NumberService';

class AddNumberComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            number: "",
            duodigito: ""
        }

        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.saveNumber = this.saveNumber.bind(this);

    }

    changeNumberHandler= (event) => {
        this.setState({number: event.target.value})
    }

    saveNumber = (e) => {
        e.preventDefault();
        const data = {x: this.state.number};
        
        NumberService.addNumber(data).then(res => {
            this.setState({duodigito: res.data.duodigito})

        });

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Calculadora Duodígito </h3>
                            <div className="card-body">

                                <form onSubmit={this.saveNumber}>
                                    <div className="form-group">
                                        <label>Número:</label>
                                        <input placeholder="Insira o número a ser checado" type="number" name="number" 
                                        className="form-control" min="100" value={this.state.number} onChange={this.changeNumberHandler} />
                                    </div>
                                    <button type="submit" className="btn btn-success"> Calcular </button>
                                    <div className="form-group">
                                        <label>Duodigito: {this.state.duodigito}</label>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default AddNumberComponent;