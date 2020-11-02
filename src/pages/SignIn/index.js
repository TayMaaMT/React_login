import {BlueLogo} from '../../components/Logo';
import Quote from '../../components/Quote';
import Form from './Form'
import './index.css'

function SignIn(){
    const data ={
        quote:{
            fill:"#BABABA",
            color:"#696F79",
        }
    }

    return(
        <div className="signIn_main">
            <aside className="left">
                <BlueLogo />
                <div className="left_parent">
                 <Quote color={data.quote.color} fill={data.quote.fill} img={data.quote.img}/>
                </div>
            </aside>
            <article className="right">
                <Form/>
            </article>
        </div>
    )
}


export default SignIn;
