import React from 'react';
import './Header.css';
import HeaderItem from './HeaderItem';
import { useSelector } from 'react-redux';

export default function Header() {
  const {allValues} = useSelector(state => state.header)

  return (
    <div className='header'>
      {
        Object.keys(allValues).map(
          k => <HeaderItem title={k} href={allValues[k]}/>
        )
      }
    </div>
  )
}