import React from 'react';

const SuccessData_ = [
  {
    id: 1,
    score: '1000+',
    title: 'Premium Houses',
    line: '',
  },
  {
    id: 2,
    score: '1000+',
    title: 'Happy Customers',
    line: '',
  },
  {
    id: 3,
    score: '10+',
    title: 'Rewards',
    line: '',
  },
  {
    id: 4,
    score: '100+',
    title: 'Reliable Agents',
    line: null,
  },
];

const Success = () => {
  return (
    <ul className='flex sm:mt-4 md:-mt-12 lg:space-x-14 md:space-x-9 lg:justify-center lg:mx-auto '>
      {SuccessData_.map(item => (
        <li key={item.id} className='flex justify-center'>
          <div className='font-poppins flex sm:space-x-14 '>
            <div className='flex flex-col sm:space-y-5 mt-4 font-poppins'>
              <p className='lg:text-3xl md:text-xl font-semibold sm:p-0 p-2'>{item.score}</p>
              <p className='lg:text-3xl md:text-xl text-[#989898] sm:whitespace-nowrap sm:p-0 p-2'>{item.title}</p>
            </div>
            {item.line !== null && <div className='w-2px sm:h-114px bg-[#753FF6]'>{item.line}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Success;
