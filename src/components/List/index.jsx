import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';

import './style.css';


function ListItems(props){
    
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="col list mb-1" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} onChange={
                                (e) => {
                                    props.updateItem(e.target.value, item.key)
                                }
                            }/>
                    <span> <FontAwesomeIcon className="text-danger" icon={faTrash} onClick={() => props.deleteItem(item.key)} /> </span>
                </p>
                
            </div>
        )
    });
    return(
        <div>
            <FlipMove durationn={250} easing="ease-in-out">
                { listItems }
            </FlipMove>
        </div>
    )
}

export default ListItems; 