import React from 'react';
function List(props) {
    return (
        <ul>
            {props.list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}
export default List;