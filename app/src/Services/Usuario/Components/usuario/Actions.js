import SSocket from 'servisofts-socket';
import Parent from './index';
import Service from '../../index';
import { SNavigation } from 'servisofts-component';

export default class Actions {
    static _getReducer = (props) => {
        return props.state[Parent.component + "Reducer"];
    }
    static validateSession(props,preventRedirect) {
        var reducer = Actions._getReducer(props);
        var data = reducer.usuarioLog;
        if (!data) {
            if(preventRedirect) return null;
            SNavigation.replace("carga");
            return null;
        }
        return data;

    }

    static getError = (type, props) => {
        if (props.state.usuarioReducer.estado == "error" && props.state.usuarioReducer.type == type) {
            props.state.usuarioReducer.estado = "";
            return props.state.usuarioReducer.error;
        }
        return null
    }
    static login(data) {
        var object = {
            service: Service.ServiceName,
            component: "usuario",
            version: "2.0",
            type: "login",
            estado: "cargando",
            data: data,
        }
        // alert(JSON.stringify(object));
        SSocket.send(object);
    }
    static getAll = (props) => {
        var reducer = Actions._getReducer(props);
        var data = reducer.data;
        if (!data) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                service: Service.ServiceName,
                component: Parent.component,
                version: Parent.version,
                type: "getAll",
                estado: "cargando",
                key_usuario: "",
                cabecera: "usuario_app"
            })
            return null;
        }
        return data;
    }

    static getByKey = (key, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        return data[key];
    }

    static registro = (data, props) => {
        SSocket.send({
            service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "registro",
            estado: "cargando",
            key_rol: "1c09542d-4146-4d2e-9f88-48b093c74216",
            key_usuario: "",
            cabecera: "usuario_app",
            data: data
        })
    }
    static editar = (data, props) => {
        SSocket.send({
            service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: "",
            cabecera: "usuario_app",
            data: data
        })
    }
    static eliminar = (data, props) => {
        SSocket.send({
            service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: "",
            cabecera: "usuario_app",
            data: {
                ...data,
                estado: 0,
            }
        })
    }


    static recuperarPass = (data, props) => {
        SSocket.send({
            service: Service.ServiceName,
            component: Parent.component,
            //version: Parent.version,
            type: "recuperarPass",
            estado: "cargando",
            data: data["Correo"]
        })
    }
    static verificarCodigoPass = (data, props) => {
        SSocket.send({
            service: Service.ServiceName,
            component: Parent.component,
            //version: Parent.version,
            type: "verificarCodigoPass",
            estado: "cargando",
            data: data["Codigo"]
        })
    }

    static cambiarPassByCodigo = (data, props) => {
        SSocket.send({
            service: Service.ServiceName,
            component: Parent.component,
            //version: Parent.version,
            type: "cambiarPassByCodigo",
            estado: "cargando",
            data: data["Password"],
            usuario_recuperado: props.state.usuarioReducer.usuarioRecuperado

        })

    }
}