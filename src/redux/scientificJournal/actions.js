const actions = {
  //LOADING DOCUMENT 
  LOADING_DOCUMENTS_P8: 'LOADING_DOCUMENTS_P8',
  loadingDocumentsP8: (data) => ({
    type: actions.LOADING_DOCUMENTS_P8,
    payload: { data },
  }),

  //GET ALL
  GET_DOCUMENTS_P8: 'GET_DOCUMENTS_P8',
  GET_DOCUMENTS_P8_SUCCESS: 'GET_DOCUMENTS_P8_SUCCESS',
  GET_DOCUMENTS_P8_ERROR: 'GET_DOCUMENTS_P8_ERROR',

  getDocumentsP8: (data) => ({
    type: actions.GET_DOCUMENTS_P8,
    payload: { data },
  }),

  getDocumentsP8Success: (data) => ({
    type: actions.GET_DOCUMENTS_P8_SUCCESS,
    payload: { data },
  }),

  getDocumentsP8Error: (data) => ({
    type: actions.GET_DOCUMENTS_P8_ERROR,
    payload: { data },
  }),

  //ADD ITEM
  ADD_DOCUMENT_P8: 'ADD_DOCUMENT_P8',
  ADD_DOCUMENT_P8_SUCCESS: 'ADD_DOCUMENT_P8_SUCCESS',
  ADD_DOCUMENT_P8_ERROR: 'ADD_DOCUMENT_P8_ERROR',

  addDocumentP8: (data) => ({
    type: actions.ADD_DOCUMENT_P8,
    payload: { data },
  }),

  addDocumentP8Success: (data) => ({
    type: actions.ADD_DOCUMENT_P8_SUCCESS,
    payload: { data },
  }),

  addDocumentP8P8Error: (data) => ({
    type: actions.ADD_DOCUMENT_P8_ERROR,
    payload: { data },
  }),

  //UPDATE
  UPDATE_DOCUMENT_P8: 'UPDATE_DOCUMENT_P8',
  UPDATE_DOCUMENT_P8_SUCCESS: 'UPDATE_DOCUMENT_P8_SUCCESS',
  UPDATE_DOCUMENT_P8_ERROR: 'UPDATE_DOCUMENT_P8_ERROR',

  updateDocumentP8: (data) => ({
    type: actions.UPDATE_DOCUMENT_P8,
    payload: { data },
  }),

  updateDocumentP8Success: (data) => ({
    type: actions.UPDATE_DOCUMENT_P8_SUCCESS,
    payload: { data },
  }),

  updateDocumentP8Error: (data) => ({
    type: actions.UPDATE_DOCUMENT_P8_ERROR,
    payload: { data },
  }),

  //DELETE
  DELETE_DOCUMENT_P8: 'DELETE_DOCUMENT_P8',
  DELETE_DOCUMENT_P8_SUCCESS: 'DELETE_DOCUMENT_P8_SUCCESS',
  DELETE_DOCUMENT_P8_ERROR: 'DELETE_DOCUMENT_P8_ERROR',

  deleteDocumentP8: (data) => ({
    type: actions.DELETE_DOCUMENT_P8,
    payload: { data },
  }),

  deleteDocumentP8Success: (data) => ({
    type: actions.DELETE_DOCUMENT_P8_SUCCESS,
    payload: { data },
  }),

  deleteDocumentP8Error: (data) => ({
    type: actions.DELETE_DOCUMENT_P8_ERROR,
    payload: { data },
  }),

  //SELECTED DOCUMENT
  UPDATE_SELECTED_DOCUMENT_P8: 'UPDATE_SELECTED_DOCUMENT_P8',

  updateSelectedDocumentP8: data => ({
    type: actions.UPDATE_SELECTED_DOCUMENT_P8,
    payload: { data },
  }),

  //UPDATE DOCUMENT INPUT
  UPDATE_DOCUMENT_P8_INPUT: 'UPDATE_DOCUMENT_P8_INPUT',

  updateDocumentP8Input: data => ({
    type: actions.UPDATE_DOCUMENT_P8_INPUT,
    payload: { data },
  }),

  //PREVIEW ITEM DOCUMENT P8
  PREVIEW_DOCUMENT_P8: 'PREVIEW_DOCUMENT_P8',

  previewDocumentP8: data => ({
    type: actions.PREVIEW_DOCUMENT_P8,
    payload: { data }
  }),


   //EDIT ITEM DOCUMENT P8
  EDIT_DOCUMENT_P8: 'EDIT_DOCUMENT_P8',
  editDocumentP8: data => ({
    type: actions.EDIT_DOCUMENT_P8,
    payload: { data }
  }),
   //ADD ITEM DOCUMENT P8
   ADD_STT: 'ADD_STT',
   addSTT: data => ({
     type: actions.ADD_STT,
     payload: { data }
   }),

  // //toggle modal 
  // TOGGLE_AUTHOR_MODAL: "SJ/TOGGLE_AUTHOR_MODAL",

  // toggleAuthorModal: data => ({
  //   type: actions.TOGGLE_AUTHOR_MODAL,
  //   payload: { data },
  // })
};
export default actions;
