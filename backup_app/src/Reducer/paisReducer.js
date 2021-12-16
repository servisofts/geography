
const initialState = {
    estado: "exito",
    data: null
}

export default (state, action) => {
    if (!state) return initialState;
    if (action.component == "pais") {
        // state.data = action.data;
        switch (action.type) {
            case "getAll":
                getAll(state, action);
        }

        state.component = action.component;
        state.type = action.type;
        state.estado = action.estado;
        return { ...state };
    }
    return state;
}

const getAll = (state, action) => {
    if (action.estado == "exito") {
        state.data = action.data;
    }
}