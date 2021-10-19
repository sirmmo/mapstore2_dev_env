export const LOAD_DATA = 'GEOJSONLOADER:LOAD_DATA';
export const LOADED_DATA = 'GEOJSONLOADER:LOADED_DATA';
export const LOAD_ERROR = 'GEOJSONLOADER:LOAD_ERROR';

export const loadData = () => {
    return {
        type: LOAD_DATA
    };
};

export const loadedData = (payload) => {
    return {
        type: LOADED_DATA,
        payload: payload
    };
};

export const loadError = (error) => {
    return {
        type: LOAD_ERROR,
        error: error
    };
};
