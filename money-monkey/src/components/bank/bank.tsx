import React, { FC } from 'react';

interface BankProps {
  bankName: string;
  bankColor: string;
  bankBalance: number;
}

const Bank: FC<BankProps> = ({bankName, bankColor, bankBalance}) => (
  <div className='bank'>
    <div className='bank-name' style={{background: bankColor}}><p>{bankName}</p></div>
    <div className='bank-total'>{bankBalance}</div>
  </div>
);

export default Bank;
