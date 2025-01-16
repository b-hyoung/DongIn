import React,{useState} from 'react'
import './MainPage.css'

function MainPage() {

  const [searchHistory , setSearchHistory] = useState([])


  return (
    <div>
      <div className="MainHeader">
        <span>
          어떤 원단을 찾으시나요?
          </span>
          <input />
      </div>
      <div className="SearchHistory">
        
      </div>
    </div>
  )
}

export default MainPage
