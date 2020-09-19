const actions = {

  GET_SOURCES: 'GET_SOURCES',
  GET_SOURCES_SUCCESS: 'GET_SOURCES_SUCCESS',
  GET_SOURCES_ERROR: 'GET_SOURCES_ERROR',

  getSources: (data) => ({
    type: actions.GET_SOURCES,
    payload: { data }
  }),

  getSourcesSuccess: (data) => ({
    type: actions.GET_SOURCES_SUCCESS,
    payload: { data }
  }),

  getSourcesError: (data) => ({
    type: actions.GET_SOURCES_ERROR,
    payload: { data }
  }),


  ADD_SOURCE: 'ADD_SOURCE',
  ADD_SOURCE_SUCCESS: 'ADD_SOURCE_SUCCESS',
  ADD_SOURCE_ERROR: 'ADD_SOURCE_ERROR',

  addSource: (data) => ({
    type: actions.ADD_SOURCE,
    payload: { data }
  }),

  addSourceSuccess: (data) => ({
    type: actions.ADD_SOURCE_SUCCESS,
    payload: { data }
  }),

  addSourceError: (data) => ({
    type: actions.ADD_SOURCE_ERROR,
    payload: { data }
  }),

  SELECTED_SOURCE_INPUT: 'SELECTED_SOURCE_INPUT',
  
  selectedSourceInput: (data) => ({
    type: actions.SELECTED_SOURCE_INPUT,
    payload: { data }
  }),



  TOGGLE_SOURCE_MODAL: "TOGGLE_SOURCE_MODAL",
  toggleSourceModal: data => ({
    type: actions.TOGGLE_SOURCE_MODAL,
    payload: { data },
  })
};
export default actions;
