import {makeStore} from "./makeStore";

// create a client config store
const [ClientConfigStoreProvider, useClientConfigDispatch, useClientConfigStore] = makeStore();

export {ClientConfigStoreProvider, useClientConfigDispatch, useClientConfigStore};
