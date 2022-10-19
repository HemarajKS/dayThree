import Modal from '../Modal/modal'
import './homeBody.css'
import { useState } from 'react'

const HomeBody = () => {
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState('')
  const [element, setElement] = useState({})
  const [Index, setIndex] = useState(0)

  const data: any = [
    {
      siteName: 'Linkdin',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/LinkdIn.png`),
    },
    {
      siteName: 'Youtube',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/LinkdIn.png`),
    },
  ]

  const currentUserData = localStorage.getItem('currentUser') || ''

  if (localStorage.getItem('currentUser') === null || '[]') {
    localStorage.setItem(currentUserData, JSON.stringify(data))
  }

  const currentUser = JSON.stringify(localStorage.getItem('currentUser') || '')

  if (localStorage.getItem(currentUser) === null || 'undefined') {
    localStorage.setItem(currentUser, JSON.stringify(data))
  }

  const previousData: any = JSON.parse(
    localStorage.getItem(currentUser) || '[]',
  )

  console.log(previousData)

  return (
    <div className="homeBodyContainer">
      <div className="homeBodyHeader">
        <div className="headerBodyTitle">Sites</div>
        <div className="headerBodyOptions">
          <div className="headerSearch">
            <input type="text" className="searchbar" placeholder="Search" />
            <img
              src={require('../../assets/icons/search.png')}
              alt="search"
              className="searchbarIcn"
            />
          </div>
          <div
            className="headerAddButton"
            onClick={() => {
              setModal('Add Site')
              setToggle(true)
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={require('../../assets/icons/add_btn.png')} alt="add" />
          </div>
        </div>
      </div>
      <div className="homeBodyCount">
        <div className="socialMedia">Social Media</div>
        <div className="socialMediaCount">{previousData.length}</div>
        <div className="socialMediaDropDown">
          <img src={require('../../assets/icons/Path Copy.png')} alt="add" />
        </div>
      </div>
      <div className="homeBodyContainerBox">
        <div className="homeBodyContents">
          {JSON.stringify(previousData) === '[]' ? (
            <div className="homeBodyEmpty">
              <div>Please Click on the “+” symbol to add sites</div>
            </div>
          ) : (
            <div className="cardContainer">
              {previousData.map((ele: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="cardContents"
                    onClick={() => {
                      setModal('Site Details')
                      setElement(ele)
                      setToggle(true)
                      setIndex(index)
                    }}
                  >
                    <div className="cardUpper">
                      <div className="cardLogo">
                        {' '}
                        {ele.icon !== '' ? (
                          <img src={ele.icon} alt="" />
                        ) : (
                          // eslint-disable-next-line jsx-a11y/alt-text
                          <img
                            src={require('../../assets/icons/logo (2).png')}
                            height="50px"
                            style={{
                              backgroundPosition: 'cover',
                              borderRadius: '50%',
                            }}
                          />
                        )}
                      </div>

                      <div className="cardCopyTitle">
                        <div className="cardTitle"> {ele.siteName}</div>
                        <div className="cardCopy">
                          <img
                            src={require('../../assets/icons/copy.png')}
                            alt="copy"
                          />
                          <div>Copy Password</div>
                        </div>
                      </div>
                    </div>
                    <div className="cardLink">{ele.url}</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        {toggle ? (
          <aside className="modal">
            <Modal props={modal} element={Index} />
            <div className="closeBtnContainer">
              <button
                onClick={() => {
                  setToggle(false)
                }}
                className="closeBtn"
              >
                <img
                  src={require('../../assets/icons/close_btn.png')}
                  alt="close"
                />
              </button>
            </div>
          </aside>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default HomeBody
