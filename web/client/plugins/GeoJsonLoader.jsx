import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {get} from 'lodash';

import { loadData } from '../actions/geojsonloader';
import geojsonloader from '../reducers/geojsonloader';
import loadDataEpics from '../epics/geojsonloader';

class GeoJsonLoaderComponent extends React.Component {
    static propTypes = {
        data: PropTypes.any,
        onLoad: PropTypes.func
    }
    render() {
        let style = {'position': 'absolute', 'left': '50px', 'top': '100px', 'zIndex': 1000000000};
        return(
            <div style={style}>
                <button onClick={this.props.onLoad}>Download!</button>
            </div>
        )
    }
}

const GeoJsonLoader = connect((state) => {
    return {
        data: get(state, 'geojson_data')
    };
}, {
    onLoad: loadData
})(GeoJsonLoaderComponent);

export const GeoJsonLoaderPlugin = GeoJsonLoader;
export const reducers = {geojsonloader};
export const epics = loadDataEpics;
