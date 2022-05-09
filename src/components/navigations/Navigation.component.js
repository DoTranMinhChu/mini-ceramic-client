import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import LoginSignupPage from '../../views/login/LoginSignupPage.view'

import logo from '../../assets/images/logo.png';
import '../../styles/scss/navigation.style.scss'


const Navigation = () => {
    const [loginVisibale, setLoginVisibale] = useState(false)
    const [signupFormVisibale, setSignupFormVisibale] = useState(false)
    const [y, setY] = useState(window.scrollY);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        setY(window.scrollY);
    };

    const handleCloseLoginSignup = ()=>{
        setLoginVisibale(false)
        setSignupFormVisibale(false)
    }
    const handleOpenSignUp = () => {
        setLoginVisibale(loginVisibale?false:true)
    }
    const handleOpenLogin = () => {
       
        setSignupFormVisibale(signupFormVisibale?false:true)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', (e) => handleNavigation(e))
    })

    return (
        <>
            <nav className={"navigation-bar " + (y > 100 ? "active" : "")}>
                <div className={"navigation-bar-top " + (y > 100 ? "active" : "")}>
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
                        <div onClick={() => handleOpenSignUp()} className="navigation-bar-top__items navigation-bar-top__items--signup">
                            Sign up
                        </div>
                        <div onClick={() => handleOpenLogin()} className="navigation-bar-top__items navigation-bar-top__items--login">
                            Login
                        </div>
                    </div>
                </div>
                <div className={"navigation-bar-container " + (y > 100 ? "active" : "")}>
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
            <LoginSignupPage handleCloseLoginSignup={()=>handleCloseLoginSignup()} loginVisibale={loginVisibale} signupFormVisibale={signupFormVisibale} />
        </>
    )
}

export default Navigation