import clone from 'clone';
import actions from './actions';




const initState = {
  isLoadingAuthors: false,
  modalAuthorActive: false,
  authors: [],
  author: {
    id: '',
    academicRankId: 0,
    affiliationId: 0,
    birthdate: "2020-09-19T12:58:31.293Z",
    degreeId: "string",
    depthResearch: "string",
    email: "string",
    fullname: "string",
    gender: "string",
    groupIds: [
      0
    ],
    inventionNumber: 0,
    isiNumber: 0,
    linkGoogleScholar: "string",
    linkResearchGate: "string",
    majorId: 0,
    nationalNumber: 0,
    orcidId: 0,
    otherNumber: 0,
    phone: "string",
    scientificTitle: "string",
    scopusNumber: 0,
    usefulSolutionNumber: 0
  },
  selectedAuthor: {
    id: '',
    academicRankId: 0,
    affiliationId: 0,
    birthdate: "2020-09-19T12:58:31.293Z",
    degreeId: "string",
    depthResearch: "string",
    email: "string",
    fullname: "string",
    gender: "string",
    groupIds: [
      0
    ],
    inventionNumber: 0,
    isiNumber: 0,
    linkGoogleScholar: "string",
    linkResearchGate: "string",
    majorId: 0,
    nationalNumber: 0,
    orcidId: 0,
    otherNumber: 0,
    phone: "string",
    scientificTitle: "string",
    scopusNumber: 0,
    usefulSolutionNumber: 0
  },
  errorMessage: false,


  universities: [],
  selectedUniversity: {
    id: '',
    name: '',
    country: '',
    level: '',
    contactPhone: '',
    contactEmail: ''
  },

  departments: [],
  selectedDepartment: {
    id: '',
    name: '',
    country: '',
    level: '',
    contactPhone: '',
    contactEmail: ''
  },

  subDepartments: [],
  selectedSubDepartment: {
    id: '',
    name: '',
    country: '',
    level: '',
    contactPhone: '',
    contactEmail: ''
  },

};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.GET_AUTHORS:
      return {
        ...state,
        isLoadingAuthors: true,
        errorMessage: false,
        modalAuthorActive: false,
      };
    case actions.GET_AUTHORS_SUCCESS:
      return {
        ...state,
        isLoadingAuthors: false,
        errorMessage: false,
        authors: payload.data,
      };
    case actions.GET_AUTHORS_ERROR:
      return {
        ...state,
        isLoadingAuthors: false,
        errorMessage: "error",
      };
    case actions.ADD_AUTHOR:
      return {
        ...state,
        isLoadingAuthors: true,
        errorMessage: false,
        modalAuthorActive: false,
      };
    case actions.ADD_AUTHOR_SUCCESS:
      return {
        ...state,
        isLoadingAuthors: false,
        errorMessage: false,
      };
    case actions.ADD_AUTHOR_ERROR:
      return {
        ...state,
        isLoadingAuthors: false,
        errorMessage: "Cant add AUTHOR!",
      };

    case actions.UPDATE_AUTHOR:
      return {
        ...state,
        isLoadingAuthors: true,
        errorMessage: false,
        modalAuthorActive: false,
      };
    case actions.UPDATE_AUTHOR_SUCCESS:
      return {
        ...state,
        isLoadingAuthors: false,
        authors: payload.data,
        errorMessage: false,
      };
    case actions.UPDATE_AUTHOR_ERROR:
      return {
        ...state,
        isLoadingAuthors: false,
        errorMessage: "Cant update author!",
      };

    case actions.DELETE_AUTHOR:
      return {
        ...state,
        isLoadingAuthors: true,
        errorMessage: false,
        modalAuthorActive: false,
      };
    case actions.DELETE_AUTHOR_SUCCESS:
      return {
        ...state,
        isLoadingAuthors: false,
        authors: payload.data,
        errorMessage: false,
      };
    case actions.DELETE_AUTHOR_ERROR:
      return {
        ...state,
        isLoadingAuthors: false,
        errorMessage: "Cant delete author!",
      };
    //select
    case actions.UPDATE_SELECTED_AUTHOR:
      return {
        ...state,
        selectedAuthor: payload.data,
      };
    case actions.UPDATE_AUTHOR_INPUT:
      return {
        ...state,
        author: payload.data,
      };

    //university
    case actions.GET_UNIVERSITIES:
      return {
        ...state,
        errorMessage: false,
      }
    case actions.GET_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        universities: payload.data,
      }
    case actions.GET_UNIVERSITIES_ERROR:
      return {
        ...state,
        errorMessage: 'can not get university',
      }
    case actions.UPDATE_SELECTED_UNIVERSITY:
      return {
        ...state,
        selectedUniversity: payload.data,
      }


    //department
    case actions.GET_DEPARTMENTS:
      return {
        ...state,
        errorMessage: false,
      }
    case actions.GET_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        departments: payload.data,
      }
    case actions.GET_DEPARTMENTS_ERROR:
      return {
        ...state,
        errorMessage: 'can not get department',
      }
    case actions.UPDATE_SELECTED_DEPARTMENT:
      return {
        ...state,
        selectedDepartment: payload.data,
      }

    //subDepartment
    case actions.GET_SUB_DEPARTMENTS:
      return {
        ...state,
        errorMessage: false,
      }
    case actions.GET_SUB_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        subDepartments: payload.data,
      }
    case actions.GET_SUB_DEPARTMENTS_ERROR:
      return {
        ...state,
        errorMessage: 'can not get subDepartment',
      }
    case actions.UPDATE_SELECTED_SUB_DEPARTMENT:
      return {
        ...state,
        selectedSubDepartment: payload.data,
      }


    case actions.TOGGLE_AUTHOR_MODAL:
      return {
        ...state,
        modalAuthorActive: !state.modalAuthorActive,
        author: payload.data == null ? initState.author : payload.data
      }
    default:
      return state;
  }
}
