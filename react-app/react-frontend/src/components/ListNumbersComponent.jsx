import React, { Component } from 'react';
import NumberService from '../services/NumberService';

class ListNumbersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                numbers: []
        }
    }

    componentDidMount(){
        NumberService.getNumbers().then((res) => {
            this.setState({ numbers: res.data })
        });
    }

    render() {
        return (
            <div>
                
                <h2 className="text-center">Números e Duodígitos</h2>
                <div className="row">
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