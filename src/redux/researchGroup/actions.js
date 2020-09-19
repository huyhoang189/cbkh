const actions = {


  GET_RESEARCH_GROUPS: 'GET_RESEARCH_GROUPS',
  GET_RESEARCH_GROUPS_SUCCESS: 'GET_RESEARCH_GROUPS_SUCCESS',
  GET_RESEARCH_GROUPS_ERROR: 'GET_RESEARCH_GROUPS_ERROR',

  getResearchGroups: (data) => ({
    type: actions.GET_RESEARCH_GROUPS,
    payload: { data },
  }),

  getResearchGroupsSuccess: (data) => ({
    type: actions.GET_RESEARCH_GROUPS_SUCCESS,
    payload: { data },
  }),

  getResearchGroupsError: (data) => ({
    type: actions.GET_RESEARCH_GROUPS_ERROR,
    payload: { data },
  }),

  //UPDATE_SELECTED_ATTACMENT : 'UPDATE_SELECTED_ATTACMENT',
  UPDATE_SELECTED_RESEARCH_GROUP: 'UPDATE_SELECTED_RESEARCH_GROUP',
  updateSelectedResearchGroup: data => ({
    type: actions.UPDATE_SELECTED_RESEARCH_GROUP,
    payload: { data },
  }),

  TOGGLE_RESEARCH_GROUP_MODAL: "TOGGLE_RESEARCH_GROUP_MODAL",
  toggleResearchGroupsModal: data => ({
    type: actions.TOGGLE_RESEARCH_GROUP_MODAL,
    payload: { data },
  })
};
export default actions;
