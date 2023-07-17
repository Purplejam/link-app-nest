export interface IErrorState {
  errorMessage: string
}

const InitialState = {
  errorMessage: '',
}

const errorReducer = (state: IErrorState = InitialState, action: any) => {
  switch (action.type) {
    case 'THROW_ERROR': {
      return {
        errorMessage: action.payload.error,
      }
    }
    case 'CLEAR_ERROR': {
      return {
        ...InitialState,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default errorReducer
