import { useState } from 'react'
import './LeftMenu.scss'

export default function LeftMenu() {
const [open, setOpen] = useState(true)
    return (
        <nav className={'left-menu'+(!open?' left-menu--hidden': '')}>
              <div className="left-menu__visibility-toggle" onClick={()=> setOpen(!open)}>&lt;</div>
              
              <div className="left-menu__content">
      
                  <div className="left-menu__header">
                      <img className="left-menu__seal" src="./src/assets/images/mi6-seal.png" alt="MI6 seal"/>
                  </div>
      
                  <div className="left-menu__links">
                      <a href="#">Home</a>
                      <a href="#">People of interest</a>
                  </div>
      
              </div>
          </nav>
    )
}