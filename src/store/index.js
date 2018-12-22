import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import dogApp from '../reducers';

export const store = createStore(dogApp, composeWithDevTools(applyMiddleware(thunk)));
