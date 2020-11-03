import {Component} from 'react'
import * as yup from 'yup'; 
import Input from '../../components/Input'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import {P} from '../../components/fonts'
import OR from '../../components/OR'
import './index.css'
class Form extends Component{
     state={
         email:"",
         password:"",
         repeatPassword:"",
         checkbox:"",
         errors:{
                email:"",
                password:"",
                repeatPassword:"",
                checkbox:""
         }
     }
    
     onchange=(e)=>{
        let {value,name}=e.target;
        value=name==="checkbox"?(this.state.checkbox==="on"?value="":value="on"):value
        this.setState({[name]:value})
     }

     onsubmit=async(e)=>{
        e.preventDefault();
        const{email,password,repeatPassword,checkbox}=this.state;
        let signUpSchema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
            repeatPassword: yup.string().required(),
            checkbox: yup.string().required()
          });
        try{
        await signUpSchema.validate({email,password,repeatPassword,checkbox},{abortEarly:false})
        console.log("valid");
        }catch(err){
            const errors= {}
           err.inner.map(({params,message})=>errors[params.path]=message) 
          
           this.setState({errors});
           console.log(this.state);
        }
     }
    render(){
        const{email,password,repeatPassword,checkbox}=this.state;

       const data = {
            title:{
                children:"Register Individual Account!",
                color:"#000000",
                fontSize:"30px",
                fontWeight:"600"  
            },
            subtitle:{
                children:"For the purpose of gamers regulation, your details are required.",
                color:"#8692A6",
                fontSize:"18px"
            },
            email:{
                children:"Email*",
                placeholder:"Enter email address",
                type:"email",
                name:"email",
                value:email,
                error:{
                    text:this.state.errors.email,
                    borderColor:this.state.errors.email?"red":"gray"
                }
            },
            password:{
                children:"Password*",
                placeholder:"password",
                type:"password",
                name:"password",
                value:password,
                error:{
                    text:this.state.errors.password,
                    borderColor:this.state.errors.password?"red":"gray"
                }
            },
            repeatPassword:{
                children:"Repeat password*",
                placeholder:"Repeat password",
                type:"password",
                name:"repeatPassword",
                value:repeatPassword,
                error:{
                    text:this.state.errors.repeatPassword,
                    borderColor:this.state.errors.repeatPassword?"red":"gray"
                }
            },
            checkbox:{
                children:"I agree to terms & conditions",
                name:"checkbox",
                value:checkbox
            },
            signUp:{
                backgroundColor:"#1565D8",
                color:"#ffffff",
                width:"100%",
                height:"46px",
                children:"Register Account"
            },
            google:{
                backgroundColor:"#fefefe",
                children:"login",
                img:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                <path d="M3.15308 7.3455L6.43858 9.755C7.32758 7.554 9.48058 6 12.0001 6C13.5296 6 14.9211 6.577 15.9806 7.5195L18.8091 4.691C17.0231 3.0265 14.6341 2 12.0001 2C8.15908 2 4.82808 4.1685 3.15308 7.3455Z" fill="#FF3D00"/>
                <path d="M11.9999 22C14.5829 22 16.9299 21.0115 18.7044 19.404L15.6094 16.785C14.5717 17.5742 13.3036 18.0011 11.9999 18C9.39891 18 7.19041 16.3415 6.35841 14.027L3.09741 16.5395C4.75241 19.778 8.11341 22 11.9999 22Z" fill="#4CAF50"/>
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                </svg>
                )
            }
           
        }

        return(
            <form className="form_container" onSubmit={this.onsubmit}>
                <div class="title">
                    <P color={data.title.color} fontSize={data.title.fontSize} fontWeight={data.title.fontWeight}>{data.title.children}</P>
                </div>
                <div className="subtitle">
                    <P color={data.subtitle.color} fontSize={data.subtitle.fontSize} >{data.subtitle.children}</P>
                </div>
                <hr />
                <Input error={data.email.error.text} borderColor={data.email.error.borderColor} name={data.email.name} type={data.email.type} value={data.email.value} children={data.email.children} placeholder={data.email.placeholder} onchange={this.onchange}/>
                <Input error={data.password.error.text} borderColor={data.password.error.borderColor} name={data.password.name} type={data.password.type} value={data.password.value} children={data.password.children} placeholder={data.password.placeholder} onchange={this.onchange} />
                <Input error={data.repeatPassword.error.text} borderColor={data.repeatPassword.error.borderColor} name={data.repeatPassword.name} type={data.password.type} value={data.repeatPassword.value} children={data.repeatPassword.children} placeholder={data.repeatPassword.placeholder} onchange={this.onchange} />
                <Checkbox name={data.checkbox.name} children={data.checkbox.children} value={data.checkbox.value} onchange={this.onchange}/>
                <Button color={data.signUp.color} children={data.signUp.children} backgroundColor={data.signUp.backgroundColor} width={data.signUp.width} height={data.signUp.height} onsubmit={this.onsubmit}/>
                <OR />
                <Button children={data.google.children} img={data.google.img} backgroundColor={data.google.backgroundColor} width={data.signUp.width} height={data.signUp.height} /> 
            </form>
            
        )
    }
}
export default Form;
            