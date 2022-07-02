import LoginForm from './LoginForm.view'
import SignupForm from './SignupForm.views'

function LoginRegisterPage({ loginVisibale, signupFormVisibale, handleCloseLoginSignup }) {
    const handleCloseForm = () => {
        handleCloseLoginSignup()
    }


    return (
        <>
            {loginVisibale && <LoginForm handleCloseForm={handleCloseForm} />}

            {signupFormVisibale && <SignupForm handleCloseForm={handleCloseForm} />}
        </>
    )
}

export default LoginRegisterPage