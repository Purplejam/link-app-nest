import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { ThunkDispatch } from 'redux-thunk'

export const setAlertAction =
  (message: string) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
    dispatch({ type: 'SET_ALERT', payload: { message } })
  }

export const resetAlertAction =
  () => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
    dispatch({ type: 'RESET_ALERT' })
  }
