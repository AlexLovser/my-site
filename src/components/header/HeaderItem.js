import React, {useState} from 'react';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedValue } from '../../reduxStorage/mainSlice';


export default function HeaderItem({title}) {
  const [hovered, setHovered] = useState(false)

  const {selectedValue} = useSelector(state => state.header)
  
  const dispatch = useDispatch()
  const onClick = () => dispatch(setSelectedValue(title))

  const hasSelected = selectedValue === title
  const backgroundColor = hasSelected ? 'green' : (hovered ? 'yellow': 'purple')

  return (
    <div 
      onMouseOver={() => setHovered(true)} 
      onMouseOut={() => setHovered(false)}
      className='header-item' 
      onClick={onClick} 
      style={{backgroundColor}}
    >
      <h2>{title}</h2>
    </div>
  )
}
