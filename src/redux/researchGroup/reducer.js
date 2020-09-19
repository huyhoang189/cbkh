import actions from './actions';

const initState = {
  modalResearchGroupsActive: false,
  researchGroups: [],
  errorMessage: false,
  isLoadingResearchGroups: false,
  selectedResearchGroup: {
    id : '',
    name : '',
    researchField : '',
    isiNumber : '',
    scopusNumber : '',
    otherNumber : '',
    nationalNumber : '',
    inventionNumber : '',
    usefulSolutionNumber : '',
    contactPhone : '',
    contactEmail : '',
  },
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    //get
    case actions.GET_RESEARCH_GROUPS:
      return {
        ...state,
        isLoadingResearchGroups: true,
        errorMessage: false,
      }
    case actions.GET_RESEARCH_GROUPS_SUCCESS:
      return {
        ...state,
        isLoadingResearchGroups: false,
        researchGroups: payload.data,
        errorMessage: false,

      }
    case actions.GET_RESEARCH_GROUPS_ERROR:
      return {
        ...state,
        isLoadingResearchGroups: true,
        errorMessage: 'error',
      }
    case actions.UPDATE_SELECTED_RESEARCH_GROUP:
      return {
        ...state,
        selectedResearchGroup: payload.data,
      }
    case actions.TOGGLE_RESEARCH_GROUP_MODAL:
      return {
        ...state,
        modalResearchGroupsActive: !state.modalResearchGroupsActive,
      }
    default:
      return state;
  }
}
