// import apiClient from '../../utils/api/apiClient';
// import { Endpoints } from '../../config';
// import { call, put, takeLatest } from 'redux-saga/effects';
// import * as actions from './actions';
// import { ActionTypes, IOffersFetchRequest } from './types/actions';
// import querystring from 'querystring';
// import { defaultSearchParams } from './constants';
// import { IOffersSearchParams } from '../../types/offer';

// const fetchOffersRequest = async (payload: Partial<IOffersSearchParams>): Promise<{}> => {
//   const { data } = await apiClient().get(`${Endpoints.offers.fetch}?${querystring.stringify(payload)}`);

//   return data;
// };

// export function* fetchOffersSaga(action: IOffersFetchRequest) {
//   try {
//     const { data, totalCount, totalPages } = yield call(fetchOffersRequest, {
//       ...defaultSearchParams,
//       ...action.payload
//     });

//     yield put(
//       actions.offersFetchSuccess({
//         data,
//         totalCount,
//         totalPages
//       })
//     );
//   } catch (err) {
//     yield put(actions.offersFetchError());
//   }
// }

// export default function*() {
//   yield takeLatest(ActionTypes.OFFERS_FETCH, fetchOffersSaga);
// }
export {};
