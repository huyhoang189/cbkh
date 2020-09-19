import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

const initObj = {
  id: '',
  name: '',
  description: '',
  parentId: '',
  level: '',
}


function* _getMajors() {
  try {
    const response = [
      {
        id: '1',
        name: 'Công nghệ thông tin',
        description: '',
        parentId: '',
        level: '',
      },
      {
        id: '2',
        name: 'Bảo đảm an toàn thônng tin',
        description: '',
        parentId: '',
        level: '',
      },

    ];
    if (response) {
      yield put(actions.getMajorsSuccess(response))
      if (response.length > 0) {
        yield put(actions.updateSelectedMajor(response[0]))
      }
      else yield put(actions.updateSelectedMajor(initObj))
    }
    else {
      console.log("erreor")
    }
  }
  catch (error) {
    console.log(error);
  }
}

function* _getSpecializations() {
  try {
    const response = [
      {
        id: '1',
        name: 'Tự động khoá',
        description: '',
        parentId: '',
        level: '',
      },
      {
        id: '2',
        name: 'Tích hợp hệ thống',
        description: '',
        parentId: '',
        level: '',
      },
      {
        id: '3',
        name: 'Điều khiển tự động',
        description: '',
        parentId: '',
        level: '',
      },
    ];
    if (response) {
      yield put(actions.getSpecializationsSuccess(response))
      if (response.length > 0) {
        yield put(actions.updateSelectedSpecialization(response[0]))
      }
      else yield put(actions.updateSelectedSpecialization(initObj))
    }
    else {
      console.log("loi")
    }
  }
  catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_MAJORS, _getMajors),
    takeEvery(actions.GET_SPECIALIZATIONS, _getSpecializations)

  ]);
}
