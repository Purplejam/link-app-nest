import { faLink, faTrashCan, faFilePen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkItemStyle } from './wrappers/LinkItemStyle'

interface ILinkItemProps {
  id: string
  url: string
  name: string
  setCurrentLinkId: Function
  handleDeleteModalOpen: Function
  handleEditModalOpen: Function
  setNameValue: Function
  setUrlValue: Function
}

export const LinkItem = ({
  id,
  url,
  name,
  setCurrentLinkId,
  handleDeleteModalOpen,
  handleEditModalOpen,
  setNameValue,
  setUrlValue,
}: ILinkItemProps) => {
  const linkIcon = <FontAwesomeIcon icon={faLink} />
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />
  const editIcon = <FontAwesomeIcon icon={faFilePen} />

  //edit and delete link handlers
  const deleteHandler = () => {
    setCurrentLinkId(id)
    handleDeleteModalOpen()
  }

  const editHandler = () => {
    setCurrentLinkId(id)
    setNameValue(name)
    setUrlValue(url)
    handleEditModalOpen()
  }

  return (
    <LinkItemStyle>
      <div className="feed-icon">{linkIcon}</div>
      <div className="item-content">
        <h4>{name}</h4>
        <a href={url}>{url}</a>
      </div>
      <div className="item-icons">
        <button className="delete-button" onClick={deleteHandler}>
          {trashIcon}
        </button>
        <button className="update-button" onClick={editHandler}>
          {editIcon}
        </button>
      </div>
    </LinkItemStyle>
  )
}
