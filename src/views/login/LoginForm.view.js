import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/logo.png'
import '../../styles/scss/loginForm.style.scss'
import { useState } from 'react'
import { usersApi } from '../../services/usersApi.service'
import cookiesUtil from '../../utils/cookies.util'
import { setInformation, setLogged } from '../../redux/slices/usersSlice'
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/slices/commonSlice'

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(setLoading(true));
        usersApi.login({ username, password })
            .then((res) => {
                cookiesUtil.setCookie('accessToken', res.data.data.accessToken)
                cookiesUtil.setCookie('refreshToken', res.data.data.refreshToken)
                const token = cookiesUtil.getCookie('accessToken');
                if (token) {
                    usersApi.information(token)
                        .then(res => {
                            dispatch(setLogged(true));
                            dispatch(setInformation(res.data.data))
                        })
                        .catch(err => {
                            dispatch(setInformation(null))
                        })
                }

                props.handleCloseForm();
            }).catch((err) => {
                console.log('err : ', err)
            })
        dispatch(setLoading(false));

    }
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

                                <h1 className='login-header__title'>Login Mini Ceramic</h1>

                            </div>
                            <div className='login-body flex-col-center'>
                                <div className='login-form flex-col-center'>
                                    <div className='login-form__input'>
                                        <span className='login-form__input-symbol'>
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                        <input
                                            className='login-form__input-item'
                                            type='text'
                                            name='username'
                                            placeholder='username'
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                        />

                                    </div>


                                    <div className='login-form__input'>
                                        <span className='login-form__input-symbol'>
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                        <input
                                            className='login-form__input-item'
                                            type='password'
                                            name='password'
                                            placeholder='password'
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />

                                    </div>

                                    <button className='login-form__button' onClick={() => handleLogin()}>Login</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm