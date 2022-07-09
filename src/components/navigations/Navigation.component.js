import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/logo.png';
import '../../styles/scss/navigation.style.scss'
import { NavLink } from "react-router-dom"
import { getTotalProductQuantity } from '../../redux/selectors/cartSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../../utils/cookies.util';
import { usersApi } from '../../services/usersApi.service';
import LoginForm from '../../views/login/LoginForm.view';
import SignupForm from '../../views/login/SignupForm.views';
import { setInformation, setLogged } from '../../redux/slices/usersSlice';
import { getInfomationSelector } from '../../redux/selectors/userSelector';
import { setLoading } from '../../redux/slices/commonSlice';


const Navigation = ({ onLogin, onSignup, displayAll, navigationAlwayActive }) => {
    const [loginVisibale, setLoginVisibale] = useState(onLogin)
    const [signupFormVisibale, setSignupFormVisibale] = useState(onSignup)
    const [navigationActive, setNavigationActive] = useState(navigationAlwayActive);
    const [y, setY] = useState(window.scrollY);
    const information = useSelector(getInfomationSelector);
    const cartSize = useSelector(getTotalProductQuantity);
    const dispatch = useDispatch();
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

    const handleLogout = async () => {
        dispatch(setLoading(true));
        const refreshToken = getCookie('refreshToken');
        const accessToken = getCookie('accessToken');
        await usersApi.logout({ refreshToken, accessToken })
            .then(res => {
                removeCookie('accessToken');
                removeCookie('refreshToken');
                dispatch(setInformation(null));
                dispatch(setLogged(false));
            })
            .catch(err => {
                console.log(err)
            })
        dispatch(setLoading(false));
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

                        <NavLink to="/" className="navigation-bar-top__items">
                            Home
                        </NavLink>
                        {
                            information ?
                                <>
                                    <NavLink to="/order" className="navigation-bar-top__items">
                                        Your Order
                                    </NavLink>
                                    <NavLink to="/shop" className="navigation-bar-top__items">
                                        Your Shop
                                    </NavLink>
                                </> :
                                <></>
                        }



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
                                <div onClick={() => handleLogout()} className="navigation-bar-top__items navigation-bar-top__items--login">
                                    Logout
                                </div>
                            </>
                            :
                            <>
                                <div id="signup" onClick={() => handleOpenSignUp()} className="navigation-bar-top__items navigation-bar-top__items--signup">
                                    Sign up
                                </div>
                                <div id="login" onClick={() => handleOpenLogin()} className="navigation-bar-top__items navigation-bar-top__items--login">
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

            {loginVisibale && <LoginForm handleCloseForm={handleCloseLoginSignup} />}

            {signupFormVisibale && <SignupForm handleCloseForm={handleCloseLoginSignup} />}


        </>
    )
}

export default Navigation