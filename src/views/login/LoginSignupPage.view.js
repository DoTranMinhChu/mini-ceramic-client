import LoginForm from './LoginForm.view'
import SignupForm from './SignupForm.views'

function LoginRegisterPage(props) {
    const handleCloseForm = ()=>{
        props.handleCloseLoginSignup()
    }

 
    return (
        <>
            {props.loginVisibale && <LoginForm handleCloseForm={handleCloseForm}/>}

            {props.signupFormVisibale && <SignupForm handleCloseForm={handleCloseForm}/>}
        </>
    )
}

export default LoginRegisterPage