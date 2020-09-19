import actions from './actions';

const initState = {
  modalCiteActive: false,
  attachments: [],
  errorMessage: false,
  isLoadingCites: false,
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    //get
    case actions.GET_CITES:
      return {
        ...state,
        isLoadingCites: true,
        errorMessage: false,
      }
    case actions.GET_CITES_SUCCESS:
      return {
        ...state,
        isLoadingCites: false,
        attachments: payload.data,
        errorMessage: false,

      }
    case actions.GET_CITES_ERROR:
      return {
        ...state,
        isLoadingCites: true,
        errorMessage: 'error',
      }
    //add
    case actions.TOGGLE_CITE_MODAL:
      return {
        ...state,
        modalCiteActive: !state.modalCiteActive,
      }
    default:
      return state;
  }
}
