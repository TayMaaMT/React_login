import './index.css'
import {P} from '../fonts'
function Input(props){
    const {children,placeholder,type,value,onchange,name,borderColor,error}=props;
        return(   
            <div className="input">
            <label to={name}><P color="#696F79" fontSize="16px" fontWeight="500" >{ children }</P></label>
            <input style={{borderColor}} className="text" name={name} id={name} type={type} placeholder={placeholder} value={value} onChange={onchange}/>
            {error && <P color="red" fontSize="12px" >{error}</P>}
            </div>
        )
}

export default Input;