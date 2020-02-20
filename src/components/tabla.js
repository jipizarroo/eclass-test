import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const Tabla = props => {
    const { store, actions } = useContext(Context);

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col"></th>
                    {Object.keys(props.results.quotes).map((item, i) => {
                        return (
                            <th scope="col">{item}</th>

                        )
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1USD =</th>
                    {Object.values(props.results.quotes).map((item, i) => {
                        return (
                            <td scope="row">{item}</td>
                        )
                    })
                    }
                </tr>

            </tbody>
        </table>
    )
}
export default Tabla;