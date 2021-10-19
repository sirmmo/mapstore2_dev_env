/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
    plugins: {
      //[...]
        GeoJsonLoaderPlugin: require('../plugins/GeoJsonLoader')
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('../components/data/identify/SwipeHeader').default
    }
};
