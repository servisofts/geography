import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText } from 'servisofts-component';
import Pages from '..';
import BotonesPaginas from '../../Components/BotonesPaginas';
import pais from '../pais';

class InicioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'InicioPage'}>

                <SText>{'InicioPage'}</SText>
                <BotonesPaginas data={[
                    { label: "Servicios", url: "servicios", icon: "Servisofts" },
                ]} />

             
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(InicioPage);