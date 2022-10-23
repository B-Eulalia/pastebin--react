import React from 'react';

export default function List(props) {
    const lista = props.list;
    if (lista !== undefined) {
        const listItems = lista.map(function(element) {
            return (
            <div>
                <br/>
                <div className='doc'>
                    <lu> Name user:
                        <div style={{ color: 'red' }}>{element.user}</div>
                     </lu>
                     <br/>
                    <lu>
                        <div> Data: {element.data} / {element.time}</div>
                    </lu>
                    <br/>
                    <lu> Title:
                        <div style={{ color: 'blue' }}>{element.title}</div>
                    </lu>
                    <br/>
                    <lu> Content:
                        <div style={{ color: 'blue' }}>{element.content}</div>
                    </lu>
                </div>
                <br></br>
            </div>
        );
    },);
    
    return (
    <div>
        <h2>List of projects</h2>
        {listItems}
    </div>
    )
} 
}

