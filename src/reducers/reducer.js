import { initialState } from '../store/initialState';


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'GET_FIJOS':
            return {
                ...state,
                montofijo: action.payload
            }
            case 'GET_CATS':
                return {
                    ...state,
                    categorias: action.payload
                }
        case "DELETE_EGRESOS":
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state , action.payload]
            };


        case "FILTRAR_DETALLE":
            return {
                ...state,
                items: state.items.filter(item => item.detalle === action.payload)
            };
        case "FILTRAR_CATEGORIA":
            return {
                ...state,
                items: state.items.filter(item => item.detalle === action.payload)
            };
        case "DEPOSITAR":
            return {
                ...state,
                depositado: action.payload,
            };
        case "ITEMS_LOADING":
            return {
                ...state,
            };
        default:
            return state;
    }
}

