import './index.css';
import {P} from '../fonts'
import { Link } from 'react-router-dom';
function Back(props) {
  return (
    <div className="back_container">
      <div className="back">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z" fill="#8692A6"/>
      </svg>
      </div>
     
      <Link to="/"><P color="#8692A6" fontSize="16px" fontWeight="500" >Back</P></Link>
    </div>
   
    
  )
}

export default Back;
