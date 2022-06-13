import React, {useState} from 'react'
import './section.css'
import Highlight from './carHighlight'
const Section = () => {
       
            const [Carinfo, setCarInfo] = useState(Highlight)
                Highlight.map((index)=>{
                    const {id,title,description,image} = index
                    return(
                        <section className="section-container w-screen h-screen relative">
                            <img src="../images/model-s.jpg" alt="Model-s" className='h-full w-full' />
                             <div className="item-text absolute mx-auto top-0 left-0 right-0 flex flex-col justify-center items-center mt-20 text-center" >
                                 <h1 className="Heading">
                                    {title}
                                 </h1>
                                <p className='sub-heading w-full'>{description}</p>
                             </div>
                             <div className="btn-group absolute bottom-0 left-0 right-0 flex justify-center items-center  mb-20 gap-5 uppercase ">
                                <div className="left-btn">
                                    <button>Custom Order</button>
                                 </div>
                                 <div className="right-btn">Exisiting Inventory</div>
                                </div>
                             <div className="down-arrow absolute bottom-0 left-0 right-0 flex justify-center items-center flex-col  gap-5">
                                 <img src="../images/down-arrow.svg" alt="Arrow" className='w-10 h-10'/>
                             </div>
                        </section>  
                    )
                })
            
        
}

export default Section
// return ({
//     carinfo.map((index) => {
//         const {id,title,description,image}
//     })
// //   })

{/* <section className="section-container w-screen h-screen relative">
        <img src="../images/model-s.jpg" alt="Model-s" className='h-full w-full' />
        <div className="item-text absolute mx-auto top-0 left-0 right-0 flex flex-col justify-center items-center mt-20 text-center" >
            <h1 className="Heading">
                Model-S
            </h1>
            <p className='sub-heading w-full'>Order Online for Touchless Delivery</p>
        </div>
        <div className="btn-group absolute bottom-0 left-0 right-0 flex justify-center items-center  mb-20 gap-5 uppercase ">
            <div className="left-btn">
                <button>Custom Order</button>
            </div>
            <div className="right-btn">Exisiting Inventory</div>
        </div>
            <div className="down-arrow absolute bottom-0 left-0 right-0 flex justify-center items-center flex-col  gap-5">
                <img src="../images/down-arrow.svg" alt="Arrow" className='w-10 h-10'/>
            </div>
</section> */}