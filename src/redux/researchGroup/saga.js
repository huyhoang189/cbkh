import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

const initData =
{
  id: '',
  name: '',
  researchField: '',
  isiNumber: '',
  scopusNumber: '',
  otherNumber: '',
  nationalNumber: '',
  inventionNumber: '',
  usefulSolutionNumber: '',
  contactPhone: '',
  contactEmail: '',
}


function* _getResearchGroups() {
  try {
    const response = [
      {
        id: '1',
        name: 'Công nghệ tính toán',
        researchField: '',
        isiNumber: '',
        scopusNumber: '',
        otherNumber: '',
        nationalNumber: '',
        inventionNumber: '',
        usefulSolutionNumber: '',
        contactPhone: '',
        contactEmail: '',
      },
      {
        id: '2',
        name: 'Thông tin vô tuyến tiên tiến',
        researchField: '',
        isiNumber: '',
        scopusNumber: '',
        otherNumber: '',
        nationalNumber: '',
        inventionNumber: '',
        usefulSolutionNumber: '',
        contactPhone: '',
        contactEmail: '',
      },
      {
        id: '3',
        name: 'Trí tuệ nhân tạo trong ứng dụng mô phỏng',
        researchField: '',
        isiNumber: '',
        scopusNumber: '',
        otherNumber: '',
        nationalNumber: '',
        inventionNumber: '',
        usefulSolutionNumber: '',
        contactPhone: '',
        contactEmail: '',
      },
      {
        id: '4',
        name: 'Bảo mật phần cứng và các hệ thống ',
        researchField: '',
        isiNumber: '',
        scopusNumber: '',
        otherNumber: '',
        nationalNumber: '',
        inventionNumber: '',
        usefulSolutionNumber: '',
        contactPhone: '',
        contactEmail: '',
      },
    ];
    if (response) {
      yield put(actions.getResearchGroupsSuccess(response))
      if (response.length > 0) {
        yield put(actions.updateSelectedResearchGroup(response[0]))
      } else {

      }

    }
  }
  catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_RESEARCH_GROUPS, _getResearchGroups)
  ]);
}
