import { all, takeEvery, put, select } from 'redux-saga/effects';
import actions from './actions';
const authorsState = (state) => state.Author;

const initdata = [
  {
    id: 1,
    fullname: 'Võ Huy Hoang',
    degreeId: 1,
    academicRankId: 2,
    gender: 1,
    birtdate: '22/12/2020',
    scientificTitle: 'Kỹ sư CNTT',
    affiliationId: "2",
    majorId: 2,
    groupId: ['3'],
    orcidId: 12,
    linkGoogleScholar: '',
    linkResearchGate: '',
    phone: '0332973189',
    email: ['vohuyhoang@gmail.com'],
    depthResearch: 'Tự động hoá',
  },
  {
    id: 2,
    fullname: 'Nguyễn Văn Hoàng',
    degreeId: 1,
    academicRankId: 2,
    gender: 1,
    birtdate: '22/12/2020',
    scientificTitle: 'Kỹ sư xây dựng',
    affiliationId: '',
    majorId: 2,
    groupId: ['1', '2', '3'],
    orcidId: 12,
    linkGoogleScholar: '',
    linkResearchGate: '',
    phone: '0332973189',
    email: ['vohuyhoang@gmail.com'],
    depthResearch: 'Tự động hoá',
  }
]
const initU = {
  id: '',
  name: '',
  country: '',
  level: '',
  contactPhone: '',
  contactEmail: ''
}

function uuid() {
  return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function* _getAuthors() {
  // yield put(actions.)
  try {

    const response = initdata;
    // console.log(initdata)
    yield put(actions.getAuthorsSuccess(response))
  }
  catch (error) {
    console.log(error);
  }
}

function* _getUniversities() {
  try {
    const response = [
      {
        id: '1',
        name: 'Học viện kỹ thuật quân sự',
        country: 'Hà Nội',
        level: '1',
        contactPhone: '',
        contactEmail: ''
      },
      {
        id: '2',
        name: 'Học viện bưu chính viễn thông',
        country: 'Hà Nội',
        level: '',
        contactPhone: '',
        contactEmail: ''
      }
    ];
    if (response) {
      yield put(actions.getUniversitiesSuccess(response))
      if (response.length > 0) {
        yield put(actions.updateSelectedUniversity(response[0]))
      } else {
        yield put(actions.updateSelectedUniversity(initU));
      }
    }
    else {
      console.log("can get university")
    }
  }
  catch (error) {
    console.log(error)
  }
}

function* _getDepartments() {
  try {
    const response = [
      {
        id: '1',
        name: 'Công nghệ thông tin',
        country: 'Hà Nội',
        level: '1',
        contactPhone: '',
        contactEmail: ''
      },
      {
        id: '2',
        name: 'Kỹ thuật điều khiển',
        country: 'Hà Nội',
        level: '',
        contactPhone: '',
        contactEmail: ''
      }
    ];
    if (response) {
      yield put(actions.getDepartmentsSuccess(response))
      if (response.length > 0) {
        yield put(actions.updateSelectedDepartment(response[0]))
      } else {
        yield put(actions.updateSelectedDepartment(initU));
      }
    }
    else {
      console.log("can get department")
    }
  }
  catch (error) {
    console.log(error)
  }

}

function* _getSubDepartments() {
  try {
    const response = [
      {
        id: '1',
        name: 'An Toàn thông tin',
        country: 'Hà Nội',
        level: '1',
        contactPhone: '',
        contactEmail: ''
      },
      {
        id: '2',
        name: 'Khoa học máy tính',
        country: 'Hà Nội',
        level: '',
        contactPhone: '',
        contactEmail: ''
      }
    ];
    if (response) {
      yield put(actions.getSubDepartmentsSuccess(response))
      if (response.length > 0) {
        yield put(actions.updateSelectedSubDepartment(response[0]))
      } else {
        yield put(actions.updateSelectedSubDepartment(initU));
      }
    }
    else {
      console.log("can get subdepartment")
    }
  }
  catch (error) {
    console.log(error)
  }
}

function* _updateAuthor({ payload }) {
  const { data } = payload
  console.log(data)
  console.log(uuid());

}
function* _addAuthor({ payload }) {
  try {
    const { data } = payload
    // data.id = uuid();
    const _authorsState = yield select(authorsState);
    const { authors } = _authorsState;
    authors.push(data);
    yield put(actions.addAuthorSuccess(authors))
  } catch (error) {
    console.log(error);
  }
}

function* _deleteAuthor({ payload }) {
  console.log("delete", payload);
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_AUTHORS, _getAuthors),
    takeEvery(actions.GET_UNIVERSITIES, _getUniversities),
    takeEvery(actions.GET_DEPARTMENTS, _getDepartments),
    takeEvery(actions.GET_SUB_DEPARTMENTS, _getSubDepartments),
    takeEvery(actions.ADD_AUTHOR, _addAuthor),
    takeEvery(actions.UPDATE_AUTHOR, _updateAuthor),
    takeEvery(actions.DELETE_AUTHOR, _deleteAuthor),
  ]);
}
