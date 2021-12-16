import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SLoad } from 'servisofts-component';
import { SButtom, SDate, SForm, SNavigation, SPage, SPopup, SText, STheme, SView, SIcon } from 'servisofts-component';
import Usuario from '..';
// import BackgroundImage from '../../../Components/BackgroundImage';
// import FotoPerfilComponent from '../../../Components/FotoPerfilComponent';
// import LogoAnimado from '../../CargaPage/LogoAnimado';
// import RolDeUsuario from './RolDeUsuario';

class RecuperarPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }
    getForm() {
        return <SForm
            ref={(ref) => { this.form = ref; }}
            row
            style={{
                justifyContent: "space-between",
            }}
            inputProps={{
                col: "xs-12",
                customStyle: "calistenia",
            }}
            inputs={{
                Correo: { placeholder: "Ingrese su correo electrónico", type: "email", isRequired: true, },
            }}
            onSubmit={(values) => {
                Usuario.Actions.recuperarPass(values, this.props);
            }}
        />
    }

    render() {
        var error = Usuario.Actions.getError("recuperarPass", this.props);
        if (error) {
            SPopup.alert("Usuario no encontrado, Verifique sus datos.");
        }
        if (this.props.state.usuarioReducer.estado == "exito" && this.props.state.usuarioReducer.type == "recuperarPass") {
            this.props.state.usuarioReducer.estado = "";
            SNavigation.navigate(Usuario.component + "/codigoRecuperarContrasena");
        }
        return (
            <SPage title={"Recuperar Contraseña"}>
                <SView center>
                    <SView col={"xs-11 md-6 xl-4"} center>
                        <SView height={40} />
                        <SText fontSize={16} center>Le enviaremos un mensaje para configurar o restablecer su nueva contraseña. </SText>
                        <SView height={40} />
                        {/* {this.key ? <SView col={"xs-6"} height={150}> <FotoPerfilComponent data={this.usr} component={"usuario"} /> </SView> : null} */}
                        {this.getForm()}
                        
                        <SView height={16} />
                        <SView col={"xs-11"} row center>
                            <SButtom type={"outline"} center props={{
                                // type: STheme.color.primary
                            }}
                                onPress={() => {
                                    this.form.submit();
                                }}
                            >ENVIAR</SButtom>
                        </SView>
                        <SView height={36} />
                    </SView>
                    {/* <RolDeUsuario data={this.usr} /> */}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(RecuperarPass);