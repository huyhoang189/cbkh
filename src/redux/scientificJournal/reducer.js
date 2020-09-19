import actions from './actions';
import moment from 'moment';
const initState = {
  previewActive: false,
  enableEditView: false,

  documentsP8: [],
  documentP8: {
    abstractText: '',
    attachmentsAbstract: [],
    attachmentsFullText: [],
    authors: [],
    citedNumber: 0,
    classificationId: 0,
    documentType: 0,
    doi: '',
    groupId: 0,
    id: 0,
    keyword: [],
    languageId: 0,
    majorId: 0,
    mtaJournalId: '',
    publicationIndex: '',
    publishDate: moment().format("DD/MM/YYYY"),
    publisher: '',
    sourceId: '',
    specializationId: 0,
    title: '',
  },
  selectedDocumentP8: {
    abstractText: '',
    attachmentsAbstract: [],
    attachmentsFullText: [],
    authors: [],
    citedNumber: 0,
    classificationId: 0,
    documentType: 0,
    doi: '',
    groupId: 0,
    id: 0,
    keyword: [],
    languageId: 0,
    majorId: 0,
    mtaJournalId: '',
    publicationIndex: '',
    publishDate: moment().format("DD/MM/YYYY"),
    publisher: '',
    sourceId: '',
    specializationId: 0,
    title: '',

  },
  editableDocument: {},
  errorMessage: false,
  isLoadingDocuments: false,

};

export default function reducer(state = initState, { type, payload }) {
  // console.log({payload})
  switch (type) {
    case actions.LOADING_DOCUMENTS_P8:
      return {
        ...initState,
        isLoadingDocuments: true,
      }
    //get
    case actions.GET_DOCUMENTS_P8:
      return {
        ...state,
        isLoadingDocuments: true,
        errorMessage: false,
        enableEditView: false,
        // previewDocumentP8: false,
      }
    case actions.GET_DOCUMENTS_P8_SUCCESS:
      return {
        ...state,
        isLoadingDocuments: false,
        documentsP8: payload.data,
        errorMessage: false,

      }
    case actions.GET_DOCUMENTS_P8_ERROR:
      return {
        ...state,
        isLoadingDocuments: true,
        errorMessage: 'error',
      }
    //add
    case actions.ADD_DOCUMENT_P8:
      return {
        ...state,
        isLoadingDocuments: true,
        errorMessage: false,
      }

    case actions.ADD_DOCUMENT_P8_SUCCESS:
      return {
        ...state,
        isLoadingDocuments: false,
        errorMessage: false,
      }

    case actions.ADD_DOCUMENT_P8_ERROR:
      return {
        ...state,
      }
    //update 
    case actions.UPDATE_DOCUMENT_P8:
      return {
        ...state,
      }

    case actions.UPDATE_DOCUMENT_P8_SUCCESS:
      return {
        ...state,
      }

    case actions.UPDATE_DOCUMENT_P8_ERROR:
      return {
        ...state,
      }
    //delete 
    case actions.DELETE_DOCUMENT_P8:
      return {
        ...state,
      }

    case actions.DELETE_DOCUMENT_P8_SUCCESS:
      return {
        ...state,
      }

    case actions.DELETE_DOCUMENT_P8_ERROR:
      return {
        ...state,
      }

    //update selected

    case actions.UPDATE_SELECTED_DOCUMENT_P8:
      return {
        ...state,
        previewActive: true,
        enableEditView: false,
        selectedDocumentP8: payload.data,
        documentP8: payload.data,
      }

    //update document input 
    case actions.UPDATE_DOCUMENT_P8_INPUT:
      return {
        ...state,
        documentP8: payload.data,
      }
    //preview selected 

    case actions.PREVIEW_DOCUMENT_P8:
      // console.log(payload.data)
      return {
        ...state,
        previewActive: true,
        enableEditView: false,
      }


    //editView
    case actions.EDIT_DOCUMENT_P8:
      return {
        ...state,
        previewActive: true,
        enableEditView: true
        // previewActive: payload.data,
      }
    //ADD selected 

    case actions.ADD_STT:
      // console.log(payload.data)
      return {
        ...state,
        previewActive: false,
        enableEditView: false,
      }

    default:
      return state;
  }
}
