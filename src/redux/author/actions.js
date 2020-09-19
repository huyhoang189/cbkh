const actions = {

  GET_AUTHORS: 'GET_AUTHORS',
  GET_AUTHORS_SUCCESS: 'GET_AUTHORS_SUCCESS',
  GET_AUTHORS_ERROR: 'GET_AUTHORS_ERROR',
  getAuthors: (data) => ({
    type: actions.GET_AUTHORS,
    payload: { data },
  }),
  getAuthorsSuccess: (data) => ({
    type: actions.GET_AUTHORS_SUCCESS,
    payload: { data },
  }),
  getAuthorsError: (data) => ({
    type: actions.GET_AUTHORS_ERROR,
    payload: { data },
  }),

  ADD_AUTHOR: 'ADD_AUTHOR',
  ADD_AUTHOR_SUCCESS: 'ADD_AUTHOR_SUCCESS',
  ADD_AUTHOR_ERROR: 'ADD_AUTHOR_ERROR',
  addAuthor: (data) => ({
    type: actions.ADD_AUTHOR,
    payload: { data },
  }),
  addAuthorSuccess: (data) => ({
    type: actions.ADD_AUTHOR_SUCCESS,
    payload: { data },
  }),
  addAuthorError: (data) => ({
    type: actions.ADD_AUTHOR_ERROR,
    payload: { data },
  }),

  DELETE_AUTHOR: 'DELETE_AUTHOR',
  DELETE_AUTHOR_SUCCESS: 'DELETE_AUTHOR_SUCCESS',
  DELETE_AUTHOR_ERROR: 'DELETE_AUTHOR_ERROR',
  deleteAuthor: (data) => ({
    type: actions.DELETE_AUTHOR,
    payload: { data },
  }),
  deleteAuthorSuccess: (data) => ({
    type: actions.DELETE_AUTHOR_SUCCESS,
    payload: { data },
  }),
  deleteAuthorError: (data) => ({
    type: actions.DELETE_AUTHOR_ERROR,
    payload: { data },
  }),


  UPDATE_AUTHOR: 'UPDATE_AUTHOR',
  UPDATE_AUTHOR_SUCCESS: 'UPDATE_AUTHOR_SUCCESS',
  UPDATE_AUTHOR_ERROR: 'UPDATE_AUTHOR_ERROR',

  updateAuthor: (data) => ({
    type: actions.UPDATE_AUTHOR,
    payload: { data },
  }),
  updateAuthorSuccess: (data) => ({
    type: actions.UPDATE_AUTHOR_SUCCESS,
    payload: { data },
  }),
  updateAuthorError: (data) => ({
    type: actions.UPDATE_AUTHOR_ERROR,
    payload: { data },
  }),
  UPDATE_SELECTED_AUTHOR: 'UPDATE_SELECTED_AUTHOR',
  UPDATE_AUTHOR_INPUT: 'UPDATE_AUTHOR_INPUT',

  updateSelectedAuthor: (data) => ({
    type: actions.UPDATE_SELECTED_AUTHOR,
    payload: { data },
  }),
  updateAuthorInput: (data) => ({
    type: actions.UPDATE_AUTHOR_INPUT,
    payload: { data },
  }),


  TOGGLE_AUTHOR_MODAL: "AUTHOR/TOGGLE_AUTHOR_MODAL",
  toggleAuthorModal: data => ({
    type: actions.TOGGLE_AUTHOR_MODAL,
    payload: { data },
  }),






  //DEGREE
  GET_DEGREES: 'GET_DEGREES',
  getDegrees: (data) => ({
    type: actions.GET_DEGREES,
    payload: { data }
  }),
  GET_DEGREES_SUCCESS: 'GET_DEGREES_SUCCESS',
  getDegreesSuccess: (data) => ({
    type: actions.GET_DEGREES_SUCCESS,
    payload: { data }
  }),
  GET_DEGREES_ERROR: 'GET_DEGREES_ERROR',
  getDegreesError: (data) => ({
    type: actions.GET_DEGREES_ERROR,
    payload: { data }
  }),
  UPDATE_SELECTED_DEGREE: 'UPDATE_SELECTED_DEGREE',
  updateSelectedDegree: (data) => ({
    type: actions.UPDATE_SELECTED_DEGREE,
    payload: { data }
  }),

  //UNIVERSITY
  GET_UNIVERSITIES: "GET_UNIVERSITIES",
  GET_UNIVERSITIES_SUCCESS: "GET_UNIVERSITIES_SUCCESS",
  GET_UNIVERSITIES_ERROR: "GET_UNIVERSITIES_ERROR",
  UPDATE_SELECTED_UNIVERSITY: 'UPDATE_SELECTED_UNIVERSITY',

  getUniversities: (data) => ({
    type: actions.GET_UNIVERSITIES,
    payload: { data },
  }),

  getUniversitiesSuccess: (data) => ({
    type: actions.GET_UNIVERSITIES_SUCCESS,
    payload: { data },
  }),

  getUniversitiesError: (data) => ({
    type: actions.GET_UNIVERSITIES_ERROR,
    payload: { data },
  }),
  updateSelectedUniversity: data => ({
    type: actions.UPDATE_SELECTED_UNIVERSITY,
    payload: { data }
  }),


  GET_DEPARTMENTS: "GET_DEPARTMENTS",
  GET_DEPARTMENTS_SUCCESS: "GET_DEPARTMENTS_SUCCESS",
  GET_DEPARTMENTS_ERROR: "GET_DEPARTMENTS_ERROR",
  UPDATE_SELECTED_DEPARTMENT: "UPDATE_SELECTED_DEPARTMENT",

  getDepartments: (data) => ({
    type: actions.GET_DEPARTMENTS,
    payload: { data },
  }),

  getDepartmentsSuccess: (data) => ({
    type: actions.GET_DEPARTMENTS_SUCCESS,
    payload: { data },
  }),

  getDepartmentsError: (error) => ({
    type: actions.GET_DEPARTMENTS_ERROR,
    payload: { error },
  }),
  updateSelectedDepartment: data => ({
    type: actions.UPDATE_SELECTED_DEPARTMENT,
    payload: { data }
  }),

  GET_SUB_DEPARTMENTS: "GET_SUB_DEPARTMENTS",
  GET_SUB_DEPARTMENTS_SUCCESS: "GET_SUB_DEPARTMENTS_SUCCESS",
  GET_SUB_DEPARTMENTS_ERROR: "GET_SUB_DEPARTMENTS_ERROR",
  UPDATE_SELECTED_SUB_DEPARTMENT: "UPDATE_SELECTED_SUB_DEPARTMENT",

  //sub_department
  getSubDepartments: (data) => ({
    type: actions.GET_SUB_DEPARTMENTS,
    payload: { data },
  }),

  getSubDepartmentsSuccess: (data) => ({
    type: actions.GET_SUB_DEPARTMENTS_SUCCESS,
    payload: { data },
  }),

  getSubDepartmentsError: (error) => ({
    type: actions.GET_SUB_DEPARTMENTS_ERROR,
    payload: { error },
  }),
  updateSelectedSubDepartment: data => ({
    type: actions.UPDATE_SELECTED_SUB_DEPARTMENT,
    payload: { data }
  }),

};
export default actions;
