import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../shared/Navbar';
import Footer from './footer/footer';
import { scroller } from "react-scroll";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import DemoCarousel from './new-image-slider';
import Crafty from '../shared/images/Crafty & Chic.png'
import Millennial from '../shared/images/Millennial Exchange.png'
import Crypto from '../shared/images/Crypto-Nite.png'
import Brio from '../shared/images/Brio Bank.png'
import Wrecking from '../shared/images/Wrecking Ball.png'
import { Button, message, notification, Spin } from 'antd';
import { useWallet } from '../hooks/useWallet';
import { useWalletModal } from '../hooks/useWalletModal';
import  WalletModal  from './WalletModal/WalletModal';
import {getContractWnD} from '../utils/getContract';
import Web3 from 'web3';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
const ConnectButton = styled(Button)`
  width: 250px;
  display: block;
  margin: 20px auto;
  margin-top: 30vh;
  background-color: #6f1d1b;
`;

const Home =() => {
    const { active, account, connector, library } = useWallet();
    const { activate } = useWeb3React();
    const { toggleOpen } = useWalletModal();
    const [mint_count, setCount] = useState(1); 
    const [visible, setVisible] = useState(false);
    const mint_cost = 0.1;
    const miniString = (account) => {
        let upString = account.substring(0, 5);
        let downString = account.substr(account.length-4);
        return upString+ "......" + downString
    }
    const minusCount = (e) => {
        let count = mint_count;
        count--;
        if(count<=1) {
            setCount(1);
        }else {
            setCount(count);
        }
    }
    const plusCount = (e) => {
        let count = mint_count;
        count++;
        if(count>=20) {
            setCount(20);
        }else {
            setCount(count);
        }
    }

    const handleMint = async () => {
        if (mint_count === 0) {
          message.error('Please select exactly');
          return;
        }
        
        if(!account) return;
        try {
          const nftcontract = await getContractWnD(connector);
          let estimated_gas;
          let mintValue=0;
          let estimateValue = 0;
          let is_whitelisted= await nftcontract.methods.whitelisted(account).call();
          if(is_whitelisted){
                mintValue = 0;
          } else {
              mintValue = 0.1;
              estimateValue = Web3.utils.toWei((mint_count * mintValue).toString(),'ether');
          }
          console.log("iswhitelisted===>", is_whitelisted);
          await nftcontract.methods.mint(account, mint_count)
            .estimateGas({ from: account, to: '0xF6B97A199b1bd5b70Ff9c67BaFB04Fca0535DF59', value: estimateValue},
                function(error, gas){
                    if(error){
                        message.error("Not Enough Gas");
                        return;    
                    }
                    estimated_gas = gas;
                    console.log("estimatedgas===>", gas);
                } 
            );          
          await nftcontract.methods
            .mint(account, mint_count)
            .send({
              from: account,
              value: Web3.utils.toWei((mint_count * mintValue).toString(),'ether'),
              gas: estimated_gas
            })
            .on('transactionHash', async () => {
              
            })
            .on('receipt', async () => {
              //setLoading('');
              //setConfirming('Confirming...');
              notification.success({
                message: '',
                description: 'Mint success',
              });
              
            });
        } catch (err) {
          console.log(err)
          //handleError(err);
          //setLoading('');
        }
      };
    
    const showDisconnect = (e) => {
            setVisible(true);
    }
    
    const disconnectWallet = (e) => {
        setVisible(false);   
        activate(null);
        
      }

    const sayHello = (e)=>{
        console.log(e.target.innerHTML);
        let whereToScroll;
        if (e.target.innerHTML === 'WELCOME') {
            whereToScroll = "overview";
        }
        if (e.target.innerHTML === 'OVERVIEW') {
            whereToScroll = "welcome-back";
        }
        if (e.target.innerHTML === 'BUY AN APE') {
            whereToScroll = "buyAnApp";
        }
        if (e.target.innerHTML === 'TIMELINE') {
            whereToScroll = "roadMap";
        }
        if (e.target.innerHTML === 'TEAM') {
            whereToScroll = "Team";
        }
        if (e.target.innerHTML === 'HOW TO') {
            whereToScroll = "about";
        }
        scroller.scrollTo(whereToScroll, {
            duration: 800,
            delay: 0,
            block: "start",
            offset: -250,
            smooth: "easeInOutQuart",
        });
    }
        return (
            <>                      
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root">
                    <div className="app">
                         <div className="wallet-btn-section">
                            { active ? (
                            <>
                            <button   className="wallet-btn" onClick={showDisconnect}>{miniString(account)}</button>
                            {
                                visible ? (<div className="disconnect-section" onClick={disconnectWallet}>disconnect</div>) : ("")
                            }
                            
                            </>
                            
                            ) : (<button  onClick={toggleOpen} className="wallet-btn">Connect Wallet</button>)}                          
                        </div> 
                    <WalletModal />                   
                    <Navbar 
                        from="home"
                        whenClicked={sayHello}
                    />
                    <div>
                        <div style={{transition: 'opacity 400ms ease 0s, transform 400ms ease 0s', transform: 'none', opacity: '1'}} className="overview">
                        <div className="common-container">
                            <div className="mb-4 mb-lg-5 container">
                            <div className="row">
                                <div className="px-4 mt-md-4 container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-4 row">
                                                <div className="mb-4 col-lg-12 col-12">
                                                    <h2 className="common-title mb-3" style={{textAlign: 'center'}}>WELCOME TO<br />THE APES OFFICIAL</h2>
                                                    <p className="common-p mb-0" style={{textAlign: 'center'}}>Apes Official is a collection of 10,000 unique Ape NFT’s living on the Ethereum blockchain. Each Apes Official NFT is unique and programmatically generated. Your Apes Official NFT gives you access to our annual party where members can receive one of kind rewards, Apes Official private membership and a constant flow of new additions. Future areas and perks will be unlocked through our roadmap activation.</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="my-lg-auto col-lg-12 col-12">
                                                    <DemoCarousel />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="gray-line mb-5 mt-5"></hr>
                                    <div className="mb-5 row buyAnApp">
                                        <div className="col">
                                            <div id="buy-an-ape" className="buy-token-container mb-3 col-lg-12 col-12">
                                                <div className="bayc-bg mb-3 col-lg-12 col-12">
                                                    <h2 className="common-title mb-3 text-center">BUY AN APE</h2>
                                                </div>
                                                <div className="bayc-bg p-4 m-auto row">
                                                    <div className="m-auto col-lg-4 col-12 offset-lg-1">
                                                        <p className="common-p buy-an-ape-text mb-lg-0">Mint your NFT here for 0.1 ETH
                                                        </p>
                                                    </div>
                                                    <div className="m-auto col-lg-3 col-12 offset-lg-1">
                                                        {active ? (
                                                            <div className="mint-count-section mb-2">
                                                                <button className="circle-btn" onClick={minusCount}>-</button>
                                                                <span className="ml-2 mr-2">{mint_count}</span>
                                                                <button className="circle-btn" onClick={plusCount}>+</button>
                                                            </div>
                                                        ) : ''}
                                                        
                                                        {
                                                            active ? (<button className="bayc-button mint" type="button" onClick={handleMint}>
                                                             MINT
                                                            </button>) : (
                                                                <button className="bayc-button mint" type="button" onClick={toggleOpen}>
                                                                    Mint
                                                               </button>
                                                            )
                                                        }
                                                            
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="gray-line mb-5"></hr>
                                    <div className="mb-5 row about">
                                        <div className="col">
                                            <div className="common-container">
                                                <div className="row">
                                                    <div className="mb-3 col-lg-12 col-12">
                                                        <h2 className="common-title mb-3 text-center">HOW TO BUY AN APE</h2>
                                                        <div className="mb-3 mb-lg-1 row mt-5">
                                                            <div className="m-auto col-lg-one-half col-2 offset-lg-1 offset-1">
                                                                <p className="goal-1">⚪</p>
                                                            </div>
                                                            <div className="m-auto col-lg-11 col-10">
                                                                <p className="common-p">Create a MetaMask wallet and install the plug in on your browser, use <span><a className="link" href='https://metamask.io/download.html' target={'_blank'}>this link</a></span> to download and install it.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="m-auto col-lg-one-half col-2 offset-lg-1 offset-1">
                                                                <p className="goal-1">⚪</p>
                                                            </div>
                                                            <div className="m-auto col-lg-11 col-10">
                                                                <p className="common-p">Buy or Transfer Ethereum (ETH) on MetaMask.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="m-auto col-lg-one-half col-2 offset-lg-1 offset-1">
                                                                <p className="goal-1">⚪</p>
                                                            </div>
                                                            <div className="m-auto col-lg-11 col-10">
                                                                <p className="common-p">Go back to our website and select the number of NFTs from the drop-down and click on ‘mint’.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="m-auto col-lg-one-half col-2 offset-lg-1 offset-1">
                                                                <p className="goal-1">⚪</p>
                                                            </div>
                                                            <div className="m-auto col-lg-11 col-10">
                                                                <p className="common-p">Before you start minting your MetaMask wallet will pop up and show gas fees. Once you confirm the gas fees your NFT will be minted.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="gray-line mb-5"></hr>
                                    <div className="mb-5 row welcome-back">
                                        <div className="col">
                                            <div className="row">
                                                <div className="mb-3 col-lg-12 col-12">
                                                    <h2 className="common-title mb-3 text-center">OVERVIEW</h2>
                                                    <p className="common-p text-center">By purchasing an Apes Official NFT you solidify yourself into a club like no other. Your NFT will serve as a digital pass that will get you into the most exclusive NFT club and one of a kind rewards.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-12">
                                                <div className="common-container">
                                                    <div className="row">
                                                        <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12">
                                                        <div
                                                            className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                                                            <img className="img-fluid m-auto"
                                                                src="https://ik.imagekit.io/qjfqoijyda6e/Icons/10_000_Unique_S_tJibxcYCS.png?updatedAt=1639551882196"
                                                                alt="petrified monkey paw" width="100px" /></div>
                                                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                            <p className="mb-0 common-sub-p text-md-center text-center">10,000 unique NFT’s</p>
                                                        </div>
                                                        </div>
                                                        <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12 mobile-icon-margin"><div
                                                            className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                                                            <img className="img-fluid m-auto"
                                                                src="https://ik.imagekit.io/qjfqoijyda6e/Icons/Exclusive_Member_7TRw-3B-_.png?updatedAt=1639551882219"
                                                                alt="petrified monkey paw" width="100px" /></div>
                                                            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                                <p className="mb-0 common-sub-p text-md-center text-center">Exclusive membership</p>
                                                            </div>
                                                        </div>
                                                        <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12 mobile-icon-margin"><div
                                                            className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                                                            <img className="img-fluid m-auto"
                                                                src="https://ik.imagekit.io/qjfqoijyda6e/Icons/Full_Commercial_Rights_bGj5mbwKD.png?updatedAt=1639551882251"
                                                                alt="petrified monkey paw" width="100px" /></div>
                                                            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                                <p className="mb-0 common-sub-p text-md-center text-center">Full commercial usage rights of your NFT</p>
                                                            </div>
                                                        </div>
                                                        <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12 mobile-icon-margin"><div
                                                            className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                                                            <img className="img-fluid m-auto"
                                                                src="https://ik.imagekit.io/qjfqoijyda6e/Icons/All_apes_cost_TejJK3ZsE.png?updatedAt=1639551882058"
                                                                alt="petrified monkey paw" width="100px" /></div>
                                                            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                                <p className="mb-0 common-sub-p text-md-center text-center">All apes cost 0.10 ETH</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="gray-line mb-5"></hr>
                                    <div className="mb-5 row roadMap">
                                        <div className="col">
                                            <div id="roadmap" className="common-container">
                                                <div className="row">
                                                    <div className="col-lg-12 col-12">
                                                        <h2 className="common-title text-center">TIMELINE</h2>
                                                    </div>
                                                    <div className="col-lg-12 col-12">
                                                        <div className="shirt-container mx-auto mb-5 my-lg-auto col-lg-3 col-12 offset-lg-1 d-flex justify-content-center">
                                                            <img className="shirt-mask"
                                                            src={require('../shared/images/Apes Logo.png').default} alt="logo" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 mb-md-0 col-lg-6 col-12">
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="col-lg-1 col-2 offset-lg-1 offset-1">
                                                                <p className="goal">10%</p>
                                                            </div>
                                                            <div className="col-lg-10 col-9">
                                                                <p className="text-decoration-line-through common-sub-p">10,000 Apes programmatically generated and slowly but carefully entered the metaverse.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="col-lg-1 col-2 offset-lg-1 offset-1">
                                                                <p className="goal">25%</p>
                                                            </div>
                                                            <div className="col-lg-10 col-9">
                                                                <p className="common-sub-p">Pre-sale launch for our lucky members to get their hands on this one of a kind collection.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="col-lg-1 col-2 offset-lg-1 offset-1">
                                                                <p className="goal">50%</p>
                                                            </div>
                                                            <div className="col-lg-10 col-9">
                                                                <p className="common-sub-p">Apes Official NFT launch party (details will be added before official launch date).</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="col-lg-1 col-2 offset-lg-1 offset-1">
                                                                <p className="goal">75%</p>
                                                            </div>
                                                            <div className="col-lg-10 col-9">
                                                                <p className="common-sub-p">Official launch February 10th, 2022 at 5:00pm PST.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 mb-md-0 col-lg-6 col-12">
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="col-lg-1 col-2 offset-lg-1 offset-1">
                                                                <p className="goal">90%</p>
                                                            </div>
                                                            <div className="col-lg-10 col-9">
                                                                <p className="common-sub-p">Member exclusive merch will be posted on our site and limited edition tees will be sent to all holders.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="col-lg-1 col-2 offset-lg-1 offset-1">
                                                                <p className="goal">100%</p>
                                                            </div>
                                                            <div className="col-lg-10 col-9">
                                                                <p className="common-sub-p">Season 2 launch. Season 1 holders will have priority minting.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 mb-lg-1 row">
                                                            <div className="col-lg-1 col-2 offset-lg-1 offset-1">
                                                                <p className="goal">110%</p>
                                                            </div>
                                                            <div className="col-lg-10 col-9">
                                                                <p className="common-sub-p">To Be Continued…</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="gray-line mb-5"></hr>
                                    <div className="mb-5 row Team" style={{scrollMarginTop: '100px'}}>
                                        <div className="col">
                                            <div id="team" className="common-container">
                                                <div className="row">
                                                    <div className="mb-3 col-lg-12 col-12 text-center">
                                                        <h2 className="common-title mb-3">THE TEAM</h2>
                                                        <p className="common-p text-center">The Apes Official started in a small office with three buddies and one amazing artist.</p>
                                                    </div> 
                                                    <div className="col-lg-12 col-12">
                                                        <div className="common-container">
                                                            <div className="row">
                                                                <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12"><img className="img-fluid mb-3 margin-top-mobile"
                                                                    src={'https://ik.imagekit.io/qjfqoijyda6e/Apes/Crafty___Chic_SeIZoCqH9.png?updatedAt=1639551936062'}
                                                                    alt="garga" aria-label="garga" />
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1 text-center">
                                                                        <h5 className="mb-0 text-md-center bold-text">Crafty &amp; Chic</h5>
                                                                    </div>
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                                        <p className="mb-0 text-md-center common-p text-center">The Patient Artist</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12"><img className="img-fluid mb-3 margin-top-mobile"
                                                                    src={'https://ik.imagekit.io/qjfqoijyda6e/Apes/Millennial_Exchange_QcidPT0cMoi.png?updatedAt=1639551934259'}
                                                                    alt="gordy" aria-label="gordy" />
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1 text-center">
                                                                        <h5 className="mb-0 text-md-center bold-text">Millennial Exchange</h5>
                                                                    </div>
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                                        <p className="mb-0 text-md-center common-p text-center">Smooth &amp; Sassy</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12"><img className="img-fluid mb-3 margin-top-mobile"
                                                                    src={'https://ik.imagekit.io/qjfqoijyda6e/Apes/Crypto-Nite_ppdtAlf6L.png?updatedAt=1639551934317'}
                                                                    alt="tomato" aria-label="tomato" />
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1 text-center">
                                                                        <h5 className="mb-0 text-md-center bold-text ">Crypto-Nite</h5>
                                                                    </div>
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                                        <p className="mb-0 text-md-center common-p text-center">The Nerdy Assassin</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pb-2 pr-2 col-lg-3 col-md-3 col-12"><img className="img-fluid mb-3 margin-top-mobile"
                                                                    src={'https://ik.imagekit.io/qjfqoijyda6e/Apes/Wrecking_Ball_t8Dy3HNSY.png?updatedAt=1639551933378'}
                                                                    alt="garga" aria-label="garga" />
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0">
                                                                        <h5 className="mb-0 text-md-center bold-text offset-1 text-center">Wrecking Ball</h5>
                                                                    </div>
                                                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                                                        <p className="mb-0 text-md-center common-p offset-1 text-center">Bold &amp; Rough</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="mb-5 row">
                                        <div className="col">
                                            <div className="d-flex justify-content-center">
                                                <p className="common-p text-center text-break mb-0"><span className="bold-text">VERIFIED
                                                        SMART CONTRACT ADDRESS: </span><a
                                                        title="0xF6B97A199b1bd5b70Ff9c67BaFB04Fca0535DF59"
                                                        target="_blank"
                                                        href="https://etherscan.io/address/0xF6B97A199b1bd5b70Ff9c67BaFB04Fca0535DF59"
                                                        className="link">0xF6B97A199b1bd5b70Ff9c67BaFB04Fca0535DF59</a></p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <Footer />
                    </div>
                </div>
            </body>
            
            </>
        );
    
}

export default Home;
