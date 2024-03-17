// types/Portfolio.ts
export interface Portfolio {
    allocation: number;
    asset: {
      logo: string,
      name: string,
      symbol: string
    };
    price: number;
    token_balance: number;  
}
  