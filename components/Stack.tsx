import {
	CodeBracketSquareIcon,
	CommandLineIcon,
	RocketLaunchIcon,
} from '@heroicons/react/20/solid';
import React from 'react';

const Stack = () => {
	return (
		<div id='stack' className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
			<p className='heading'>
				My <span className='text-yellow-400'>Stack</span>
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
				<div data-aos='fade-right'>
					<div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] '>
						<CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
						<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
							Frontend
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal'>
							NextJs, React, TypeScript, JavaScript, Scss, TailwindCss, Css,
							Html
						</p>
					</div>
				</div>
				<div data-aos='fade-left' data-aos-delay='500'>
					<div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] '>
						<CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
						<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
							Backend
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal'>
							Python, NodeJs, Php 
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stack;
