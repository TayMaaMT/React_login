import './index.css'
import {P} from '../fonts'
function Input(props){
    const {children,placeholder,type,value,onchange,name}=props;
        return(   
            <>
            <label to={type}><P color="#696F79" fontSize="16px" fontWeight="500" >{ children }</P></label>
            <input class="text" name={name} id={type} type={type} placeholder={placeholder} value={value} onChange={onchange}/>
            </>
        )
}

export default Input;