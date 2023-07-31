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
    <ul className='flex mt-60 space-x-14 justify-center '>
      {SuccessData_.map(item => (
        <li key={item.id} className='flex'>
          <div className='font-poppins flex space-x-14'>
            <div className='flex flex-col space-y-5 mt-4 font-poppins'>
              <p className='text-3xl font-semibold'>{item.score}</p>
              <p className='text-3xl text-[#989898]'>{item.title}</p>
            </div>
            {item.line !== null && <div className='w-2px h-114px bg-[#753FF6]'>{item.line}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Success;
