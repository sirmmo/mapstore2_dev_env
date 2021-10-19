import * as Rx from 'rxjs';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

import { addLayer} from '../actions/layers';
import { loadedData, loadError, LOAD_DATA } from '../actions/geojsonloader';

function createLayer(geoj){
    return {
        type: 'vector',
        id: uuidv1(),
        name: 'Measurements',
        hideLoading: true,
        features: geoj.features,
        visibility: true
    }
}

export const loadDataEpic = (action$) => {
    return action$.ofType(LOAD_DATA)
        .switchMap(() => {
        return Rx.Observable.defer(() => axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson'))
            .switchMap((response) => Rx.Observable.of(addLayer(createLayer(response.data))))
            .catch(e => Rx.Observable.of(loadError(e.message)));
      });
};

export default {
    loadDataEpic
}
