import { useEffect, useState } from 'react'
import './modal.css'

const Modal = (props: any) => {
  console.log('ele', props)
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState({
    siteName: '',
    url: '',
    sector: '',
    userName: '',
    sitePassword: '',
    notes: '',
  })

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
  console.log('current', currentUser)

  const previousData: any = JSON.parse(
    localStorage.getItem(currentUser) || '[]',
  )

  console.log('current', previousData)

  const onChangeHandler = (e: any) => {
    setValue(e.target.value)
  }

  const currentItem = previousData[props.element]
  console.log('current', currentItem)

  const editVal = () => {
    if (props.props === 'Add Site') {
      setEdit(true)
    }
  }

  useEffect(() => {
    editVal()
  })

  const submitHandler = (e: any) => {
    e.preventDefault()

    const newData = {
      siteName: e.target.siteName.value,
      url: e.target.url.value,
      sector: e.target.sector.value,
      userName: e.target.userName.value,
      sitePassword: e.target.sitePassword.value,
      notes: e.target.notes.value,
    }

    console.log('new data', newData)
  }

  return (
    <div className="modalBody">
      <div className="modalTitle">{props.props}</div>
      {props.props === 'Site Details' && !edit ? (
        <div className="modaledit">
          <button
            className="modalEditButton"
            onClick={() => {
              setEdit(!edit)
              if (props.props === 'Add Site') {
                setEdit(true)
              }
            }}
          >
            Edit
          </button>
        </div>
      ) : (
        ''
      )}
      <form className="modalBodyForm" onSubmit={submitHandler}>
        <div className="modalInput occupy">
          <div>URL</div>
          <input
            type="text"
            name="url"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.url : currentItem.url}
          />
        </div>
        <div className="modalInput">
          <div>Site Name</div>
          <input
            type="text"
            name="siteName"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.siteName : currentItem.siteName}
          />
        </div>
        <div className="modalInput">
          <div>Sector/Folder</div>

          <input
            type="text"
            name="sector"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.sector : currentItem.sector}
          />
        </div>
        <div className="modalInput">
          <div>User Name</div>
          <input
            type="text"
            name="userName"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.userName : currentItem.userName}
          />
        </div>
        <div className="modalInput">
          <div>Site Password</div>

          <input
            type="text"
            name="sitePassword"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.sitePassword : currentItem.sitePassword}
          />
        </div>
        <div className="modalInput occupy">
          <div>Notes</div>
          <textarea className="modalInputBar" name="notes" />
        </div>
        <div></div>
        {props.props === 'Add Site' ? (
          <div className="modalButtons">
            <button className="modalButton modalResetButton">Reset</button>
            <button className="modalButton modalSaveButton" type="submit">
              Save
            </button>
          </div>
        ) : (
          ''
        )}
        {props.props === 'Site Details' ? (
          <div className="modalButtons">
            <button className="modalButton modalSaveButton">Update</button>
          </div>
        ) : (
          ''
        )}
      </form>
    </div>
  )
}

export default Modal
