import {Component} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {P} from '../../components/fonts'
import OR from '../../components/OR'
import './index.css'
import { Link } from 'react-router-dom'
class Form extends Component{
    state={
        email:"",
        password:"",
    }

    onchange=(e)=>{
       let {value,name}=e.target;
       this.setState({[name]:value})
    }
    render(){
        const{email,password}=this.state;
    const data = {
        title:{
            children:"Join the game!",
            color:"#000000",
            fontSize:"42px",
            fontWeight:"bold"  
        },
        subtitle:{
            children:"Go inside the best gamers social network!",
            color:"#8692A6",
            fontSize:"18px"
        },
        register:{
            children:"Don’t have an account? ",
            Link:(<Link to="/signUp"><span className="link">Register</span></Link>),
            color:"#696F79",
            fontSize:"16px",
            fontWeight:"500"
        },
        email:{
            children:"Your email",
            placeholder:"Write your email",
            type:"email",
            name:"email",
            value:email
        },
        password:{
            children:"Enter your password",
            placeholder:"•••••••••",
            type:"password",
            vector:"",
            name:"password",
            value:password
        },
        signUp:{
            backgroundColor:"#1565D8",
            color:"#ffffff",
            width:"100%",
            height:"46px",
            children:"Register Account"
        },
        social:{
            backgroundColor:"#fff",
            width:"50px",
            height:"50px",
            google:{
                img:(<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                <path d="M3.15308 7.3455L6.43858 9.755C7.32758 7.554 9.48058 6 12.0001 6C13.5296 6 14.9211 6.577 15.9806 7.5195L18.8091 4.691C17.0231 3.0265 14.6341 2 12.0001 2C8.15908 2 4.82808 4.1685 3.15308 7.3455Z" fill="#FF3D00"/>
                <path d="M11.9999 22C14.5829 22 16.9299 21.0115 18.7044 19.404L15.6094 16.785C14.5717 17.5742 13.3036 18.0011 11.9999 18C9.39891 18 7.19041 16.3415 6.35841 14.027L3.09741 16.5395C4.75241 19.778 8.11341 22 11.9999 22Z" fill="#4CAF50"/>
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                </svg>            
    
                )
            },
            twitter:{
                img:(
                    <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M35 3.48158C33.7121 4.053 32.3282 4.43919 30.8757 4.61293C32.3585 3.72372 33.4969 2.31562 34.033 0.637882C32.6235 1.47481 31.0814 2.06449 29.4733 2.38142C28.1634 0.985085 26.2973 0.112427 24.2319 0.112427C20.2662 0.112427 17.051 3.32946 17.051 7.29725C17.051 7.86046 17.1146 8.40876 17.237 8.93477C11.2692 8.63503 5.97816 5.77465 2.43646 1.42764C1.8185 2.48881 1.46439 3.72317 1.46439 5.03975C1.46439 7.53255 2.73219 9.73164 4.65883 11.0202C3.51852 10.9844 2.40331 10.6763 1.40629 10.1214C1.40588 10.1515 1.40588 10.1816 1.40588 10.2118C1.40588 13.693 3.88104 16.597 7.16584 17.2571C6.10844 17.5448 4.9993 17.587 3.92314 17.3802C4.83684 20.2347 7.48877 22.3119 10.6308 22.3701C8.17332 24.297 5.07705 25.4458 1.71295 25.4458C1.13326 25.4458 0.561777 25.4117 0 25.3454C3.17775 27.384 6.95215 28.5735 11.0072 28.5735C24.2152 28.5735 31.4377 17.6251 31.4377 8.13051C31.4377 7.81888 31.4308 7.50902 31.4169 7.20094C32.8227 6.18407 34.036 4.92458 35 3.48158Z" fill="#55ACEE"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="35" height="28.5915" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                )
            },

            linkedin:{
                img:(
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M9.04312 30.625H2.69391V10.1784H9.04312V30.625ZM5.86469 7.38938C3.83469 7.38938 2.1875 5.70719 2.1875 3.67719C2.1875 2.70194 2.57492 1.76663 3.26452 1.07702C3.95413 0.387417 4.88944 0 5.86469 0C6.83994 0 7.77524 0.387417 8.46485 1.07702C9.15446 1.76663 9.54187 2.70194 9.54187 3.67719C9.54187 5.70719 7.89469 7.38938 5.86469 7.38938ZM32.8059 30.625H26.4709V20.6719C26.4709 18.2995 26.4228 15.2578 23.17 15.2578C19.8691 15.2578 19.3627 17.8347 19.3627 20.5012V30.625H13.02V10.1784H19.1089V12.9675H19.1975C20.0452 11.3608 22.1156 9.66547 25.2044 9.66547C31.6302 9.66547 32.8114 13.8972 32.8114 19.3933V30.625H32.8059Z" fill="#0E76A8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="35" height="35" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                )
            },
            github:{
                img:(
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4863 2.60791C9.03369 2.60449 2.1875 9.44727 2.1875 17.8931C2.1875 24.5718 6.47021 30.249 12.4346 32.334C13.2378 32.5357 13.1147 31.9648 13.1147 31.5752V28.9263C8.47656 29.4697 8.28857 26.4004 7.97754 25.8877C7.34863 24.8145 5.86182 24.541 6.30615 24.0283C7.3623 23.4849 8.43896 24.165 9.68652 26.0073C10.5889 27.3438 12.3491 27.1182 13.2412 26.896C13.436 26.0928 13.853 25.375 14.4272 24.8179C9.62158 23.9565 7.61865 21.0239 7.61865 17.5376C7.61865 15.8457 8.17578 14.2905 9.26953 13.0361C8.57227 10.9683 9.33447 9.19776 9.43701 8.93457C11.4229 8.75684 13.4873 10.3564 13.6479 10.4829C14.7759 10.1787 16.0645 10.0181 17.5068 10.0181C18.9561 10.0181 20.248 10.1855 21.3862 10.4932C21.7725 10.1992 23.6865 8.8252 25.5322 8.99268C25.6313 9.25586 26.3765 10.9854 25.7202 13.0259C26.8276 14.2837 27.3916 15.8525 27.3916 17.5479C27.3916 21.041 25.375 23.9771 20.5557 24.8247C20.9685 25.2307 21.2962 25.7148 21.5198 26.2488C21.7434 26.7829 21.8583 27.3561 21.8579 27.9351V31.7803C21.8853 32.0879 21.8579 32.3921 22.3706 32.3921C28.4238 30.3516 32.7817 24.6333 32.7817 17.8965C32.7817 9.44727 25.9321 2.60791 17.4863 2.60791Z" fill="black"/>
                    </svg>
                )
            }

        }
        
       
    }
    return(
        <form className="form_container">
            <div className="title_container">
            <div class="title">
                <P color={data.title.color} fontSize={data.title.fontSize} fontWeight={data.title.fontWeight}>{data.title.children}</P>
            </div>
            <div className="subtitle">
                <P color={data.subtitle.color} fontSize={data.subtitle.fontSize} >{data.subtitle.children}</P>
            </div>
            <div className="social">
            <Button img={data.social.google.img} backgroundColor={data.social.backgroundColor} width={data.social.width} height={data.social.height} />
            <Button img={data.social.twitter.img} backgroundColor={data.social.backgroundColor} width={data.social.width} height={data.social.height}/>
            <Button img={data.social.linkedin.img} backgroundColor={data.social.backgroundColor} width={data.social.width} height={data.social.height}/>   
            <Button img={data.social.github.img} backgroundColor={data.social.backgroundColor} width={data.social.width} height={data.social.height}/>
            </div>

            </div>
            <OR/>
            <Input name={data.email.name} type={data.email.type} value={data.email.value} children={data.email.children} placeholder={data.email.placeholder} onchange={this.onchange}/>
                <Input name={data.password.name} type={data.password.type} value={data.password.value} children={data.password.children} placeholder={data.password.placeholder} onchange={this.onchange} />
            <Button color={data.signUp.color} children={data.signUp.children} backgroundColor={data.signUp.backgroundColor} width={data.signUp.width} height={data.signUp.height}/>
            <P color={data.register.color} fontSize={data.register.fontSize} >{data.register.children}{data.register.Link}</P>
         
        </form>
        
    )
    }
}
export default Form;