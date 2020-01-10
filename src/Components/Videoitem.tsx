import React from 'react';

const Videoitem = (props:any) => {
    return (
        <div className="item" onClick={()=>props.click(props.total)}>
           <img src={props.image}/>
           <h1>{props.title}</h1>
           <p>{props.des}</p>
        </div>
    );
};

export default Videoitem;