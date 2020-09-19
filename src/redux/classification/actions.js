const actions = {


  GET_CLASSIFICATIONS: 'GET_CLASSIFICATIONS',
  GET_CLASSIFICATIONS_SUCCESS: 'GET_CLASSIFICATIONS_SUCCESS',
  GET_CLASSIFICATIONS_ERROR: 'GET_CLASSIFICATIONS_ERROR',

  getClassifications: (data) => ({
    type: actions.GET_CLASSIFICATIONS,
    payload: { data },
  }),

  getClassificationsSuccess: (data) => ({
    type: actions.GET_CLASSIFICATIONS_SUCCESS,
    payload: { data },
  }),

  getClassificationsError: (data) => ({
    type: actions.GET_CLASSIFICATIONS_ERROR,
    payload: { data },
  }),

  //UPDATE_SELECTED_ATTACMENT : 'UPDATE_SELECTED_ATTACMENT',
  UPDATE_SELECTED_CLASSIFICATION: 'UPDATE_SELECTED_CLASSIFICATION',
  updateSelectedClassification: data => ({
    type: actions.UPDATE_SELECTED_CLASSIFICATION,
    payload: { data },
  }),

  TOGGLE_CLASSIFICATION_MODAL: "TOGGLE_CLASSIFICATION_MODAL",
  toggleClassificationsModal: data => ({
    type: actions.TOGGLE_CLASSIFICATION_MODAL,
    payload: { data },
  })
};
export default actions;
