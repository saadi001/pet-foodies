import React from 'react';
import aymanSadiq from '../../../../Asset/image/Ayman-Sadiq.jpg'

const KeynoteSpeaker = () => {
     return (
          <div id='keynotespeaker' className='md:my-20 my-12'>
               <p className='text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16'>Keynote Speakers</p>
               <div className='grid grid-cols-1 md:grid-cols-2 shadow-md relative rounded-md gap-0 sm:gap-3'>
                    <div>
                         <img className='w-full h-full object-cover rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md' src={aymanSadiq} alt="" />
                    </div>
                    <div className='p-3'>
                         <p className='text-lg md:text-2xl font-semibold'>Ayman Sadiq</p>
                         <p className='text-gray-500 text-sm mt-2 font-serif'>Founder & CEO, 10 Minute School <br />
                              Forbe's 30 Under 30 <br />
                              Queen's Young Leader <br />
                              Bestselling Author
                         </p>
                         <p className='mt-5 font-medium'>
                              Ayman Sadiq is a Bangladeshi education entrepreneur. He is the founder of Ten Minute School, an online educational institution. Ayman Sadiq has implemented this idea in the country where online learning and teaching is possible through his organization. Ayman Sadiq not only manages the Ten Minute School, but also serves as a teacher here.
                         </p>
                    </div>
                    {/* <div className='absolute top-0 bg-black/40 backdrop-blur-md bottom-0 w-full flex justify-center items-center text-xl font-semibold rounded-md text-white'>
                         Surprise!!!☺
                    </div> */}
               </div>

          </div>
     );
};

export default KeynoteSpeaker;