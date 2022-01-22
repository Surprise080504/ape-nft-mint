import { useContext } from 'react';
import { IWalletModalContext, WalletModalContext } from '../context/WalletModalContext';

export const useWalletModal = () => {
  return useContext(WalletModalContext);
};
