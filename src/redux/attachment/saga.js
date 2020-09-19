import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

const initData =[]


function* _getAttachments() {
  try {
    const response = initData;
    yield put(actions.getAttachmentsSuccess(response))
  }
  catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_ATTACHMENTS,_getAttachments)
  ]);
}
