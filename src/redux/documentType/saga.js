import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import { getDocumentTypes } from '../../services/documentTypeService'

const initData = [
  {
    id: 1,
    name: ' Bài báo (Article, article in press)',
  },
  {
    id: 2,
    name: 'Bài báo hội nghị (Conference paper)',
  },
  {
    id: 3,
    name: 'Bài báo ngắn dạng thư gửi toà soạn (Letter)',
  },
  {
    id: 4,
    name: 'Bài báo tổng quan (Review)',
  },
  {
    id: 5,
    name: 'Sách chuyên khảo (Book)',
  },
  {
    id: 6,
    name: 'Chương sách (Book chapter)',
  },
  {
    id: 7,
    name: 'Bài báo mô tả dữ liệu (Data paper)',
  },
  {
    id: 8,
    name: 'Bài bình luận (Note)',
  },
  {
    id: 9,
    name: 'Bài xã luận (Editorial)',
  },
  {
    id: 10,
    name: 'Bài đính chính (Erratum',
  },
  {
    id: 11,
    name: 'Bài điều tra (Short survay)',
  },
]


function* _getDocumentTypes() {
  try {
    // console.log('aa')
    const response = yield call(getDocumentTypes);
    console.log(response)
    // yield put(actions.getDocumentTypesSuccess(response))
    // yield put(actions.updateSelectedDocumentType(response[0]))
  }
  catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_DOCUMENT_TYPES, _getDocumentTypes)
  ]);
}
