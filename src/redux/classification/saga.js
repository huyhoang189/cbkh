import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

const initData = [
  {
    id: 1,
    name: 'ISI',
  },
  {
    id: 2,
    name: 'Scopus',
  },
  {
    id: 3,
    name: 'Quốc tế khác',
  },
  {
    id: 4,
    name: 'Khoa học kỹ thuật',
  },
  {
    id: 5,
    name: 'ICT',
  },
]


function* _getClassification() {
  try {
    const response = initData;
    yield put(actions.getClassificationsSuccess(response))
    yield put(actions.updateSelectedClassification(response[0]))
  }
  catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_CLASSIFICATIONS, _getClassification)
  ]);
}
