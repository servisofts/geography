import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Parent from '../index'

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // this.key_servicio = SNavigation.getParam('key_servicio');
    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                { key: "nombre", label: "nombre", width: 150 },
                { key: "acronimo", label: "acronimo", width: 150 },

                {
                    key: "key-eliminar", label: "Eliminar", width: 70, center: true, component: (key) => {
                        return <SView width={35} height={35} onPress={() => {
                            SPopup.confirm({
                                title: "Eliminar",
                                message: "¿Esta seguro de eliminar?",
                                onPress: () => {
                                    Parent.Actions.eliminar(data[key], this.props)
                                }
                            })
                        }}>
                            <SIcon name={'Delete'} />
                        </SView>
                    }
                },
                { key: "key-editar", label: "Editar", width: 70, center: true, component: (item) => { return <SView onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key: item }) }}> <SIcon name={"Edit"} width={35} /></SView> } },
            ]}
            filter={(data) => {
                if (data.estado != 1) return false;
                return true;
            }}
            data={data}
        />
    }
    render() {
        return (
            <SPage title={'Lista de ' + Parent.component} disableScroll center>
                {this.getContent()}
                <FloatButtom onPress={() => {
                    SNavigation.navigate(Parent.component + "/registro")
                }} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);