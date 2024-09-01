import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {
	return (
		<div id='hero' className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
			<Particle />
			<div className='w-[80%] grid grid-cols-1 mx-auto h-[100%] items-center'>
				<div className='flex justify-center items-center flex-col'>
					<h1 className='text-[35px] md:text-[50px] text-white font-bold'>
						AUSARE
					</h1>
					<TextEffect />
				</div>
			</div>
		</div>
	);
};

export default Hero;
