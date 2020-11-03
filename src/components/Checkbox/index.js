import {P} from '../fonts'
import './index.css'
function Checkbox(props){
    const  {children,value,onchange,name}=props;
    return(   
        <div id="label_check">
            <label  htmlFor="agree">
            <input name={name} checked={value} id="agree" type="checkbox" onChange={onchange}/>
            <span><P className="paragraph" color="#696F79" fontSize="16px" fontWeight="500" >{ children }</P></span>
            </label>
        </div>
    )
}

export default Checkbox;