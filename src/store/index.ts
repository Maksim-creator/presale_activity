import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {reducer as users} from '../features/users';

export const rootReducer = combineReducers({users});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['users', 'repos', 'followers', 'usersErrorMessage'],
};

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
      thunk: true,
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
