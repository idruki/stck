import  React,{useState} from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'


const Auth=() => {
    const [isSignUp, setIsSignUp] = useState(false)

    const handleSwitch=() => {
        setIsSignUp(!isSignUp)
    }

    return(
        <section class='auth-section'>
            {
                isSignUp && <AboutAuth/>
            }
        <div class='auth-container-2'>
        {!isSignUp && <img src={ icon } alt='stack overflow ' className='login-logo'/>}

        <form>
            {
                isSignUp && (
                    <label htmlFor='name'>
                        <h4>Display name </h4>
                        <input type="text" id='name' name='name'/>
                    </label>
                )
            }

        <label htmlfor="email">
        <h4>  Email   </h4>
        <input type="email" name='email' id='email'/>
        </label>

        <label htmlfor="password">
            <div style={{display:"flex" ,justifyContent:"space-between"}}>
        <h4> password  </h4>
        { !isSignUp && <p style={{color: "#007ac6", fontSize:"13px"}}> forget password </p> }

        </div>
 
        <input type="password " name='password ' id='password '/>
        {isSignUp && <p style={{fontSize: "13px"}}>Pssword must contain characters, include at least 8 letter,<br/> a number and 1 spacial char </p>}

        </label>
        {
            isSignUp  && (
                <label htmlFor='check'>
                    <input type="checkbox" id='check'/>
                    <p style={{fontSize: "13px"}}>
                        Opt-in to receive occasional<br/>product updates<br/>company announcments
                    </p>

                </label>
            )
        }

        <button type='submit' className='auth-btn'>{ isSignUp ? 'sign up' : 'log in ' } </button>
        {
            isSignUp && (
                <p style={{color: "#666767", fontSize: "13px"}}>
                    By clicking sign up you agree to
                    <span style={{color: "#007ac6"}}> terms and conditions </span><br/>and 
                    <span style={{color: "#007ac6"}}>cookies accept</span>
                </p>
            )
        }
        </form>
        <p>
        {isSignUp ? 'already have an account?' : "Don't have an account? " }
        <button type='button' className='handle-switch-btn' onClick={ handleSwitch } > { isSignUp ? "Log in " : 'sign up'} </button>
        </p>
        </div>

        </section>
    )
}

export default Auth
