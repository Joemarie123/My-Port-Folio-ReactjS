
import React from 'react'

const Contact = () => {
  return ( <section id="contact" className='pb-16'>

    <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in Touch</h2>
        <div className='md:flex justify-between items-center'>
    <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
    <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53207.05448019011!2d125.74555057154275!3d7.614312436873446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32feaf9555555555%3A0xd6c895dab38762dc!2sMagatos%20Elementary%20School!5e0!3m2!1sen!2sph!4v1686793038802!5m2!1sen!2sph"
     className='border-0 w-full h-full'    allowfullScreen="" 
    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    
        <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4
        lg:px-8 py-8">
            <form className="w-full">
                <div className="mb-5">
                    <input type="text" placeholder="Enter Your Name" className="w-full p-3 focus:outline-none
                    rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <input type="email" placeholder="Enter Your Email" className="w-full p-3 focus:outline-none
                    rounded-[5px]" />
                </div> 
                <div className="mb-5">
                    <input type="text" placeholder="Subject" className="w-full p-3 focus:outline-none
                    rounded-[5px]" />
                </div>
                
                <div className="mb-5">
                    <textarea 
                    type="text" 
                    rows={3}
                    placeholder="Write Your Message" 
                    className="w-full p-3 focus:outline-none
                    rounded-[5px]" />
                </div>

                <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
                hover:bg-headingColor text-center ease-linear duration-150">
                    Send Message
                </button>

            </form>

        </div>


        </div>
    </div>
  </section>
    
  )
}

export default Contact
