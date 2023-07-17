import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { useState, useEffect } from 'react'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetAlertAction } from '../actions/infoAlertAction'

export const SnackbarBox = () => {
  const [open, setOpen] = useState(false)
  const { message } = useSelector((state: AppStateType) => state.alert)
  const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  //Open-close message handler
  useEffect(() => {
    if (message.length > 0) {
      setOpen(true)

      //Close on timeout
      const timeout = setTimeout(() => {
        setOpen(false)
        dispatch(resetAlertAction())
      }, 7000)
      return () => clearTimeout(timeout)
    }
  }, [message])

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        message={message}
        action={action}
        autoHideDuration={6000}
      />
    </div>
  )
}

export default SnackbarBox
