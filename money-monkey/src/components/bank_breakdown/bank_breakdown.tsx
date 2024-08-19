import React, { FC, ReactNode } from 'react';
import './bank_breakdown.css';


interface bank_breakdownProps {
  bankList: ReactNode[];
}

// receive a list of bank components
const bank_breakdown: FC<bank_breakdownProps> = ({bankList}) => (
  <div className='center'>
    <div className='bank-container center'>
      {bankList}
    </div>
  </div>
);

export default bank_breakdown;
