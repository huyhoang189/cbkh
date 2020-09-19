import actions from './actions';

const initState = {
  modalLanguagesActive: false,
  languages: [],
  errorMessage: false,
  isLoadingLanguages: false,
  selectedLanguage: {
    id : '',
    name : '',
  },
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    //get
    case actions.GET_LANGUAGES:
      return {
        ...state,
        isLoadingLanguages: true,
        errorMessage: false,
      }
    case actions.GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        isLoadingLanguages: false,
        languages: payload.data,
        errorMessage: false,

      }
    case actions.GET_LANGUAGES_ERROR:
      return {
        ...state,
        isLoadingLanguages: true,
        errorMessage: 'error',
      }
    case actions.UPDATE_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: payload.data,
      }
    case actions.TOGGLE_LANGUAGE_MODAL:
      return {
        ...state,
        modalLanguagesActive: !state.modalLanguagesActive,
      }
    default:
      return state;
  }
}
