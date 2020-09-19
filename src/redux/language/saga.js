import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

const initData =[
  {
    id : 1,
    name : 'English'
  },
  {
    id : 2,
    name : 'France'
  },
  {
    id : 3,
    name : 'Russia'
  },
  {
    id : 4,
    name : 'Czep'
  },
  {
    id : 5,
    name : 'Other language'
  },
]


function* _getLanguages() {
  try {
    const response = initData;
    yield put(actions.getLanguagesSuccess(response))
    yield put(actions.updateSelectedLanguage(response[0]))
  }
  catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_LANGUAGES,_getLanguages)
  ]);
}
