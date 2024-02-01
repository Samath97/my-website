import React from 'react';

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Samath</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Machine Learning  and Artificial Intelligence Student</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>I am a Computer Science Masters degree student from Aalto University,
        focusing on Data Analysis, AI - Machine learning, full stack development, and Security Engineering. the ability to
        learn new skills and cooperate as a team member to achieve our goal is where I am at my best. Check out my{' '}
        <a
          href='https://www.linkedin.com/in/samath-lokuge/'
          target="_blank"
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-blue-600'
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>{' '}
        for more information.{' '}
      </p>

    </div>
  )
}

export default Intro;
