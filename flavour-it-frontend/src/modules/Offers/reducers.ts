// import { combineReducers } from 'redux';

// import { Actions, ActionTypes } from './types/actions';
// import { IOffersState } from './types/state';
// import { IOffer } from '../../types/offer';

// const initialState: IOffersState = {
//   list: [],
//   requesting: true,
//   error: false,
//   totalCount: 0,
//   totalPages: 0
// };

// function list(state = initialState.list, action: Actions): IOffer[] {
//   switch (action.type) {
//     case ActionTypes.OFFERS_FETCH_SUCCESS: {
//       return action.payload.data;
//     }
//     case ActionTypes.OFFERS_FETCH_ERROR: {
//       return [];
//     }
//     default: {
//       return state;
//     }
//   }
// }

// function requesting(state = initialState.requesting, action: Actions): boolean {
//   switch (action.type) {
//     case ActionTypes.OFFERS_FETCH: {
//       return true;
//     }
//     case ActionTypes.OFFERS_FETCH_SUCCESS:
//     case ActionTypes.OFFERS_FETCH_ERROR: {
//       return false;
//     }
//     default: {
//       return state;
//     }
//   }
// }

// function error(state = initialState.error, action: Actions): boolean {
//   switch (action.type) {
//     case ActionTypes.OFFERS_FETCH_ERROR: {
//       return true;
//     }
//     case ActionTypes.OFFERS_FETCH_SUCCESS: {
//       return false;
//     }
//     default: {
//       return state;
//     }
//   }
// }

// function totalCount(state = initialState.totalCount, action: Actions): number {
//   switch (action.type) {
//     case ActionTypes.OFFERS_FETCH_SUCCESS: {
//       return action.payload.totalCount;
//     }
//     default: {
//       return state;
//     }
//   }
// }

// function totalPages(state = initialState.totalPages, action: Actions): number {
//   switch (action.type) {
//     case ActionTypes.OFFERS_FETCH_SUCCESS: {
//       return action.payload.totalPages;
//     }
//     default: {
//       return state;
//     }
//   }
// }

// export default combineReducers<IOffersState, Actions>({
//   list,
//   requesting,
//   error,
//   totalCount,
//   totalPages
// });
export {};
