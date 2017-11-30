'use babel';

import apiProvider from './pv8-api-provider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [apiProvider];
    }
};
