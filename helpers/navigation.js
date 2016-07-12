import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'Home': {
            title: 'Home',
            id: 'Home'
        },
        'Instalation': {
            title: 'Instalation',
            id: 'Instalation'
        },
        'Plans': {
            title: 'Plans',
            id: 'Plans'
        }
    }

    return componentMap[scene];
}
