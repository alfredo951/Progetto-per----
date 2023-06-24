
import { AnyAction, ListenerMiddleware, ReducersMapObject, ThunkDispatch, Unsubscribe, UnsubscribeListenerOptions, applyMiddleware, combineReducers,configureStore,createListenerMiddleware, getDefaultMiddleware,  } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import  { createLogger } from'redux-logger'
// @ts-ignore
import untypedMiddleware from 'untyped-middleware'
import Api, { counterSlice } from './Api';
import { Root } from './user';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    actionCreator:counterSlice.actions.setDocument ,
    effect: async (action, listenerApi) => {
      console.log(listenerApi.getOriginalState());
      console.log(action);
      await listenerApi.delay(5000);
      console.log(listenerApi.getState());
    },
  });

  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  const middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
    user:Api

   
   
      
})


const reducer=counterSlice.reducer


 const store= configureStore({
    reducer,
    middleware,
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type AppDispatch2 = typeof store.getState;
  export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

  export default store;
  




export type RootState = ReturnType<typeof rootReducer>

