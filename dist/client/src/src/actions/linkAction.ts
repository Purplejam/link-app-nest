import axios from 'axios'
import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { throwErrorAction } from '../actions/errorAction'
import { ThunkDispatch } from 'redux-thunk'

export const getAllLinksAction =
  () => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
    //const url = 'http://localhost:5000/links'
    const url = '/links'

    try {
      dispatch({ type: 'FETCHING_LINKS' })
      const { data } = await axios.get(url)
      dispatch({
        type: 'FETCH_CURRENT_LINKS',
        payload: { links: data.links },
      })
    } catch (e: any) {
      dispatch(throwErrorAction(e.message))
    }
  }
