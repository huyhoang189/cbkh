const actions = {


  GET_LANGUAGES: 'GET_LANGUAGES',
  GET_LANGUAGES_SUCCESS: 'GET_LANGUAGES_SUCCESS',
  GET_LANGUAGES_ERROR: 'GET_LANGUAGES_ERROR',

  getLanguages: (data) => ({
    type: actions.GET_LANGUAGES,
    payload: { data },
  }),

  getLanguagesSuccess: (data) => ({
    type: actions.GET_LANGUAGES_SUCCESS,
    payload: { data },
  }),

  getLanguagesError: (data) => ({
    type: actions.GET_LANGUAGES_ERROR,
    payload: { data },
  }),

  //UPDATE_SELECTED_ATTACMENT : 'UPDATE_SELECTED_ATTACMENT',
  UPDATE_SELECTED_LANGUAGE: 'UPDATE_SELECTED_LANGUAGE',
  updateSelectedLanguage: data => ({
    type: actions.UPDATE_SELECTED_LANGUAGE,
    payload: { data },
  }),

  TOGGLE_LANGUAGE_MODAL: "TOGGLE_LANGUAGE_MODAL",
  toggleLanguagesModal: data => ({
    type: actions.TOGGLE_LANGUAGE_MODAL,
    payload: { data },
  })
};
export default actions;
