import React, { useState, useEffect } from 'react';

const VideoPlayer = ({all}:any) => {
   
   const tyring =() => {
       if(!all){
          return(
              <div>
                  <h1>Loading ....</h1>
              </div>
          )
       }
       else{
           return(
               <div>
                   <iframe height="400px" src={`https://www.youtube.com/embed/${all.id.videoId}`} className="player" />
                  <h1>{all.snippet.title}</h1>
                  <p>{all.snippet.description}</p>
               </div>
           )
       }
   }
   return (
       
          <div className="discription">
           {tyring()}
          </div>
        
    );
};

export default VideoPlayer;