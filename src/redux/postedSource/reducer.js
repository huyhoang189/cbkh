import actions from './actions';

const initState = {
  isLoadingSources: false,
  sources: [],
  source: {
    id: '',
    name: '',
    description: '',
    citeScore: '',
    sjr: '',
    snip: '',
    issn: '',
    publisher: '',
    subjectArea: '',
    retired: '',
    retiredTime: '',
    retireBy: '',
    retireReason: ''
  },
  selectedSource: {
    id: '',
    name: '',
    description: '',
    citeScore: '',
    sjr: '',
    snip: '',
    issn: '',
    publisher: '',
    subjectArea: '',
    retired: '',
    retiredTime: '',
    retireBy: '',
    retireReason: '',
  },
  modalSourceActive: false,
  errorMessage: false
};

export default function reducer(state = initState, { type, payload }) {

  switch (type) {

    case actions.GET_SOURCES:
      return {
        ...state,
        isLoadingSources: true,
        errorMessage: false,
        // previewDocumentP8: false,
      }
    case actions.GET_SOURCES_SUCCESS:
      return {
        ...state,
        isLoadingSources: false,
        sources: payload.data,
        errorMessage: false,

      }
    case actions.GET_SOURCES_ERROR:
      return {
        ...state,
        isLoadingSources: true,
        errorMessage: 'error',
      }
    //add
    case actions.ADD_SOURCE:
      return {
        ...state,
        isLoadingSources: true,
        errorMessage: false,
      }

    case actions.ADD_SOURCE_SUCCESS:
      return {
        ...state,
        isLoadingSources: false,
        sources: payload.data,
        errorMessage: false,
      }

    case actions.ADD_SOURCE_ERROR:
      return {
        ...state,
      }



    case actions.TOGGLE_SOURCE_MODAL:
      return {
        ...state,
        modalSourceActive: !state.modalSourceActive,
      }
    default:
      return state;
  }
}
