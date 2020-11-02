import {WhiteLogo} from '../../components/Logo';
import Quote from '../../components/Quote';
import Back from '../../components/Back';
import Form from './Form'
import './index.css'
function SignUp(){
    const data ={
        quote:{
            fill:"#00DAF7",
            color:"#FFFFFF",
            vector:(
                <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white"/>
                </svg>
            )
        }
    }
    return(
        <div className="signUp_main">
            <aside className="left">
            <WhiteLogo/>
                <div className="left_parent">
                 <Quote color={data.quote.color} fill={data.quote.fill} vector={data.quote.vector}/>
                </div>
            </aside>
            <article className="right">
                <Back/>
                <Form/>
            </article>
        </div>
    )
}

export default SignUp;
