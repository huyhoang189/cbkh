import actions from './actions';

const initState = {
  modalDocumentTypesActive: false,
  documentTypes: [],
  errorMessage: false,
  isLoadingDocumentTypes: false,
  selectedDocumentType: {
    id : '',
    name : '',
  },
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    //get
    case actions.GET_DOCUMENT_TYPES:
      return {
        ...state,
        isLoadingDocumentTypes: true,
        errorMessage: false,
      }
    case actions.GET_DOCUMENT_TYPES_SUCCESS:
      return {
        ...state,
        isLoadingDocumentTypes: false,
        documentTypes: payload.data,
        errorMessage: false,

      }
    case actions.GET_DOCUMENT_TYPES_ERROR:
      return {
        ...state,
        isLoadingDocumentTypes: true,
        errorMessage: 'error',
      }
    case actions.UPDATE_SELECTED_DOCUMENT_TYPE:
      return {
        ...state,
        selectedDocumentType: payload.data,
      }
    case actions.TOGGLE_DOCUMENT_TYPE_MODAL:
      return {
        ...state,
        modalDocumentTypesActive: !state.modalDocumentTypesActive,
      }
    default:
      return state;
  }
}
