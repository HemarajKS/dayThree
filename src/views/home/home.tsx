import HomeBody from '../../components/homeBody/homeBody'
import SideBar from '../../components/sideBar/sideBar'
import TopBar from '../../components/topBar/topBar'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeSideBar">
          <SideBar />
        </div>
        <div className="homeTopBar">
          <TopBar />
        </div>
        <div className="homeBody">
          <HomeBody />
        </div>
      </div>
    </div>
  )
}

export default Home
