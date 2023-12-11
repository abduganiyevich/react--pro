import { useState } from 'react';
import './index.css'

export default function index(props) {
    
    const [open,setOpen]=useState(false);
    const {title,id,isRequired}=props;
    function handleOpen() {
        setOpen(!open);
    }
  return (
    <div className='drop-wrap'>
        <label htmlFor={id} className='input-label'>
            {title} &nbsp;

            {
                isRequired && <span>*</span>
            }
        </label>
        <div className="dropdown">
            <div className="drop-title" onClick={handleOpen}>
                <span>{title}</span>
            </div>
            
            {
                open &&<div className="drop-items">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            }
        </div>
    </div>
  )
}
