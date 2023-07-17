import AddIcon from '@mui/icons-material/Add'
import axios from 'axios'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { CreateLinkStyle, CreateLinkModal } from './wrappers/CreateLinkWrapper'
import { getAllLinksAction } from '../actions/linkAction'
import { setAlertAction } from '../actions/infoAlertAction'
import { throwErrorAction } from '../actions/errorAction'
import { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export const CreateLink = () => {
  const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [nameValue, setNameValue] = useState('')
  const [urlValue, setUrlValue] = useState('')
  const [inputError, setInputError] = useState(false)

  //Create modal handlers
  const handleOpen = () => {
    setOpenModal(!openModal)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const clearInputsHandler = () => {
    setNameValue('')
    setUrlValue('')
  }

  const validationHandle = (body: any) => {
    const { name, url } = body
    if (!name || !url) return false
    if (name.length < 3 || name.length > 25) return false
    if (url.length < 8 || url.length > 50) return false
    return true
  }

  //CREATE link submit handler
  const formSubmitHandler = async (e: any) => {
    //Validation inputs, if false – return
    e.preventDefault()
    setInputError(false)
    if (!validationHandle({ name: nameValue, url: urlValue })) {
      setInputError(true)
      return
    }

    //Url, body and options request
    //const urlAxios = 'http://localhost:5000/links'
    const urlAxios = '/links'
    const body = {
      name: nameValue,
      url: urlValue,
    }
    const options = {
      headers: { 'Content-Type': 'application/json' },
    }

    //Close modal, clear inputs, fetch items
    setOpenModal(false)
    clearInputsHandler()

    //Try catch for data request
    try {
      dispatch({ type: 'FETCHING_LINKS' })
      await axios.post(urlAxios, body, options)
      //Fetch updated items and create success message
      dispatch(getAllLinksAction())
      dispatch(setAlertAction(`New link ${body.name} created!`))
    } catch (error: any) {
      //If error from axios - find all possible messages and throw it to error state
      if (error.name === 'AxiosError') {
        const errorData = error.response.data
        const errorMessages = errorData.errorMessage.message
        let result = ''
        errorMessages.forEach((item: string, index: number) => {
          result += item
          if (index !== errorMessages.length - 1) {
            result += ', '
          }
        })
        dispatch(throwErrorAction(result))
      } else {
        dispatch(throwErrorAction(error.message))
      }
      //Stop fetching items on error
      dispatch({ type: 'FETCHING_LINKS_STOP' })
    }
  }

  return (
    <CreateLinkStyle>
      <Fab
        className="action-button"
        onClick={handleOpen}
        variant="extended"
        color="primary"
        aria-label="add"
      >
        <AddIcon sx={{ mr: 1 }} />
        Create Link
      </Fab>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateLinkModal>
          <h3>Create New Link</h3>
          <Box component="form" autoComplete="off" onSubmit={formSubmitHandler}>
            <TextField
              size="small"
              error={inputError}
              id="outlined-error"
              label="Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameValue(e.target.value)}
              value={nameValue}
              fullWidth
              margin="dense"
              helperText="Name must contain more than 3 characters and less than 25"
            />
            <TextField
              size="small"
              error={inputError}
              fullWidth
              id="outlined-error-helper-text"
              label="Url"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrlValue(e.target.value)}
              value={urlValue}
              margin="dense"
              helperText="Url must contain more than 8 characters and less than 50"
            />
            <button type="submit" className="simple-button inverse">
              Create
            </button>
          </Box>
        </CreateLinkModal>
      </Modal>
    </CreateLinkStyle>
  )
}
