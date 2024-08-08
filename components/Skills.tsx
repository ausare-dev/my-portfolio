import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
	return (
		<div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
			<h1 className='heading'>
				Education & <span className='text-yellow-400'>Skills</span>
			</h1>
			<div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
				<div>
					<SkillsItem title='React Developer' year='2014 - now' />
					<SkillsItem title='Next Js Developer' year='2014 - now' />
					<SkillsLanguage
						skill1='html'
						skill2='css'
						skill3='javascript'
						level1='w-[93%]'
						level2='w-[80%]'
						level3='w-[90%]'
					/>
				</div>
				<div>
					<SkillsItem title='Vue Js Developer' year='2014 - now' />
					<SkillsItem title='Node Js Developer' year='2014 - now' />
					<SkillsLanguage
						skill1='html'
						skill2='css'
						skill3='javascript'
						level1='w-[93%]'
						level2='w-[80%]'
						level3='w-[90%]'
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
