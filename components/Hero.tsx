import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {
	return (
		<div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
			<Particle />
			<div className='w-[80%] grid grid-cols-1 mx-auto h-[100%] items-center'>
				<div className='flex justify-center items-center flex-col'>
					<h1 className='text-[35px] md:text-[50px] text-white font-bold'>
						AUSARE
					</h1>
					<TextEffect />
					<p className='mt-[2rem] text-[18px] text-[#ffffff92] text-center'>
						
					</p>
					<div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
						<button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
							<p>Download Cv</p>
							<ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
