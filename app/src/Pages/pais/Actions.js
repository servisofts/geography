import SSocket from 'servisofts-socket';
import Parent from './index';

export default class Actions {

    static getAll = (props) => {
        var reducer = props.state[Parent.component + "Reducer"];
        var data = reducer.data;
        if (!data) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                component: Parent.component,
                version: Parent.version,
                key_usuario: "admin",
                // component: "pais",
                type: "getAll",
                estado: "cargando",
            })
            return null;
        }
        return data;
    }

    static getByKey = (key, props) => {
        var data = this.getAll(props);
        if (!data) return null;
        return data[key];
    }


    static registro = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "registro",
            estado: "cargando",
            key_usuario: "",
            data: data,
        })
    }



    static editar = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: "admin",
            data: data,

        })
    }

    static eliminar(data, props) {
        var reducer = props.state[Parent.component + "Reducer"];
        var object = {
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: "admin",
            data: { ...data, estado: 0 },
        }
        SSocket.send(object);
    }
}