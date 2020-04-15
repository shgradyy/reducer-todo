import React from 'react';

const Todo = props => {
    return (
        <div>
        {props.items.map(item => {
            return (
                <p>{item}</p>
            )})}
        </div>
    )
}

export default Todo;
