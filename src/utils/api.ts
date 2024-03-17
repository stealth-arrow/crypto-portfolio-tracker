// utils/api.ts
import axios from 'axios';
import { Portfolio } from '../types/Portfolio';

const MOBULA_API_URL = 'https://api.mobula.io/api';

export const getPortfolioValue = async (walletAddress: string): Promise<Portfolio[]> => {
  try {
    console.log('walletaddress', walletAddress);
    // Example API call, replace with your actual API call to fetch portfolio value0xf50029a426957f93454374E5105Fd2B1c3205327
    const response = await axios.get(`https://api.mobula.io/api/1/wallet/portfolio?wallet=${walletAddress}`, {
      headers: {
        Authorization: 'Bearer 6bed3fc7-521c-4ab6-adf1-54cdc82a7929'
      }
    });
    // console.log("1111111",response.data.data);
    // console.log('123123',response.data.data.assets)
    return response.data.data.assets;
  } catch (error) {
    throw new Error('Error fetching portfolio value');
  }
};
