import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { CreateLink } from './CreateLink'
import { getAllLinksAction } from '../actions/linkAction'
import { HomeStyles } from './wrappers/HomeStyles'
import { LinkPanel } from './LinkPanel'
import { SnackbarBox } from './SnackBar'
import { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const Home = () => {
  const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

  useEffect(() => {
    dispatch(getAllLinksAction())
  }, [])

  return (
    <HomeStyles className="container">
      <CreateLink />
      <SnackbarBox />
      <LinkPanel />
    </HomeStyles>
  )
}
