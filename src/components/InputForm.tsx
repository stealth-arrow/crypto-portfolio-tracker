// components/InputForm.tsx
import React, { useState } from 'react';

interface InputFormProps {
  onSubmit: (walletAddress: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(walletAddress);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Enter Wallet Address"
          className="border rounded-l px-4 py-2"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
