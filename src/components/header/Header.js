import React from 'react';
import './Header.css';
import HeaderItem from './HeaderItem';
import { useSelector } from 'react-redux/es/exports';

export default function Header() {
  const {allValues} = useSelector(state => state.header)
  return (
    <div className='header'>
      {allValues.map(item => <HeaderItem title={item}/>)}
    </div>
  )
}