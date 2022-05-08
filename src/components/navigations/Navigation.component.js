import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/logo.png';
import '../../styles/scss/navigation.style.scss'
const Navigation = () => {
    return (
        <>
            <nav className="navigation-bar">
                <div className="navigation-bar-top">
                    <div className="navigation-bar-top__elements">
                        <div className="navigation-bar-top__items">
                            Catalog
                        </div>
                        <div className="navigation-bar-top__items">
                            About us
                        </div>
                        <div className="navigation-bar-top__items">
                            Help
                        </div>
                    </div>
                    <div className="navigation-bar-top__user-box">
                        <div className="navigation-bar-top__items navigation-bar-top__items--signup">
                            Sign up
                        </div>
                        <div className="navigation-bar-top__items navigation-bar-top__items--login">
                            Login
                        </div>
                    </div>
                </div>
                <div className="navigation-bar-container">
                    <div className="navigation-bar-container__logo-box">
                        <img src={logo} alt="logo" className="navigation-bar-container__logo-image" />
                    </div>

                    <div className="navigation-bar-container__search-box">
                        <div className="navigation-bar-container__search-box-inner">
                            <div className="navigation-bar-container__form">
                                <div className="navigation-bar-container__form-inner">
                                    <input type="text" className="navigation-bar-container__input" placeholder=" Type to search..." />
                                </div>
                                <div className="navigation-bar-container__btn-search">
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="navigation-bar-container__cart-drawer">
                        <div className="navigation-bar-container__cart-drawer-inner">
                            <div className="navigation-bar-container__btn-cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navigation