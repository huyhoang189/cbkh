import actions from './actions';

const initState = {
  majors: [],
  selectedMajor: {
    id: '',
    name: '',
    description: '',
    parentId: '',
    level: '',
  },
  major: {
    id: '',
    name: '',
    description: '',
    parentId: '',
    level: '',
  },
  specializations: [],
  selectedSpecialization: {
    id: '',
    name: '',
    description: '',
    parentId: '',
    level: '',
  },
  specialization: {
    id: '',
    name: '',
    description: '',
    parentId: '',
    level: '',
  },
  errorMessage: false,
  modalMajorActive: false,



};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    //get
    case actions.GET_SPECIALIZATIONS:
      return {
        ...state,
        errorMessage: false,
      }
    case actions.GET_SPECIALIZATIONS_SUCCESS:
      return {
        ...state,
        specializations: payload.data,
        errorMessage: false,

      }
    case actions.GET_SPECIALIZATIONS_ERROR:
      return {
        ...state,
        errorMessage: 'error',
      }

    case actions.ADD_SPECIALIZATION:
      return {
        ...state,
        isLoadingSpecializations: true,
        errorMessage: false,
        modalSpecializationActive: false,
      };
    case actions.ADD_SPECIALIZATION_SUCCESS:
      return {
        ...state,
        isLoadingSpecializations: false,
        errorMessage: false,
      };
    case actions.ADD_SPECIALIZATION_ERROR:
      return {
        ...state,
        isLoadingSpecializations: false,
        errorMessage: "Cant add SPECIALIZATION!",
      };

    case actions.UPDATE_SPECIALIZATION:
      return {
        ...state,
        isLoadingSpecializations: true,
        errorMessage: false,
        modalSpecializationActive: false,
      };
    case actions.UPDATE_SPECIALIZATION_SUCCESS:
      return {
        ...state,
        isLoadingSpecializations: false,
        specializations: payload.data,
        errorMessage: false,
      };
    case actions.UPDATE_SPECIALIZATION_ERROR:
      return {
        ...state,
        isLoadingSpecializations: false,
        errorMessage: "Cant update specialization!",
      };

    case actions.DELETE_SPECIALIZATION:
      return {
        ...state,
        isLoadingSpecializations: true,
        errorMessage: false,
        modalSpecializationActive: false,
      };
    case actions.DELETE_SPECIALIZATION_SUCCESS:
      return {
        ...state,
        isLoadingSpecializations: false,
        specializations: payload.data,
        errorMessage: false,
      };
    case actions.DELETE_SPECIALIZATION_ERROR:
      return {
        ...state,
        isLoadingSpecializations: false,
        errorMessage: "Cant delete specialization!",
      };

    case actions.UPDATE_SPECIALIZATION_INPUT:
      return {
        ...state,
        specialization: payload.data,
      };

    //UPDATE SELECTED
    case actions.UPDATE_SELECTED_SPECIALIZATION:
      return {
        ...state,
        selectedSpecialization: payload.data,
      }

    case actions.GET_MAJORS:
      return {
        ...state,
        errorMessage: false,
      }
    case actions.GET_MAJORS_SUCCESS:
      return {
        ...state,
        majors: payload.data,
        errorMessage: false,

      }
    case actions.GET_MAJORS_ERROR:
      return {
        ...state,
        errorMessage: 'error',
      }
    case actions.ADD_MAJOR:
      return {
        ...state,
        isLoadingMajors: true,
        errorMessage: false,
        modalMajorActive: false,
      };
    case actions.ADD_MAJOR_SUCCESS:
      return {
        ...state,
        isLoadingMajors: false,
        errorMessage: false,
      };
    case actions.ADD_MAJOR_ERROR:
      return {
        ...state,
        isLoadingMajors: false,
        errorMessage: "Cant add MAJOR!",
      };

    case actions.UPDATE_MAJOR:
      return {
        ...state,
        isLoadingMajors: true,
        errorMessage: false,
        modalMajorActive: false,
      };
    case actions.UPDATE_MAJOR_SUCCESS:
      return {
        ...state,
        isLoadingMajors: false,
        majors: payload.data,
        errorMessage: false,
      };
    case actions.UPDATE_MAJOR_ERROR:
      return {
        ...state,
        isLoadingMajors: false,
        errorMessage: "Cant update major!",
      };

    case actions.DELETE_MAJOR:
      return {
        ...state,
        isLoadingMajors: true,
        errorMessage: false,
        modalMajorActive: false,
      };
    case actions.DELETE_MAJOR_SUCCESS:
      return {
        ...state,
        isLoadingMajors: false,
        majors: payload.data,
        errorMessage: false,
      };
    case actions.DELETE_MAJOR_ERROR:
      return {
        ...state,
        isLoadingMajors: false,
        errorMessage: "Cant delete major!",
      };
    //select
    //UPDATE SELECTED
    case actions.UPDATE_SELECTED_MAJOR:
      return {
        ...state,
        selectedMajor: payload.data,
      }

    case actions.UPDATE_MAJOR_INPUT:
      return {
        ...state,
        major: payload.data,
      };

    default:
      return state;
  }
}
