import React from 'react';

const RATES_TO_INR = {
  USD: 83.50,
  EUR: 90.20,
  GBP: 105.10,
  INR: 1.00
};

const CurrencyAmountInput = ({ amount, setAmount, currency, setCurrency }) => {
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const numericAmount = parseFloat(amount) || 0;
  const rate = RATES_TO_INR[currency] || 1;
  const convertedValue = numericAmount * rate;

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex items-stretch border border-[#E5E7EB] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#714B67]/20 transition-all bg-white">
          {/* Currency Selector */}
          <div className="bg-[#faf1f4] border-r border-[#E5E7EB] flex items-center px-5 min-w-[120px] relative">
            <select 
              value={currency}
              onChange={handleCurrencyChange}
              className="bg-transparent border-none text-[#714B67] font-bold focus:ring-0 cursor-pointer appearance-none pr-8 py-5 text-lg w-full"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
            <span className="material-symbols-outlined text-[#6B7280] absolute right-4 pointer-events-none">expand_more</span>
          </div>
          
          {/* Number Input */}
          <div className="flex-grow">
            <input 
              type="number" 
              value={amount}
              onChange={handleAmountChange}
              className="w-full py-5 px-8 text-right text-3xl font-mono font-bold text-[#1e1b1d] border-none focus:ring-0 placeholder:text-[#e0d8da] bg-transparent" 
              placeholder="0.00" 
            />
          </div>
        </div>
        
        {/* Conversion Subtitle */}
        <div className={`mt-4 px-1 flex justify-between items-center flex-wrap gap-2 transition-opacity duration-300 ${currency === 'INR' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-center gap-3">
            <span className="text-lg font-mono font-bold text-[#714B67] tracking-tight">
              ≈ ₹ {convertedValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} INR
            </span>
            <span className="px-2 py-0.5 bg-[#7cf2ee] text-[#006a68] text-[10px] font-bold rounded uppercase">
              Active Rate
            </span>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-[#6B7280] font-mono">
              1 {currency} = {rate.toFixed(2)} INR • Fixed Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyAmountInput;
