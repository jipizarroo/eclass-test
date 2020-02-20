import React from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { render } from '@testing-library/react';
import Tabla from '../components/tabla';
import moment from 'moment';

export default class Home extends React.Component {

    render(){
        return(
            <Context.Consumer>
                {
                    ({store, actions}) => {
                        if(store.isLoaded === false){
                            return null;
                        }else{
                            return(
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="alert alert-primary" role="alert">
                                            Tasa de cambio a: { moment(store.result.timestamp * 1000).format('MMMM Do YYYY, h:mm:ss a')}
                                            </div>

                                            <Tabla results={store.result}/>
                                        </div>
                                    </div>
    
                                </div>
                            )
                        }
                    }
                }
            </Context.Consumer>
        )
    }
}
