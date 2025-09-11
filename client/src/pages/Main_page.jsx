import React from 'react'

const Main_page = () => {
  return (
    <div className='h-[330vh] w-full flex flex-col justify-start items-start'>
        
        {/* navbar */}
            <div className="h-[10vh] bg-white w-full fixed top-[0px] z-1 flex flex-row items-center justify-between pl-4 pr-4">

      <div className='w-[20%] h-[90%] bg-white flex flex-row items-center justify-center '>
        <div className='w-[14%] h-[90%] bg-[url("/re_logo.png")] bg-cover bg-center '>
         </div>
        <div>
          <h1 className='text-red font-bold text-[1.5rem] ml-4 '>Culture Lens</h1>
          <h1 className='text-red  text-[12px] ml-4 text-center'>About Sikkim Monasteries</h1>
        </div>
      </div>

     <div className='w-[50%] h-[90%] bg-white flex flex-row items-center justify-between'>
         <ul className='w-full h-[90%] bg-white flex flex-row items-center justify-evenly list-none text-[1.1rem]'>
            <li className='cursor-pointer'><a href="">Home</a></li>
            <li className='cursor-pointer'><a href="">Scanner</a></li>
            <li className='cursor-pointer'><a href="">Culture Calender</a></li>
            <li className='cursor-pointer'><a href="">Connect us</a></li>
         </ul>
     </div>
     <button className=' w-[10%] h-[60%] bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300 ease-in-out'>Visit</button>

            </div>
    

{/* main content */}
  <div className='w-full h-[100vh] bg-[url("/m1.jpg")] bg-cover bg-center relative'>
      <div className='w-[40vw] h-[50vh] absolute  top-[30%] left-[5%] flex flex-col items-start justify-center gap-4'>
        <h1 className='font-bold text-[2.5rem] w-[40vw]'>Explore Sikkim’s Monasteries from Anywhere</h1>
        <p className='text-[1.2rem] w-[40vw] text-white'>360° Virtual Tours, Audio Guides, and Cultural Heritage in One Place.</p>
        <button className='bg-yellow-300 w-[50%] h-[15%] text-[1.2rem] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300 ease-in-out'>Get Visit All</button>
      </div>
  </div>
  
{/* scanner */}
  <div className='w-full h-[90vh] bg-blue-300 flex flex-row items-center justify-evenly'>
      <div className='w-[60%] h-full  bg-cover bg-center relative '>
          <div className='w-[400px] h-[300px] bg-red-300 absolute top-[20%] left-[5%] rotate-340 border-20 border-solid border-green-300 rounded-[5px] bg-[url("/s1.jpg")] bg-cover bg-center'></div>
           <div className='w-[400px] h-[300px] bg-blue-300 absolute left-[20%] top-[15%] rotate-350 border-20 border-solid border-yellow-300 rounded-[5px] bg-[url("/s2.jpg")] bg-cover bg-center'></div>
            <div className='w-[400px] h-[300px] bg-pink-300 absolute left-[35%] top-[17%] rotate-10 border-20 border-solid border-pink-300 rounded-[5px] bg-[url("/s3.jpg")] bg-cover bg-center'></div>
             <div className='w-[400px] h-[300px] bg-green-300 absolute left-[50%] top-[20%] rotate-20 border-20 border-solid border-red-300 rounded-[5px] bg-[url("/s4.jpg")] bg-cover bg-center'></div>
             <div className='w-[500px] h-[600px]  absolute right-[30%] top-[9%] bg-[url("/sh1.png")] bg-cover bg-center'></div>
             <div className='w-[300px] h-[300px] bg-[url("/airplane.png")] bg-cover bg-center absolute left-[70%]  rotate-30'></div>
      </div>
      <div className='w-[40%] h-[90%] flex flex-col items-center justify-center gap-8'>
          <h1 className='text-[2rem] font-bold'>Scan Monasteries QR</h1>
          <div className='w-[50%] h-[50%]  relative'>
             <div className='w-[80px] h-[80px]  absolute top-0 left-0 border-t-10 border-l-10  border-yellow-300'></div>
             <div className='w-[80px] h-[80px]  absolute bottom-0 left-0 border-b-10 border-l-10  border-yellow-300'></div>
             <div className='w-[80px] h-[80px]  absolute top-0 right-0 border-t-10 border-r-10  border-yellow-300'></div>
             <div className='w-[80px] h-[80px]  absolute bottom-0 right-0 border-b-10 border-r-10  border-yellow-300'></div>
             <div className='absolute w-[260px] h-[260px] bg-[url("/frame.png")]  bg-cover bg-center top-4 left-6'></div>
             <hr className="w-80 h-2 bg-yellow-300 rounded-full  absolute top-[50%] right-[-15px] "/>

          </div>
          <div className='w-[80%] h-[15%] flex flex-row items-center justify-around'>
            <button className='w-[40%] h-[60%] bg-yellow-300 cursor-pointer rounded-[5px] text-[1.1rem]'>Scan Now</button>
            <button className='w-[40%] h-[60%] bg-white cursor-pointer rounded-[5px] text-[1.1rem]'>Upload QR Code</button>
          </div>
      </div>
  </div>


  <div className='w-full h-[90vh] bg-white flex flex-row items-center justify-evenly'>
    
    <div className='w-[40%] h-full  flex flex-col items-center justify-center gap-6'>
         <h1 className='text-[2rem] font-bold text-purple-600'>Event Calender</h1>
         <p className='w-[30vw] text-center mt-[-20px]'>The Cultural Calendar helps tourists and locals stay updated about monastery festivals, rituals, and events. It makes planning visits easier and promotes Sikkim’s cultural heritage.</p>
         <div className='w-[90%] h-[50%] bg-[url("/cal.jpg")] bg-cover bg-center'></div>
         <button className='w-[60%] h-[10%] bg-yellow-300 cursor-pointer rounded-[50px] text-[1.1rem]'>View More Events</button>
    </div>


    <div className='w-[70%] h-full  relative'>
      <div className='w-[40%] h-[35%] bg-[url("/e2.jpg")] bg-cover bg-center absolute top-[10%] border-10 border-solid border-green-300 rounded-[5px]'></div>
       <div className='w-[40%] h-[35%] bg-[url("/e1.jpg")] bg-cover bg-center absolute top-[60%] left-[60%] border-10 border-solid border-pink-300 rounded-[5px]'></div>
      <div className='w-[40%] h-[35%] bg-[url("/e3.jpg")] bg-cover bg-center absolute top-[35%] left-[30%] border-10 border-solid border-red-300 rounded-[5px]'></div>
       <div className='w-[40%] h-[35%] bg-[url("/e4.jpg")] bg-cover bg-center absolute top-[10%] left-[60%] border-10 border-solid border-yellow-300 rounded-[5px]'></div>
        <div className='w-[40%] h-[35%] bg-[url("/e5.jpg")] bg-cover bg-center absolute top-[60%] border-10 border-solid border-blue-300 rounded-[5px]'></div>
        {/* <div className='w-[60%] h-[60%] bg-[url("/event_img.png")] bg-cover bg-center absolute top-[40%] left-[0%] '></div> */}
    </div>
  </div>

  

  {/* footer */}
  <div className="h-[50vh] bg-blue-300 w-full flex flex-row items-center justify-evenly">

    <div className='w-[30%] h-[90%]  flex flex-col items-start justify-center gap-6'>
      <div className='w-[90%] h-[30%]  flex flex-row items-center justify-start bg-blue-300 gap-6'>
        <div className='w-[15%] h-[90%] bg-[url("/re_logo.png")] bg-cover bg-center'></div>
        <div>
          <h1 className='text-[1.7rem] font-bold'>CultureLens</h1>
          <p>About Sikkim monasteries</p>
        </div>
      </div>
      <div>
        <p className='text-[1.1rem]'>
          CultureLens is an app that lets you explore Sikkim’s monasteries from anywhere. It has 360° virtual tours, audio guides, an interactive map, digital archives, and a cultural calendar. This makes it easy for tourists and researchers to learn, plan, and experience the culture of Sikkim.
        </p>
      </div>
    </div>

    {/* websites */}
    <div className='w-[5%] h-[90%]  flex flex-col items-center justify-evenly'>
        <i className="text-[1.7rem] fa-brands fa-facebook"></i>
        <i className="text-[1.7rem] fa-brands fa-youtube"></i>
        <i className="text-[1.7rem] fa-brands fa-google"></i>
        <i className="text-[1.7rem] fa-brands fa-instagram"></i>
        <i className="text-[1.7rem] fa-brands fa-twitter"></i>
    </div>

{/* Links */}
    <div className='w-[20%] h-[70%]  flex flex-col items-start justify-evenly'>
      <h1 className='w-full text-center text-[1.7rem] font-bold'>CultureLens</h1>
        <ul className='w-full h-[70%] list-none  text-[1.2rem] flex flex-col items-start justify-evenly'>
          <li className='w-full cursor-pointer text-center'><a href="">Home</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">Scanner</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">Caltural Calendar</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">Contact Us</a></li>
        </ul>
    </div>
    <div className='w-[40%] h-[90%]  flex flex-col items-center justify-evenly'>
      <div className='w-[90%] h-[25%] flex flex-col items-start justify-center'>
        <label htmlFor="" className='text-[1.2rem]'>Email</label>
        <input className='w-full h-[60%] border-2 border-black rounded-[5px] pl-3 pt-2 pb-2' placeholder='Enter your email address' type="email" required />
      </div>
      <div className='w-[90%] h-[55%] flex flex-col items-start justify-center'>
        <label htmlFor="" className='text-[1.2rem]'>feedback</label>
        <textarea className='w-full h-[70%] border-2 border-black rounded-[5px] pl-3 pt-2'  placeholder='Write your feedback here... ' rows={5} cols={30} name="" id=""></textarea>
      </div>
      <button className='w-[90%] h-[15%] bg-yellow-300 cursor-pointer rounded-[5px] text-[1.1rem]'>Submit Feedback</button>
    </div>
  </div>

    </div>
  )
}

export default Main_page