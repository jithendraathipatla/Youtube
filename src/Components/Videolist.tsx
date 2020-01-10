import React,{useEffect} from 'react';
import ListItem from './Videoitem';


const Videolist = (props:any) => {
   
    useEffect(() => {
      
    }, [props.data])
    
    const seperatingoutindividually = () =>{
        if(props.data.length === 0){
            return(
                <div><h1>Please serch videos from the search menu</h1></div>
            )
            
        }
        else{
            return(
                props.data.map((item:any,i:any)=>{
                    return(
                        <div key={i}>
                            <ListItem title={item.snippet.title} des={item.snippet.description} image={item.snippet.thumbnails.medium.url} click={props.handeling} total={item}/>
                        </div>
                    )
                })
       );

        }    
         
    };


    return (
        console.log(props.data),
        <div className="videoitem">
           {seperatingoutindividually()}
         </div>
    );
};

export default Videolist;