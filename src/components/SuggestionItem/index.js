import './index.css'

const initialHistoryList = props => {
  const {details, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="first">
        <p className="time">{timeAccessed}</p>
        <img className="social-logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          className="second"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default initialHistoryList
