import actions from './actions';

const initState = {
  modalAttachmentActive: false,
  attachments: [],
  errorMessage: false,
  isLoadingAttachments: false,
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    //get
    case actions.GET_ATTACHMENTS:
      return {
        ...state,
        isLoadingAttachments: true,
        errorMessage: false,
      }
    case actions.GET_ATTACHMENTS_SUCCESS:
      return {
        ...state,
        isLoadingAttachments: false,
        attachments: payload.data,
        errorMessage: false,

      }
    case actions.GET_ATTACHMENTS_ERROR:
      return {
        ...state,
        isLoadingAttachments: true,
        errorMessage: 'error',
      }
    //add
    case actions.TOGGLE_ATTACHMENT_MODAL:
      return {
        ...state,
        modalAttachmentActive: !state.modalAttachmentActive,
      }
    default:
      return state;
  }
}
