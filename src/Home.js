
import React from 'react';
import './Home.css';
import SEC1BG from './Alldata/SEC1BG.jpg';
// import t3 from "./Alldata/t3.jpg";
import t2 from "./Alldata/t2.jpg";
import t4 from "./Alldata/t4.jpg";
import t1 from "./Alldata/t1.jpg";
import PIC1 from "./Alldata/PIC1.jpg";
import PIC2 from "./Alldata/PIC2.jpg";
import PIC3 from "./Alldata/PIC3.jpg";
import PIC4 from "./Alldata/PIC4.jpg";

function Home(){
    return (
      <div className='home'>
          <div className="container1">
            <img src={SEC1BG} alt="A Camrecorder" />
          </div>

        
          <h1 className="title">What We Do</h1>

          <div className='date1'>

            <div className='text2'>
             
               <div className='head1'>
                     <h1>01</h1>
                     <div className='fit1'>
                          <div className='hr2'></div> 
                          <div className='horizon1'></div>
                     </div>
                     <h2 > Marketing</h2> 
               </div> 
               <div className='graf'> 
                     <div className='vartic'>
                         <div className='vl1'></div>
                         <div className='vl2'></div>
                         <div className='vl3'></div>
                         <div className='vl4'></div>
                         <div className='vl5'></div>
                     </div> 
                    <div className='grid'>
                         <p> We are among leaders in Films Publicity and <br/>
                             Promotion in new emerging regional markets.</p>
                         <p> Our strategic and creative marketing solutions in <br/>
                             promoting the films have captured the imagination <br/>
                             of client's target audiences.</p>
                         <p> Our team of driven and talented youngsters in<br/>
                             marketing and creative, sparks brilliance and<br/>
                             Overcome the all obstructions in communication</p>
                     </div> 

               </div>  

            </div>

            <img  className="img2" src={t1} alt=""/> 

          </div>


          <div className='date2'>

             <img  className="img3"src={t2} alt=""/>

             <div className='text3'>

                 <div className='head2'>
                     <h1>02</h1>
                     <div className='fit3'>
                       <div className='hr3'></div> 
                       <div className='horizon2'></div>
                     </div>
                     <h2>  Digital Distribution</h2>
                 </div>

                 <div className='graf1'> 
                      <div className='vartic1'>
                          <div className='vl11'></div>
                          <div className='vl22'></div>
                          <div className='vl33'></div>
                          <div className='vl44'></div>
                          <div className='vl55'></div>
                      </div> 
                      <div className='grid1'>
                          <p> We bring quality content from production<br/>
                              ouses across markets straight to the<br/>
                              door steps of wide array of content <br/>
                              acquisitions companies and digital<br/>
                              platforms.</p>
                          <p> We offers consultancy service for acquiring <br/>
                              or selling rights of films, web series, songs<br/>
                              etc </p>                                          
                          <p> We avail options VOD, Satellite TV Rights<br/>
                              and IPTV Rights etc for content belonging to a <br/>
                              wide array of genres and formats</p>
                      </div> 
                 </div>

             </div>

          </div>


          <div className='date3'>

               <div className='text4'>

                   <div className='head3'>
                        <h1>03</h1>
                        <div className='fit4'>
                           <div className='hr4'></div> 
                           <div className='horizon3'></div>
                        </div>
                        <h2> Production</h2>
                   </div>
                   <div className='graf2'> 
                       <div className='vartic2'>
                           <div className='vl111'></div>
                           <div className='vl222'></div>
                       </div> 
                       <div className='grid2'>
                          <p>We create creative promotional content  & visual <br></br>
                             designs for Social Media, Digital and <br></br>
                             physical medium</p>
                   </div>
               </div>   

          </div>
<img className="img4" src={t4} alt=""/>
          </div> 

        <div className="container3">

          <h1 className="title2">Projects</h1>

          <div className="IMGS" style={{ display: "-ms-inline-grid" }}>

              <img src={PIC1} style={{ height: "400px", width: "50%"}} alt=""/>
              <img src={PIC2} style={{  height: "400px",  width: "50%"}} alt=""/>
              <img src={PIC3} style={{ margin: "-5px 0px 0px 0px", height: "400px",  width: "50%"}} alt="" />
              <img src={PIC4} style={{ margin: "-5px 0px 0px 0px", height: "400px", width: "50%"}} alt="" />
          </div>
        </div>

        
 
        
      </div>
    );

}
export default Home;