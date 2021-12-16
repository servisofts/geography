import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SLoad, SPage, SText } from 'servisofts-component';
import SSocket from 'servisofts-socket';
class Pais extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getLista = () => {
        var reducer = this.props.state.paisReducer;
        var data = reducer.data;
        if (!data) {
            if (reducer.estado == "cargando") return <SLoad />
            SSocket.send({
                component: "pais",
                type: "getAll",
                estado: "cargando",
            })
            return <SLoad />
        }
        return Object.keys(data).map((key) => {
            var obj = data[key];
            return <>
                <SHr />
                <SText height={100} card center col={"xs-6"}>{obj.nombre}</SText>
            </>
        })
    }
    render() {


        return (
            <SPage title={'Pais'} center disableScroll>

                {this.getLista()}

            </SPage>
        );
    }
}
// export default Pais;
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Pais);