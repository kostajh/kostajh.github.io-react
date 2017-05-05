import React from 'react';
import Logo from '../logo.jpg';
import Tagline from './Tagline';

export default () => (
    <header className='tc pv4 pv5-ns'>
    <img src={Logo} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
    <h1 className='f5 f4-ns fw6 mid-gray'>Kosta Harlan</h1>
    <Tagline />
    </header>
)
