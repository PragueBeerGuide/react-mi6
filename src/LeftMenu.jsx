import './LeftMenu.scss'

export default function LeftMenu() {

    return (
        <nav className="left-menu">
              <div className="left-menu__visibility-toggle">&lt;</div>
      
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