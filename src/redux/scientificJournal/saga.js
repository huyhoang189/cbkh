import { all, takeEvery, put, select } from 'redux-saga/effects';
import actions from './actions';
import moment from 'moment'
const documentsState = (state) => state.ScientificJournal;

const initData = [
  {
    abstractText: "The Centre for Environmental Monitoring of the Vietnam Environment Administration in Hanoi launched a 2-year emissions monitoring program which aimed at determining the emission factors and emission",
    attachmentsAbstract: [],
    attachmentsFullText: [],
    authors: [],
    citedNumber: 6,
    classificationId: 1,
    documentType: 2,
    doi: '121',
    groupId: 5,
    id: "1",
    keyword: ['Driving cycles', 'Vehicle driving patterns', 'Vehicle emissions', 'Fuel consumption', 'On-road data'],
    languageId: 1,
    majorId: 2,
    mtaJournalId: '',
    publicationIndex: 122,
    publishDate: moment().format("DD/MM/YYYY"),
    publisher: 'Kim ddoong',
    sourceId: 0,
    specializationId: 2,
    title: 'Development of driving cycles for motorcycles and light-duty vehicles in Vietnam',
  },
  // {
  //   abstractText: "The Centre for Environmental Monitoring of the Vietnam Environment Administration in Hanoi launched a 2-year emissions monitoring program which aimed at determining the emission factors and emission",
  //   attachmentsAbstract: [],
  //   attachmentsFullText: [],
  //   authors: [],
  //   citedNumber: 6,
  //   classificationId: 1,
  //   documentType: 2,
  //   doi: '121',
  //   groupId: 5,
  //   id: "1",
  //   keyword: ['Driving cycles', 'Vehicle driving patterns', 'Vehicle emissions', 'Fuel consumption', 'On-road data'],
  //   languageId: 1,
  //   majorId: 2,
  //   mtaJournalId: '',
  //   publicationIndex: 122,
  //   publishDate: moment().format("DD/MM/YYYY"),
  //   publisher: 'Kim ddoong',
  //   sourceId: 0,
  //   specializationId: 2,
  //   title: 'Semantic approximation for reducing code bloat in Genetic Programming',
  // }

]

const initDocument = {
  abstractText: '',
  attachmentsAbstract: [],
  attachmentsFullText: [],
  authors: [],
  citedNumber: '',
  classification_id: 0,
  documentType: 0,
  doi: '',
  groupId: 0,
  id: 0,
  keyword: [],
  languageId: 0,
  majorId: 0,
  mtaJournalId: '',
  publicationIndex: '',
  publish_date: moment().format("DD/MM/YYYY"),
  publisher: '',
  sourceId: 0,
  specializationId: 0,
  title: '',
}

function uuid() {
  return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function* _getDocuments() {
  yield put(actions.loadingDocumentsP8())
  try {
    const response = initData;
    yield put(actions.getDocumentsP8Success(response))
  }
  catch (error) {
    console.log(error);
  }
}

function* _addDocument({ payload }) {
  try {
    const { data } = payload
    // console.log(data);
    data.id = uuid();
    const _documentsState = yield select(documentsState);
    const { documentsP8 } = _documentsState
    documentsP8.push(data)
    yield put(actions.addDocumentP8Success(documentsP8))
  }
  catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_DOCUMENTS_P8, _getDocuments),
    takeEvery(actions.ADD_DOCUMENT_P8, _addDocument),
  ]);
}
