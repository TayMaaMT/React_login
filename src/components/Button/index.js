import './index.css';
import {P} from '../fonts'
function Button(props) {
  const {color,backgroundColor,children,img,width,height}=props
  return (
  <button style={{color,backgroundColor,width,height}} ><div className="img">{img}</div><P  fontSize="16px" fontWeight="500" >{ children }</P></button>
  )

}

export default Button;
