import {
	AtSymbolIcon,
	DevicePhoneMobileIcon,
	EnvelopeIcon,
} from '@heroicons/react/20/solid';
import React from 'react';

const Footer = () => {
	return (
		<div id='contact' className='pt-[8rem] pb-[4rem] bg-[#02050a] '>
			<div className='flex border-b-[1px] pb-[6rem] border-gray-400 items-center w-[80%] mx-auto justify-center'>
				<div>
					<a href='https://t.me/ausare' className='flex items-center space-x-6'>
						<div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
							<AtSymbolIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
						</div>
						<div>
							<h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
								Telegram
							</h1>
							<p className='text-[17px] w-[90%] text-white opacity-60'>
								@ausare
							</p>
						</div>
					</a>
				</div>
				{/* <div className='flex items-center space-x-6'>
					<div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
						<DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
					</div>
					<div>
						<h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
							Phone
						</h1>
						<p className='text-[17px] w-[90%] text-white opacity-60'>
							+79998887766 <br />
							+79998887766
						</p>
					</div>
				</div>
				<div className='flex items-center space-x-6'>
					<div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
						<EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
					</div>
					<div>
						<h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
							Send Us Email
						</h1>
						<p className='text-[17px] w-[90%] text-white opacity-60'>
							example.com <br />
							example@example.com
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Footer;
