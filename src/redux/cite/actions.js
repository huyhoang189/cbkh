const actions = {


  GET_CITES: 'GET_CITES',
  GET_CITES_SUCCESS: 'GET_CITES_SUCCESS',
  GET_CITES_ERROR: 'GET_CITES_ERROR',

  getCites: (data) => ({
    type: actions.GET_CITES,
    payload: { data },
  }),

  getCitesSuccess: (data) => ({
    type: actions.GET_CITES_SUCCESS,
    payload: { data },
  }),

  getCitesError: (data) => ({
    type: actions.GET_CITES_ERROR,
    payload: { data },
  }),

  //UPDATE_SELECTED_CITE : 'UPDATE_SELECTED_CITE',


  TOGGLE_CITE_MODAL: "TOGGLE_CITE_MODAL",
  toggleCiteModal: data => ({
    type: actions.TOGGLE_CITE_MODAL,
    payload: { data },
  })
};
export default actions;
