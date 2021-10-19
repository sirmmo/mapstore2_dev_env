import { LOAD_DATA, LOADED_DATA, LOAD_ERROR} from '../actions/geojsonloader';

export default function(state = {data: null}, action) {
    switch (action.type) {
        case LOADED_DATA:
            return {
                data: action.payload
            };
        case LOAD_ERROR:
            return {
                error: action.error
            }
        default:
            return state;
    }
}
