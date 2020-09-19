const actions = {

  GET_MAJORS: 'GET_MAJORS',
  GET_MAJORS_SUCCESS: 'GET_MAJORS_SUCCESS',
  GET_MAJORS_ERROR: 'GET_MAJORS_ERROR',
  UPDATE_SELECTED_MAJOR: 'UPDATE_SELECTED_MAJOR',

  getMajors: data => ({
    type: actions.GET_MAJORS,
    payload: { data },
  }),

  getMajorsSuccess: data => ({
    type: actions.GET_MAJORS_SUCCESS,
    payload: { data },
  }),
  getMajorsError: data => ({
    type: actions.GET_MAJORS_ERROR,
    payload: { data },
  }),

  updateSelectedMajor: data => ({
    type: actions.UPDATE_SELECTED_MAJOR,
    payload: { data }
  }),


  ADD_MAJOR: 'ADD_MAJOR',
  ADD_MAJOR_SUCCESS: 'ADD_MAJOR_SUCCESS',
  ADD_MAJOR_ERROR: 'ADD_MAJOR_ERROR',

  addMajor: data => ({
    type: actions.ADD_MAJOR,
    payload: { data },
  }),

  addMajorSuccess: data => ({
    type: actions.ADD_MAJOR_SUCCESS,
    payload: { data },
  }),

  addMajorError: data => ({
    type: actions.ADD_MAJOR_ERROR,
    payload: { data },
  }),

  UPDATE_MAJOR: 'UPDATE_MAJOR',
  UPDATE_MAJOR_SUCCESS: 'UPDATE_MAJOR_SUCCESS',
  UPDATE_MAJOR_ERROR: 'UPDATE_MAJOR_ERROR',

  updateMajor: data => ({
    type: actions.UPDATE_MAJOR,
    payload: { data },
  }),

  updateMajorSuccess: data => ({
    type: actions.UPDATE_MAJOR_SUCCESS,
    payload: { data },
  }),

  updateMajorError: data => ({
    type: actions.UPDATE_MAJOR_ERROR,
    payload: { data },
  }),


  DELETE_MAJOR: 'DELETE_MAJOR',
  DELETE_MAJOR_SUCCESS: 'DELETE_MAJOR_SUCCESS',
  DELETE_MAJOR_ERROR: 'DELETE_MAJOR_ERROR',

  deleteMajor: data => ({
    type: actions.DELETE_MAJOR,
    payload: { data },
  }),

  deleteMajorSuccess: data => ({
    type: actions.DELETE_MAJOR_SUCCESS,
    payload: { data },
  }),

  deleteMajorError: data => ({
    type: actions.DELETE_MAJOR_ERROR,
    payload: { data },
  }),

  UPDATE_MAJOR_INPUT: 'UPDATE_MAJOR_INPUT',
  updateMajorInput: data => ({
    type: actions.UPDATE_MAJOR_INPUT,
    payload: { data },
  }),



  GET_SPECIALIZATIONS: 'GET_SPECIALIZATIONS',
  GET_SPECIALIZATIONS_SUCCESS: 'GET_SPECIALIZATIONS_SUCCESS',
  GET_SPECIALIZATIONS_ERROR: 'GET_SPECIALIZATIONS_ERROR',
  UPDATE_SELECTED_SPECIALIZATION: 'UPDATE_SELECTED_SPECIALIZATION',

  getSpecializations: data => ({
    type: actions.GET_SPECIALIZATIONS,
    payload: { data },
  }),

  getSpecializationsSuccess: data => ({
    type: actions.GET_SPECIALIZATIONS_SUCCESS,
    payload: { data },
  }),
  getSpecializationsError: data => ({
    type: actions.GET_SPECIALIZATIONS_ERROR,
    payload: { data },
  }),

  updateSelectedSpecialization: data => ({
    type: actions.UPDATE_SELECTED_SPECIALIZATION,
    payload: { data }
  }),

  ADD_SPECIALIZATION: 'ADD_SPECIALIZATION',
  ADD_SPECIALIZATION_SUCCESS: 'ADD_SPECIALIZATION_SUCCESS',
  ADD_SPECIALIZATION_ERROR: 'ADD_SPECIALIZATION_ERROR',

  addSpecialization: data => ({
    type: actions.ADD_SPECIALIZATION,
    payload: { data },
  }),

  addSpecializationSuccess: data => ({
    type: actions.ADD_SPECIALIZATION_SUCCESS,
    payload: { data },
  }),

  addSpecializationError: data => ({
    type: actions.ADD_SPECIALIZATION_ERROR,
    payload: { data },
  }),

  UPDATE_SPECIALIZATION: 'UPDATE_SPECIALIZATION',
  UPDATE_SPECIALIZATION_SUCCESS: 'UPDATE_SPECIALIZATION_SUCCESS',
  UPDATE_SPECIALIZATION_ERROR: 'UPDATE_SPECIALIZATION_ERROR',

  updateSpecialization: data => ({
    type: actions.UPDATE_SPECIALIZATION,
    payload: { data },
  }),

  updateSpecializationSuccess: data => ({
    type: actions.UPDATE_SPECIALIZATION_SUCCESS,
    payload: { data },
  }),

  updateSpecializationError: data => ({
    type: actions.UPDATE_SPECIALIZATION_ERROR,
    payload: { data },
  }),


  DELETE_SPECIALIZATION: 'DELETE_SPECIALIZATION',
  DELETE_SPECIALIZATION_SUCCESS: 'DELETE_SPECIALIZATION_SUCCESS',
  DELETE_SPECIALIZATION_ERROR: 'DELETE_SPECIALIZATION_ERROR',

  deleteSpecialization: data => ({
    type: actions.DELETE_SPECIALIZATION,
    payload: { data },
  }),

  deleteSpecializationSuccess: data => ({
    type: actions.DELETE_SPECIALIZATION_SUCCESS,
    payload: { data },
  }),

  deleteSpecializationError: data => ({
    type: actions.DELETE_SPECIALIZATION_ERROR,
    payload: { data },
  }),

  UPDATE_SPECIALIZATION_INPUT: 'UPDATE_SPECIALIZATION_INPUT',
  updateSpecializationInput: data => ({
    type: actions.UPDATE_SPECIALIZATION_INPUT,
    payload: { data },
  }),


  TOGGLE_MAJOR_MODAL: 'TOGGLE_MAJOR_MODAL',

  toggleMajorModal: data => ({
    type: actions.TOGGLE_MAJOR_MODAL,
    payload: { data }
  })

};
export default actions;
