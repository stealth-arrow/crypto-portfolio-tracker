// components/PortfolioTable.tsx
import React from 'react';
import { Portfolio } from '../types/Portfolio';

interface PortfolioTableProps {
  portfolio: Portfolio[];
}

const PortfolioTable: React.FC<PortfolioTableProps> = ({ portfolio }) => {

  console.log('00000', portfolio);
  for(let entry of portfolio) {
    // console.log(entry.allocation);
    console.log(entry.asset.logo);
    console.log(entry.asset.name);
    console.log(entry.asset.symbol);
    console.log(entry.price);
    console.log(entry.token_balance);

    // entry.allocation
  }
  let total = 0;

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-bold mb-4">Portfolio Value</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Coin</th>
            <th className="border px-4 py-2">Logo</th>
            <th className="border px-4 py-2">Symbol</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Balance</th>
            <th className="border px-4 py-2">Value (USD)</th>
          </tr>
        </thead>
        <tbody>        
          {portfolio.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.asset.name}</td>
              <td className="border px-4 py-2"><img width={50} height={50} src={item.asset.logo}/></td>
              <td className="border px-4 py-2">{item.asset.symbol}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">{item.token_balance}</td>
              <td className="border px-4 py-2">{item.token_balance * item.price}</td>
            </tr>          
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
