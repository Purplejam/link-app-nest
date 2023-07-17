export interface IinfoAlertState {
  message: string
}

const initialState = {
  message: '',
}

const infoAlertReducer = (
  state = initialState,
  action: { type: string; payload: { message: string } },
) => {
  switch (action.type) {
    case 'RESET_ALERT': {
      return {
        ...initialState,
      }
    }
    case 'SET_ALERT': {
      return {
        message: action.payload.message,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default infoAlertReducer
