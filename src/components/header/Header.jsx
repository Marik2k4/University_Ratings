import { Link } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

import BModal from '../Modals/BurgerModal/BurgerModal';

export default function Header() {

    // Меню 
    const [bmodal, setBModal] = useState({
        modal2: false,
    });

    return(
        <div className='header'>
 
            <div className='info'>
                <div className='contacts'>
                    <div className='email'>mark.sahar18@mail.ru</div>
                    <p>+7 123 456-78-90</p> 
                </div>

                {/* Меню */}
                
                <div className='menu' onClick={() => {setBModal({...bmodal, modal2: true})}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 

                {/* Модальное окнок телефонного меню */}
                <BModal 
                    isOpened={bmodal.modal2}
                    onModalClose={() => setBModal({...bmodal, modal2:false})}
                />
        
                <div className='log_in'>
               
                   <svg fill="#0f2e43" data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                        <g>
                            <path  d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                        </g>
                   </svg>

                   <Link className='regModal' to="/regModal">
                        <span >
                            Log In
                        </span>
                    </Link>

                </div>  
                
            </div>

            <hr></hr>

            <div className='downBlock'>

                <svg id="gov" preserveAspectRatio="xMidYMid meet" data-bbox="53.245 47.211 93.512 105.578" viewBox="53.245 47.211 93.512 105.578" height="80" width="80" xmlns="http://www.w3.org/2000/svg" data-type="tint" role="presentation" aria-hidden="true">
                    <Link className="link" to="/">
                        <g>
                            <path d="M100 47.211L53.245 79.502v10.287H61.5v7h4.104v36.003l6.376-10.255 6.417 10.647V96.789H82.5v-7h7v7h4.104v36.003l6.376-10.255 6.417 10.647V96.789h4.104v-7h7v7h4.104v36.003l6.376-10.255 6.417 10.647V96.789h4.104v-7h8.255V79.501L100 47.211zm-24.604 75.183l-3.376-5.603-3.417 5.495V96.789h6.793v25.605zM79.5 93.789h-15v-4h15v4zm23.896 28.605l-3.376-5.603-3.417 5.495V96.789h6.793v25.605zm4.104-28.605h-15v-4h15v4zm23.896 28.605l-3.376-5.603-3.417 5.495V96.789h6.793v25.605zm4.104-28.605h-15v-4h15v4zm8.255-7h-87.51v-5.713L100 50.856l43.755 30.219v5.714z" fill="#7B7B7B"></path>
                            <path d="M141.5 135.789h-83v7h-5v10h93v-10h-5v-7zm-80 3h77v4h-77v-4zm82 7v4h-87v-4h87z" fill="#7B7B7B"></path>
                            <path d="M93.5 72.289c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5-6.5 2.916-6.5 6.5zm10 0c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5z" fill="#7B7B7B"></path>
                        </g>
                    </Link>
                </svg>

                <div className='system'>
                   
                    <Link className="linkRate" to="/">
                        Рейтинги
                    </Link>
                        
                    <Link className="linkAboutSystem" to="/about">
                        О системе     
                    </Link>
                        
                    <Link className="link" to="/reg">
                        <button>Регистрация</button>
                    </Link>
                </div>
            
            </div>


        </div>
    )
}