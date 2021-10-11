import React, { Component } from 'react';
import NumberService from '../services/NumberService';

class ListNumbersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                numbers: []
        }
        this.addNumber = this.addNumber.bind(this);
    }

    componentDidMount(){
        NumberService.getNumbers().then((res) => {
            this.setState({ numbers: res.data })
        });
    }

    addNumber(){
        this.props.history.push('/input-number');
    }

    render() {
        return (
            <div>
                
                <h3 className="text-center">Números e Duodígitos</h3>

                <div className="container">
                    <button className="btn btn-dark" onClick={this.addNumber}> Adicionar Número </button>
                </div>

                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Número de Entrada</th>
                                <th>Duodígito</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.numbers.map(
                                    number => 
                                    <tr key={number.id}>
                                        <td> {number.x} </td>
                                        <td> {number.duodigito} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListNumbersComponent;