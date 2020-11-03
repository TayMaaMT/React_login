import './index.css';
import {P} from '../fonts'
function Button(props) {
  const {color,backgroundColor,children,img,width,height,onsubmit}=props
  return (
  <button style={{color,backgroundColor,width,height}} onSubmit={onsubmit} ><div className="img">{img}</div><P  fontSize="16px" fontWeight="500" >{ children }</P></button>
  )

}

export default Button;
