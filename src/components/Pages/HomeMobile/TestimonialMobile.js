import React from 'react'

const Testimonial = () => {

    const TestimonialData_ = [
        {
            id: 1,
            name: 'John Doe',
            text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
        },

        {
            id: 2,
            name: 'Helen White',
            text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
        },
        {
            id: 3,
            name: 'John Snow',
            text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
        },
    ]
  return (
    <>
    <div className=' w-full h-full flex flex-col justify-center mx-auto '>
        <div className='font-poppins text-center'>
            <p className='text-2xl text-[#753FF6] font-semibold'>Testimonials</p>
            <span className='text-xl leading-loose'>What our clients have to say</span>
        </div>
        <div className='-mt-4 mb-12 flex justify-center mx-auto'>
            <ul className='flex flex-col mt-6 mb-12'>
            {TestimonialData_.map(value => (
                <li key={value.id}>
                <div className='w-auto h-auto border border-[#989898] rounded-md font-poppins p-4 mt-4 flex flex-col'>
                    <p className='text-center text-xl p-4 font-medium'>{value.name}</p>
                    <span className='text-xs font-medium text-justify p-4'>{value.text}</span>
                </div>
                </li>
            ))}
            </ul>
        </div>
            

        <div className='flex  w-full -mt-14 '>
            <button className='w-180px h-50px rounded-lg bg-[#753ff6] text-22px text-white font-poppins flex justify-center items-center mr-116px mb-10'>View more</button>
        </div>
    </div>


    
    </>
  )
}

export default Testimonial