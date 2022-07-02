import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import LoginSignupPage from '../../views/login/LoginSignupPage.view'

import logo from '../../assets/images/logo.png';
import '../../styles/scss/navigation.style.scss'
import { NavLink } from "react-router-dom"
import { getTotalProductQuantity } from '../../redux/selectors/cartSelector';
import { useSelector } from 'react-redux';


const Navigation = ({ cart, information, displayAll, navigationAlwayActive }) => {
    const [loginVisibale, setLoginVisibale] = useState(false)
    const [signupFormVisibale, setSignupFormVisibale] = useState(false)
    const [navigationActive, setNavigationActive] = useState(navigationAlwayActive);
    const [y, setY] = useState(window.scrollY);
    const cartSize = useSelector(getTotalProductQuantity);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (!navigationAlwayActive) {
            if (y > 100 && !navigationActive) setNavigationActive(true);
            if (y < 100 && navigationActive) setNavigationActive(false);
        }

        setY(window.scrollY);
    };

    const handleCloseLoginSignup = () => {
        setLoginVisibale(false)
        setSignupFormVisibale(false)
    }
    const handleOpenSignUp = () => {
        setSignupFormVisibale(signupFormVisibale ? false : true)
    }
    const handleOpenLogin = () => {
        setLoginVisibale(loginVisibale ? false : true)
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) => handleNavigation(e))
    })

    return (
        <>
            <nav className={"navigation-bar " + (navigationActive ? "active" : "")}>
                <div className={"navigation-bar-top " + (navigationActive ? "active" : "")}>
                    <div className="navigation-bar-top__bar" >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
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
                        {information ?
                            <>
                                <div className="navigation-bar-top__items navigation-bar-top__items--signup">
                                    Balance : {information.balance}
                                </div>
                                <div className="navigation-bar-top__items navigation-bar-top__items--login">
                                    {information.fullName}
                                </div>
                            </>
                            :
                            <>
                                <div onClick={() => handleOpenSignUp()} className="navigation-bar-top__items navigation-bar-top__items--signup">
                                    Sign up
                                </div>
                                <div onClick={() => handleOpenLogin()} className="navigation-bar-top__items navigation-bar-top__items--login">
                                    Login
                                </div>
                            </>
                        }

                    </div>
                </div>
                {
                    displayAll ?
                        <div className={`navigation-bar-container ${navigationActive ? 'active' : ''} `}>
                            <NavLink to="/" className="navigation-bar-container__logo-box">
                                <img src={logo} alt="logo" className="navigation-bar-container__logo-image" />
                            </NavLink>


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

                                    <NavLink to="/cart" className="navigation-bar-container__btn-cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </NavLink>

                                    <span className={`navigation-bar-container__quatity-cart ${cartSize ? 'active' : ''}`}>
                                        {cartSize}
                                    </span>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                }


            </nav>
            <LoginSignupPage handleCloseLoginSignup={() => handleCloseLoginSignup()} loginVisibale={loginVisibale} signupFormVisibale={signupFormVisibale} />
        </>
    )
}

export default Navigation