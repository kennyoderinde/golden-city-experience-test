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
    <div className=' lg:w-[92%] md:full mx-auto '>
        <div className='font-poppins text-center'>
            <p className='text-5xl text-[#753FF6] font-semibold'>Testimonials</p>
            <span className='text-4xl leading-loose'>What our clients have to say</span>
        </div>
        <div className='lg:-mt-4 md:-mt-20 mb-12 flex mx-auto md:w-full'>
            <ul className='md:w-full md:h-full md:flex mt-24 space-x-12 mb-12 p-4 mx-auto'>
            {TestimonialData_.map(value => (
                <li key={value.id}>
                <div className='w-auto h-full lg:px-5  border border-[#989898] rounded-md font-poppins flex flex-col'>
                    <p className='text-center lg:text-4xl text-3xl p-4 md:whitespace-nowrap font-medium'>{value.name}</p>
                    <span className='text-lg font-medium text-justify lg:p-8 md:p-4'>{value.text}</span>
                </div>
                </li>
            ))}
            </ul>
        </div>
            

        <div className='flex justify-end w-full ml-20 lg:mt-0 md:mt-20 '>
            <button className='w-180px h-50px rounded-lg bg-[#753ff6] text-22px text-white font-poppins flex justify-center items-center mr-116px mb-10'>View more</button>
        </div>
    </div>

    </>
  )
}

export default Testimonial