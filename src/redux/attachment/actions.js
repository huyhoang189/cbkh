const actions = {


  GET_ATTACHMENTS: 'GET_ATTACHMENTS',
  GET_ATTACHMENTS_SUCCESS: 'GET_ATTACHMENTS_SUCCESS',
  GET_ATTACHMENTS_ERROR: 'GET_ATTACHMENTS_ERROR',

  getAttachments: (data) => ({
    type: actions.GET_ATTACHMENTS,
    payload: { data },
  }),

  getAttachmentsSuccess: (data) => ({
    type: actions.GET_ATTACHMENTS_SUCCESS,
    payload: { data },
  }),

  getAttachmentsError: (data) => ({
    type: actions.GET_ATTACHMENTS_ERROR,
    payload: { data },
  }),

  //UPDATE_SELECTED_ATTACMENT : 'UPDATE_SELECTED_ATTACMENT',


  TOGGLE_ATTACHMENT_MODAL: "TOGGLE_ATTACHMENT_MODAL",
  toggleAttachmentModal: data => ({
    type: actions.TOGGLE_ATTACHMENT_MODAL,
    payload: { data },
  })
};
export default actions;
