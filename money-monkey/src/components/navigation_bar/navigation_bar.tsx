import React, { FC } from 'react';

import './navigation_bar.css';

interface navigation_barProps {}

const navigation_bar: FC<navigation_barProps> = () => {
   return (
      <div className='center'>
         <div className='rectangle-box center'>
            <button onClick={() => console.log("HOME BUTTON")}><img src={'../../resources/Home.svg'} alt='Home Logo' className='nav-button' /></button>
            <button onClick={() => console.log("BUDGETS BUTTON")}><img src={'../../resources/Budget.svg'} alt='Budget Logo' className='nav-button' /></button>
            <button onClick={() => console.log("CHART BUTTON")}><img src={'../../resources/Charts.svg'} alt='Charts Logo' className='nav-button' /></button>
            <button onClick={() => console.log("SETTINGS BUTTON")}><img src={'../../resources/Settings.svg'} alt='Settings Logo' className='nav-button' /></button>
         </div>
         <div className='plus-button center'><button onClick={() => console.log("TRANSACTION BUTTON")}><img src={'../../resources/Transaction.svg'} alt='Transaction Logo' className='transact-button' /></button></div>
      </div>
   );
};

export default navigation_bar;
