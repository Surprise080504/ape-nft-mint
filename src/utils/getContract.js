/* eslint-disable import/prefer-default-export */
import Web3 from 'web3';

import contractWnD from '../contracts/contract.json';

import { WND_CONTRACT} from './constants';

export const getContractWnD = async (connector) => {
  if (!connector) throw Error('No connector found');
  const walletProvider = await connector.getProvider();
  const web3 = new Web3(walletProvider);

  const contractAbi = contractWnD.abi;

  const contractAddress = WND_CONTRACT;

  return  new web3.eth.Contract(contractAbi, contractAddress);
};
