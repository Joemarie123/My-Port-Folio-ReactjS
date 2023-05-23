

/* eslint-disable */
import React,{useState,useEffect} from 'react'
import data from '../../assets/data/portfolioData'



const Portfolio = () => {

        const [nextItems, setNextItems] = useState(6)
        const [portfolios, setPortfolios] = useState(data);
        const [selectTab, setSelectTab] = useState('all')


        const loadMoreHandler = () => {
                setNextItems(prev=> prev + 3)
        }

        useEffect(() => {

            if(selectTab==='all')
            {
                setPortfolios(data)
            }

            if(selectTab==='web-design'){
                const filteredData = data.filter(item=> item.category==='Web Design')
                setPortfolios(filteredData)
            }


            if(selectTab==='ux-design'){
                const filteredData = data.filter(item=> item.category==='Ux')
                setPortfolios(filteredData)
            }


        },[selectTab])


     


  return (
   <section id="portfolio">
    <div className="container">

        <div className="flex items-center justify-between flex-wrap">
            <div className="mb-7 sm:mb-0">
                <h3 className='text-headingColor text-[2rem] font-[700]'>My Recent Project</h3>
            </div>

            <div className="flex gap-3">
                <button onClick={()=>setSelectTab('all')} className="text-smallTextColor border border-solid boder-smallTextColor py-2 px-4 
                    rounded-[8px]
                ">All</button>
                <button onClick={()=>setSelectTab('web-design')} className="text-smallTextColor border border-solid boder-smallTextColor py-2 px-4 
                    rounded-[8px]
                ">Web Design</button>
    
                <button onClick={()=>setSelectTab('ux-design')} className="text-smallTextColor border border-solid boder-smallTextColor py-2 px-4 
                    rounded-[8px]
                ">UX Design</button>
             </div>

             
        </div>

        <div className="flex  items-center gap-4 flex-wrap  mt-12"> 
            { portfolios?.slice(0, nextItems)?.map((portfolio, index ) => (
                <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                
                className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] ">
                        <figure>
                            <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
                        </figure>

                        <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                                hidden group-hover:block
                        ">
                            <div className="w-full h-full flex items-center justify-center"> 
                            <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]" >See Details</button>

                            </div>
                            

                        </div>


                 </div>
                ))
            }
                   </div>

                <div className="text-center mt-6">

                       {
                        nextItems < portfolios.length && data.length > 6 && (
                        <button onClick={loadMoreHandler} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]" >Load More</button>

                        )}



              
                </div>




    </div>


   </section>
  )
}

export default Portfolio
