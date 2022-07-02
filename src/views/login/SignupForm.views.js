import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/images/logo.png'
import '../../styles/scss/loginForm.style.scss'

function SignupForm(props) {

    return (
        <>
            <div onClick={() => props.handleCloseForm()} className='virtual-background flex-center'>
                <div className='login-wrapper' onClick={(event) => event.stopPropagation()}>
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
                                        <input className='login-form__input-item' type='text' name='fullname' placeholder='Fullname' />

                                    </div>

                                    <div className='login-form__input'>
                                        <span className='login-form__input-symbol'>
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                        <input className='login-form__input-item' type='text' name='username' placeholder='UserName' />

                                    </div>


                                    <div className='login-form__input'>
                                        <span className='login-form__input-symbol'>
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                        <input className='login-form__input-item' type='password' name='password' placeholder='password' />

                                    </div>

                                    <button className='login-form__button'>Sigup</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupForm