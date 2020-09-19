const actions = {


  GET_DOCUMENT_TYPES: 'GET_DOCUMENT_TYPES',
  GET_DOCUMENT_TYPES_SUCCESS: 'GET_DOCUMENT_TYPES_SUCCESS',
  GET_DOCUMENT_TYPES_ERROR: 'GET_DOCUMENT_TYPES_ERROR',

  getDocumentTypes: (data) => ({
    type: actions.GET_DOCUMENT_TYPES,
    payload: { data },
  }),

  getDocumentTypesSuccess: (data) => ({
    type: actions.GET_DOCUMENT_TYPES_SUCCESS,
    payload: { data },
  }),

  getDocumentTypesError: (data) => ({
    type: actions.GET_DOCUMENT_TYPES_ERROR,
    payload: { data },
  }),

  //UPDATE_SELECTED_ATTACMENT : 'UPDATE_SELECTED_ATTACMENT',
  UPDATE_SELECTED_DOCUMENT_TYPE: 'UPDATE_SELECTED_DOCUMENT_TYPE',
  updateSelectedDocumentType: data => ({
    type: actions.UPDATE_SELECTED_DOCUMENT_TYPE,
    payload: { data },
  }),

  TOGGLE_DOCUMENT_TYPE_MODAL: "TOGGLE_DOCUMENT_TYPE_MODAL",
  toggleDocumentTypesModal: data => ({
    type: actions.TOGGLE_DOCUMENT_TYPE_MODAL,
    payload: { data },
  })
};
export default actions;
