import axios from 'axios'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { CreateLinkModal } from './wrappers/CreateLinkWrapper'
import { DeleteModal } from './wrappers/DeleteModal'
import { getAllLinksAction } from '../actions/linkAction'
import { ILinkState } from '../reducers/linkReducer'
import { LinkItem } from './LinkItem'
import { LinkPanelStyle } from './wrappers/LinkPanelStyle'
import { LoadingGifSmall } from './LoadingIcon'
import { setAlertAction } from '../actions/infoAlertAction'
import { throwErrorAction } from '../actions/errorAction'
import { ThunkDispatch } from 'redux-thunk'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

export const LinkPanel = () => {
  const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
  const { isLoading, links }: ILinkState = useSelector((state: AppStateType) => state.links)

  //DELETE link state
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [currentLinkId, setCurrentLinkId] = useState('')
  const [currentLinkName, setCurrentLinkName] = useState('')

  //UPDATE link state
  const [openEditModal, setOpenEditModal] = useState(false)
  const [nameValue, setNameValue] = useState('')
  const [urlValue, setUrlValue] = useState('')
  const [inputError, setInputError] = useState(false)

  //DELETE link handlers
  const handleDeleteModalOpen = () => {
    setOpenDeleteModal(!openDeleteModal)
  }

  const handleDeleteModalClose = () => {
    setOpenDeleteModal(false)
  }

  //DELETE link handlers
  const handleEditModalOpen = () => {
    setOpenEditModal(!openEditModal)
  }

  const handleEditModalClose = () => {
    setOpenEditModal(false)
  }

  //DELETE link submit handler
  const handleRemoveSubmit = async () => {
    handleDeleteModalClose()
    //const url = 'http://localhost:5000/links'
    const url = '/links'
    const options = {
      params: {
        id: currentLinkId,
      },
    }
    try {
      const { data } = await axios.delete(url, options)
      dispatch({ type: 'FETCHING_LINKS' })
      if (data.statusCode === 202) {
        dispatch(getAllLinksAction())
        dispatch(setAlertAction(`Link was deleted!`))
      }
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

  //UPDATE link validation and submit
  const validationHandle = (body: any) => {
    const { url } = body
    if (!url) return false
    if (url.length < 8 && url.length > 50) return false
    return true
  }

  const clearInputsHandler = () => {
    setUrlValue('')
  }

  //UPDATE link submit handler
  const handleEditSubmit = async () => {
    //Validation inputs, if false – return
    setInputError(false)
    if (!validationHandle({ url: urlValue })) {
      setInputError(true)
      return
    }
    //Link, body and oprions request
    //const urlAxios = 'http://localhost:5000/links'
    const urlAxios = '/links'
    const body = {
      url: urlValue,
    }

    const options = {
      headers: { 'Content-Type': 'application/json' },
      params: {
        id: currentLinkId,
      },
    }
    //Close modal, clear inputs, fetch items
    handleEditModalClose()
    clearInputsHandler()

    //Try catch for data request
    try {
      dispatch({ type: 'FETCHING_LINKS' })
      await axios.patch(urlAxios, body, options)
      //Fetch updated items and create success message
      dispatch(getAllLinksAction())
      dispatch(setAlertAction(`Link was updated!`))
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
    <LinkPanelStyle className="container">
      {isLoading ? (
        <div className="loading-gif">
          <LoadingGifSmall color="#333" />
        </div>
      ) : (
        <div className="panel-articles-feed">
          {links.map((item) => {
            return (
              <LinkItem
                key={item.id}
                id={item.id}
                name={item.name}
                url={item.url}
                setCurrentLinkId={setCurrentLinkId}
                handleDeleteModalOpen={handleDeleteModalOpen}
                handleEditModalOpen={handleEditModalOpen}
                setNameValue={setNameValue}
                setUrlValue={setUrlValue}
                setCurrentLinkName={setCurrentLinkName}
              />
            )
          })}
        </div>
      )}

      {/*Delete modal*/}
      {openDeleteModal && (
        <Modal
          open={openDeleteModal}
          onClose={handleDeleteModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DeleteModal>
            <h3>Delete this item?</h3>
            <span></span>
            <div>
              <button onClick={handleRemoveSubmit} className="simple-button inverse">
                Yes
              </button>
              <button onClick={handleDeleteModalOpen} className="simple-button inverse">
                No
              </button>
            </div>
          </DeleteModal>
        </Modal>
      )}

      {/*Edit modal*/}
      {openEditModal && (
        <Modal
          open={openEditModal}
          onClose={handleEditModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CreateLinkModal>
            <h3>{currentLinkName}</h3>
            <Box component="form" autoComplete="off" onSubmit={handleEditSubmit}>
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
                Update
              </button>
            </Box>
          </CreateLinkModal>
        </Modal>
      )}
    </LinkPanelStyle>
  )
}
