import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import SearchBar from './Components/Searchbar';
import List from './Components/Videolist';
import VideoPlayer from './Components/VideoPlayer';
import Youtube from './API/Youtube';
const KEY = 'AIzaSyD_4dMcAT4ZKFoQ6xxy-P2_tMhjKJPZXIs';



const App = () =>{
    const [state, setstate] = useState();
    const [selectedvideo, setselectedvideo] = useState(null);
    const [response, setresponse] = useState([]);

     useEffect(() => {
     }, [state]);


    const handelSearch = (event:any) => {
        event.preventDefault();
        const submittedvalue = event.target.elements.search.value;
        setstate(submittedvalue);
        Youtube.get('/search/', {
            params:{
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: submittedvalue
            }
        }).then((res:any)=>{
            setresponse(res.data.items);
        }).catch((err)=>{
            console.log(err);
        });
    }
   
    const clickdesiredvideo = (video:any) =>{
         setselectedvideo(video);
    }

    return(
        <div className="mainlayout">
            <div style={{borderRight:"1px solid #242424", padding:"10px"}}> 
            <h3><strong>Important instructions</strong></h3>
            <h3>i) First search for the video you are looking for</h3>
            <h3>ii) After searching, clikc the video you would like to view</h3>
            <h3>iii) Then play the video</h3>
            
            </div>
            <div>
            <SearchBar search={handelSearch} value={state}/>
            <br/>
            <br/>
            <VideoPlayer all={selectedvideo}/>
            </div>
            <div>
                <List data={response} selected={setselectedvideo} handeling={clickdesiredvideo} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
