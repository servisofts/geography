import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SPage, SText, SNavigation, SLoad, SView, SIcon } from 'servisofts-component';
import Parent from '../index'
import SSocket from 'servisofts-socket';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
        // this.key_servicio = SNavigation.getParam('key_servicio');

    }
    getContent() {
        if (this.key) {
            this.data = Parent.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        } else {
            this.data = {};
        }

        return <SForm
            ref={(form) => { this.form = form; }}
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            inputProps={{
                customStyle: "calistenia"
            }}
            inputs={{
                nombre: { label: "nombre", isRequired: true, defaultValue: this.data["nombre"], icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                acronimo: { label: "acronimo", isRequired: true, defaultValue: this.data["acronimo"], icon: <SIcon name={"InputUser"} width={40} height={30} /> }
            }}
            onSubmitName={"Aceptar"}
            onSubmit={(values) => {
                if (this.key) {
                    Parent.Actions.editar({
                        ...this.data,
                        ...values
                    }, this.props);

                } else {
                    Parent.Actions.registro(values, this.props);

                }
            }}
        />
    }
    render() {
        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {

                if (!this.key) {
                    this.key = reducer.lastRegister.key;
                }
                reducer.estado = "";

                SNavigation.goBack();
            }
        }
        return (
            <SPage title={'Registro de ' + Parent.component} center>
                <SView height={30}></SView>
                {this.getContent()}
                <SHr />

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);