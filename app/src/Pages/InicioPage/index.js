import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText } from 'servisofts-component';
import BotonesPaginas from '../../Components/BotonesPaginas';

class InicioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'InicioPage'}>
                <BotonesPaginas data={[
                    { label: "Pais", url: "pais", icon: "Ajustes" },
                ]} />


            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(InicioPage);