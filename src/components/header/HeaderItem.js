import React, {useState} from 'react';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedValue } from '../../reduxStorage/headerSlice';
import { NavLink } from 'react-router-dom';

export default function HeaderItem({title, href}) {
  const [hovered, setHovered] = useState(false)

  const {selectedValue} = useSelector(state => state.header)
  
  const dispatch = useDispatch()
  const onClick = () => dispatch(setSelectedValue(title))

  const hasSelected = selectedValue === title
  const backgroundColor = hasSelected ? '#338EEA' : (hovered ? '#2873bf': '#c8fa00')

  return (
    <NavLink 
      onMouseOver={() => setHovered(true)} 
      onMouseOut={() => setHovered(false)}
      className='header-item' 
      onClick={onClick} 
      style={{'background-color': backgroundColor, background: 'linear-gradient(rgba(255, 255, 255, 0.5), transparent)'}}
      to={href}
    >
      <h2>{title}</h2>
    </NavLink>
  
  )
}
