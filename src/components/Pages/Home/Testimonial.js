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
    <div className=' w-[92%] mx-auto '>
        <div className='font-poppins text-center'>
            <p className='text-5xl text-[#753FF6] font-semibold'>Testimonials</p>
            <span className='text-4xl leading-loose'>What our clients have to say</span>
        </div>
        <div className='-mt-4 mb-12 max-w-[92.2rem] flex mx-auto'>
            <ul className='flex mt-24 space-x-16 mb-12'>
            {TestimonialData_.map(value => (
                <li key={value.id}>
                <div className='w-auto h-331px border border-[#989898] rounded-md font-poppins flex flex-col'>
                    <p className='text-center text-4xl p-4 font-medium'>{value.name}</p>
                    <span className='text-lg font-medium text-justify p-8'>{value.text}</span>
                </div>
                </li>
            ))}
            </ul>
        </div>
            

        <div className='flex justify-end w-full ml-20 '>
            <button className='w-180px h-50px rounded-lg bg-[#753ff6] text-22px text-white font-poppins flex justify-center items-center mr-116px mb-10'>View more</button>
        </div>
    </div>


    
    </>
  )
}

export default Testimonial