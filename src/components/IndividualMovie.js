import axios from "axios"
import { useEffect,useState } from "react";
import Modal from 'react-modal';
import ReactLoading from 'react-loading';
import AOS from 'aos';
import "aos/dist/aos.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  function  IndividualMovie() {
      
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const[ data, setData]=useState();
      const[ loading, setLoading]=useState(true);

      useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json').then((res) =>{
            setLoading(false);
          if(res.status===200){
            setData(res.data.data);
          }
        })
      },[]);
      const [modalIsOpen, setIsOpen] = useState(false);
      const [currentMovie, setCurrentMovie] = useState();
      function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }
    
    
    return (
      <div className="App">
              {   
               loading?
         <div className="flex-centered" style={{width:'100vw',height:'80vh'}}>

              <ReactLoading type="spin" color="#fac12b" height={'40px'} width={'40px'} />
             </div>

              :
              ''
             }
            
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div >
          <h1>{currentMovie?.title}</h1>
          </div>
          <div style={{width:'30vw',
              lineHeight:'1.6rem'
        }}>
          <div >
           <b>Description:</b> { currentMovie?.description_full}
          </div>
          <b>Summary:</b> {currentMovie?.summary}
            <div>
                { currentMovie?.yt_trailer_code === '' ? <div class="red-text">Trailer not available</div> :
                 <><p><b>Trailer</b></p>
                 <iframe width="520" height="315" src={`https://www.youtube.com/embed/${currentMovie?.yt_trailer_code}`} 
                 title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></>  }
            </div>
          

          </div>
        </Modal>
          <div className="wrapper">
          <div style={{color:'#fff'}}>
         </div>
             {
              data?.movies?.map((movie,index)=>{
                return(
                  <div className="movielist"
                  key={index}
                  data-aos="zoom-in-up"
                  onClick={()=>{
                    setCurrentMovie(movie)
                    openModal()
                  }}  
                >
                    <div >
                     <img src={movie.medium_cover_image} alt=""/>
                    </div>
                 <div className="details">
                 < div className="title">
                      <b>{movie.title}</b>
                    </div>
                    < div className="year">
                        {movie.year} 
                    </div>
                    
                   </div>
                  </div>
                )   
              })
            } 
            </div>
             </div>        
    );
  }
 
export default IndividualMovie;