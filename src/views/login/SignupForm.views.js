import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/images/logo.png'
import '../../styles/scss/loginForm.style.scss'

function SignupForm(props) {

    return (
        <>
            <div onClick={() =>   props.handleCloseForm()} className='virtual-background flex-center'>
                <div className='login-wrapper' onClick={(event)=>event.stopPropagation()}>
                    <div className='login-container'>
                        <div className='login-content '>
                            <div className='login-header flex-col-center'>
                                <div className='login-header__logo-box flex-center'>
                                    <img src={logo} alt='logo' />
                                </div>

                                <h1 className='login-header__title'>Singup Mini Ceramic</h1>

                            </div>
                            <div className='login-body flex-col-center'>
                                <div className='login-form flex-col-center'>
                                    <div className='login-form__input'>
                                        <span className='login-form__input-symbol'>
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                        <input className='login-form__input-item' type='text' name='username' placeholder='username' />

                                    </div>


                                    <div className='login-form__input'>
                                        <span className='login-form__input-symbol'>
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                        <input className='login-form__input-item' type='password' name='username' placeholder='password' />

                                    </div>

                                    <button className='login-form__button'>Login</button>

                                </div>
                            </div>
                            <div className='login-footer flex-center'>
                                <p className='login-footer__message'>Do not have an account ?</p>
                                <p className='login-footer__btn-signup'>Sigup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupForm