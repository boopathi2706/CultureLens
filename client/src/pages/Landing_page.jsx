import React from 'react'

const Landing_page = () => {
  return (
    <div className="h-[410vh] w-full flex flex-col justify-start items-start">

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
            <li className='cursor-pointer'><a href="">About Application</a></li>
            <li className='cursor-pointer'><a href="">Feature</a></li>
            <li className='cursor-pointer'><a href="">Sikkim map</a></li>
            <li className='cursor-pointer'><a href="">Contact us</a></li>
         </ul>
     </div>
     <button className=' w-[10%] h-[60%] bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300 ease-in-out'>Visit</button>

  </div>


{/* first secotion */}
  <div className="h-[100vh] bg-blue-300  w-full flex flex-row justify-center items-center">
     <div className='w-[50%] h-[90%] bg-blue-300 flex flex-col items-start justify-center pl-6'>
       <h1 className='text-[2.5rem] w-[40vw] font-bold' >Experience Sikkim’s Monasteries Like Never Before</h1>
       <p className='w-[40vw]'>Discover 200+ Monasteries through 360° Virtual Tours, Interactive Maps, and Digital Archives – Anytime, Anywhere.</p>
        <div className='w-[55%] h-[8%] flex flex-row items-center justify-between mt-4'>
          <button className='h-full w-[49%] rounded-[5px] bg-amber-500'>Start Your Virtual Tour</button>
          <button className='h-full w-[49%] rounded-[5px] bg-amber-600'>Explore Cultural Events</button>
        </div>
     </div>
     <div className='w-[50%] h-[90%] flex items-center justify-center '>
        <div className='w-[80%] h-[80%]  flex flex-col justify-center items-center relative'>

            {/* rings */}
            <div className='w-[450px] h-[450px] rounded-[50%] bg-[radial-gradient(circle,_#fcfcfc_4%,_#5cfcff_100%)] flex items-center justify-center'>
                <div className='w-[350px] h-[350px] rounded-[50%] bg-[radial-gradient(circle,_#5cfcff_4%,_#fcfcfc_100%)] flex items-center justify-center'>
                    <div className='w-[250px] h-[250px] rounded-[50%] bg-[radial-gradient(circle,_#fcfcfc_4%,_#5cfcff_100%)] flex items-center justify-center'>

                    </div>
                </div>
            </div>
           
           <div className='w-[370px] h-[480px] rounded-[50%] bg-[url("/main_image.png")] bg-cover bg-top  flex items-center justify-center absolute top-[1%]'></div>

           {/* circle */}
           <div className='w-[30px] h-[30px] rounded-[50%] bg-yellow-300 flex items-center justify-center absolute top-[12%] right-[25%]'></div>
           <div className='w-[50px] h-[50px] rounded-[50%] bg-white flex items-center justify-center absolute top-[23%] left-[14%]'>
            <i className="fa-solid fa-train-subway text-[1.5rem] text-blue-500"></i>
           </div>
           <div className='w-[130px] h-[35px] rounded-[10px] bg-white flex items-center justify-evenly absolute top-[22%] right-[4%] '>
            <i className="fa-solid fa-plane text-blue-500"></i>
            <h1 className='text-[14px]'>Come Sikkim</h1>
           </div>
           <div className='w-[200px] h-[170px] rounded-[10px] bg-white flex flex-col items-center justify-center absolute bottom-[-5%] left-[5%]'>
             <div className='w-[180px] h-[130px] rounded-[10px] bg-[url("/img1.jpg")] bg-cover bg-center'>
                    </div>
                    <h1>Tsomgo Lake</h1>
           </div>
           <div className='w-[150px] h-[120px] rounded-[10px] bg-white flex flex-col items-center justify-center absolute bottom-[14%] right-[-2%]'>
                    <div className='w-[130px] h-[80px] rounded-[10px] bg-red-100 bg-[url("/img2.jpg")] bg-cover bg-center'>
                    </div>
                    <h1>Yumthang Valley </h1>
           </div>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-yellow-300 flex items-center justify-center absolute bottom-[5%] right-[30%]'>

            </div>

        </div>

     </div>
  </div>




{/* second section */}

  <div className="h-[90vh]   w-full flex flex-row justify-center items-center">
    
     <div className='w-[50%] h-[90%] relative'>
            <div className='w-[350px] h-[80%] bg-red-300 absolute top-[10%] left-[20%] rotate-345 flex items-center justify-center rounded-[5px]'>
              <div className='w-[90%] h-[90%] bg-[url("/img4.jpg")] bg-cover bg-center'></div>
            </div>
             <div className='w-[350px] h-[80%] bg-blue-300 absolute top-[10%] left-[30%] rotate-360 flex items-center justify-center rounded-[5px]'>
                <div className='w-[90%] h-[90%] bg-[url("/img5.jpg")] bg-cover bg-center'></div>
             </div>
             <div className='w-[350px] h-[80%] bg-pink-300 absolute top-[11%] left-[40%] rotate-15 flex items-center justify-center rounded-[5px]'>
                <div className='w-[90%] h-[90%] bg-[url("/img3.jpg")] bg-cover bg-center'></div>
             </div>
     </div>
    <div className='w-[50%] h-[90%]  flex flex-col items-center justify-center gap-4 '>
        <h1 className='text-center text-[1.7rem] font-bold'>About CultureLens</h1>
         <p className='text-center text-[1.2rem] w-[44vw] mb-4'>
          CultureLens is a digital heritage platform that brings Sikkim’s centuries-old monasteries to life through immersive 360° virtual tours, interactive maps, and rich digital archives. Our goal is to make cultural treasures accessible to everyone, anytime, while preserving rare manuscripts, murals, and historical documents for future generations. With features like AI-powered search, cultural event calendars, and smart audio guides, CultureLens connects tourism, education, and technology to celebrate and protect Sikkim’s spiritual heritage.
         </p>
     </div>
  </div>



{/* feature */}
   <div className="h-[90vh] bg-blue-300 w-full flex flex-row justify-center items-center">
    <div className='w-[60%] h-[100%] bg-blue-300 flex flex-col items-end justify-center gap-10 bg-[url("/f_img.png")] bg-cover bg-center'>
        <div className='w-[30%] h-[10%] bg-white mr-[20%] rounded-[30px] flex flex-row items-center justify-evenly'>
             <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 flex items-center justify-center'>1</div>
             <h1 className='font-bold text-[1.2rem]'>360° Virtual Tours 🌐</h1>
        </div>
         <div className='w-[38%] h-[10%] bg-white mr-[10%] rounded-[30px] flex flex-row items-center justify-evenly'>
             <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 flex items-center justify-center'>2</div>
             <h1 className='font-bold text-[1.2rem]'>Narrated Walkthroughs 🎧</h1>
         </div>
          <div className='w-[30%] h-[10%] bg-white rounded-[30px] flex flex-row items-center justify-evenly'>
             <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 flex items-center justify-center'>3</div>
              <h1 className='font-bold text-[1.2rem]'>Interactive Map 🗺️</h1>
          </div>
           <div className='w-[30%] h-[10%] bg-white mr-[10%] rounded-[30px] flex flex-row items-center justify-evenly'>
               <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 flex items-center justify-center'>4</div>
               <h1 className='font-bold text-[1.2rem]'>Digital Archives 📜</h1>
           </div>
            <div className='w-[30%] h-[10%] bg-white mr-[20%] rounded-[30px] flex flex-row items-center justify-evenly'>
                 <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 flex items-center justify-center'>5</div>
                <h1 className='font-bold text-[1.2rem]'>Cultural Calendar 📅</h1>
            </div>
     </div>
     <div className='w-[40%] h-[100%]  flex flex-col justify-center items-center relative'>
         <div className='w-[550px] h-[550px] bg-[url("/earth.png")] bg-cover bg-top rounded-[50%]'></div>
         <div className='w-[550px] h-[450px] bg-[url("/earth_people.png")] bg-cover bg-top left-[0%] bottom-[0%]  absolute'></div>
           <div className='w-[250px] h-[140px] bg-[url("/airplane.png")] bg-cover bg-center absolute right-[20%] bottom-[75%] rotate-22'></div>
     </div>

  </div>


{/* map */}

   <div className="h-[90vh] bg-white w-full flex flex-row justify-center items-center ">
       <div className='w-[80%] h-[90%] bg-white  flex flex-col justify-center items-center relative'>
           <div className='w-[550px] h-[550px] bg-[url("/sikkim_map.png")] bg-cover bg-top rounded-[50%]'>
           </div>

           {/* location pin card */}
           <div className='w-[30%] h-[12%] bg-blue-300 absolute left-[2%] bottom-[60%] rounded-[5px] flex flex-row items-center justify-evenly'>
             <div className='w-[100px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
             <div className='w-[65%] h-[90%]  flex flex-col justify-evenly'>
                <h1 className='text-[1.2rem] font-bold'>Rumtek Monastery</h1>
                <p className='text-[12px]'>📍 Location: Gangtok, East Sikkim</p>
             </div>
           </div>
            <div className='w-[30%] h-[12%] bg-blue-300 absolute left-[10%] bottom-[15%] rounded-[5px] flex flex-row items-center justify-evenly'>
             <div className='w-[100px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
             <div className='w-[65%] h-[90%]  flex flex-col justify-evenly'>
                <h1 className='text-[1.2rem] font-bold'>Enchey Monastery</h1>
                <p className='text-[12px]'>📍 Location: Gangtok, East Sikkim</p>
             </div>
           </div>
           <div className='w-[30%] h-[12%] bg-blue-300 absolute right-[5%] top-[24%] rounded-[5px] flex flex-row items-center justify-evenly'>
            <div className='w-[100px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
             <div className='w-[65%] h-[90%]  flex flex-col'>
                <h1 className='text-[1.2rem] font-bold mb-0 mt-1'>Pemayangtse Monastery</h1>
                <p  className='text-[12px]'>📍 Location: Pelling, West Sikkim</p>
             </div>
           </div>
            <div className='w-[30%] h-[12%] bg-blue-300 absolute right-[10%] bottom-[20%] rounded-[5px] flex felx-row items-center justify-evenly'>
              <div className='w-[100px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
             <div className='w-[65%] h-[90%]  flex flex-col justify-evenly'>
                <h1 className='text-[1.2rem] font-bold mb-0 mt-1'> Tashiding Monastery</h1>
                <p  className='text-[12px]'>📍 Location: Near Yuksom, West Sikkim</p>
             </div>
            </div>


            {/* airplane */}
            <div className='w-[250px] h-[140px] bg-[url("/airplane.png")] bg-cover bg-center absolute right-[40%] bottom-[65%]'>
            </div>
        </div>



      <div className='w-[20%] h-[90%] bg-blue-300 rounded-[10px] flex flex-col items-center justify-center gap-4'>
        <h1 className='text-[1.7rem] font-bold '>Famous Monasteries</h1>

        <div className='w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center'>1</div>
          <div className='w-[60%] h-[90%] flex flex-col justify-evenly'>
            <h1 className='text-[1.1rem] font-bold'>Rumtek Monastery</h1>
            <p className='text-[12px]'>📍 Gangtok, East Sikkim</p>
          </div>
        </div>

        <div className='w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center'>2</div>
          <div className='w-[60%] h-[90%] flex flex-col justify-evenly'>
            <h1 className='text-[1.1rem] font-bold'>Dubdi Monastery</h1>
            <p className='text-[12px]'>📍 Location: Yuksom, Sikkim</p>
          </div>
        </div>

        <div className='w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center'>3</div>
          <div className='w-[70%] h-[90%] flex flex-col justify-evenly'>
            <h1 className='text-[1.1rem] font-bold'>Tashiding Monastery</h1>
            <p className='text-[12px]'>📍 Location: Near Yuksom, Sikkim</p>
          </div>
        </div>

        <div className='w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center'>4</div>
          <div className='w-[70%] h-[90%] flex flex-col justify-evenly'>
            <h1 className='text-[1.1rem] font-bold'>Enchey Monastery</h1>
            <p className='text-[12px]'>📍 Location: Gangtok, East Sikkim</p>
          </div>
        </div>

         <div className='w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center'>5</div>
          <div className='w-[70%] h-[90%] flex flex-col justify-evenly'>
            <h1 className='text-[1.1rem] font-bold'>Ralang Monastery</h1>
            <p className='text-[12px]'>📍 Location: Ravangla, Sikkim</p>
          </div>
        </div>

         <div className='w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center'>6</div>
          <div>
            <h1 className='text-[1.1rem] font-bold'>Phodong Monastery</h1>
            <p className='text-[12px]'>📍 Location: Phodong, North Sikkim</p>
          </div>
        </div>

         <p className='underline cursor-pointer'>view all</p>
        
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
    <div className='w-[20%] h-[90%]  flex flex-col items-start justify-evenly'>
      <h1 className='w-full text-center text-[1.7rem] font-bold'>CultureLens</h1>
        <ul className='w-full h-[70%] list-none  text-[1.2rem] flex flex-col items-start justify-evenly'>
          <li className='w-full cursor-pointer text-center'><a href="">Home</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">About Application</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">Feature</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">Sikkim map</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">Contact us</a></li>
          <li className='w-full cursor-pointer text-center'><a href="">Terms & Conditions</a></li>
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

export default Landing_page