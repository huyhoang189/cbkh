import actions from './actions';

const initState = {
  modalClassificationsActive: false,
  classifications: [],
  errorMessage: false,
  isLoadingClassifications: false,
  selectedClassification: {
    id : '',
    name : '',
  },
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    //get
    case actions.GET_CLASSIFICATIONS:
      return {
        ...state,
        isLoadingClassifications: true,
        errorMessage: false,
      }
    case actions.GET_CLASSIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoadingClassifications: false,
        classifications: payload.data,
        errorMessage: false,

      }
    case actions.GET_CLASSIFICATIONS_ERROR:
      return {
        ...state,
        isLoadingClassifications: true,
        errorMessage: 'error',
      }
    case actions.UPDATE_SELECTED_CLASSIFICATION:
      return {
        ...state,
        selectedClassification: payload.data,
      }
    case actions.TOGGLE_CLASSIFICATION_MODAL:
      return {
        ...state,
        modalClassificationsActive: !state.modalClassificationsActive,
      }
    default:
      return state;
  }
}
