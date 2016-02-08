'use strict';

import keyMirror from 'keymirror';

export default {
    ActionTypes: keyMirror({
        COUNTER_ADD: null,
        COUNTER_CHANGE: null
    }),
    RouteErrors: keyMirror({
        ROUTING: null,
        REDIRECT: null,
        NOT_FOUND: null
    })
};