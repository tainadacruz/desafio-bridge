import React, { Component } from 'react';
import NumberService from '../services/NumberService';

class AddNumberComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            number: 0,
            duodigito: 0
        }

        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.saveNumber = this.saveNumber.bind(this);

    }

    changeNumberHandler= (event) => {
        this.setState({number: event.target.value})
    }

    saveNumber = (e) => {
        e.preventDefault();
        let data = {number: this.state.number, duodigito: this.state.duodigito};
        console.log("Número " + JSON.stringify(data));

        NumberService.addNumber(data).then(res => {
            
            this.props.history.push('/database')

        });

    }

    cancel = () => {
        this.props.history.push('/database');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Adiciona Número </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Número X:</label>
                                        <input placeholder="Insira o número a ser checado" name="number" 
                                        className="form-control" value={this.state.number} onChange={this.changeNumberHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveNumber}> Calcular </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancelar </button>

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