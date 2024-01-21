import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

import { starfish } from '../assets';

const ExperienceCard = ({experience}) => {
  return(
    <VerticalTimelineElement
      contentStyle={{ background: 'linear-gradient(90.13deg, #00cea8 1.9%, #316ae9 97.5%)', color: '#19456B'}}
      contentArrowStyle={{ borderRight: '7px solid #316ae9'}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold text-center">{experience.title}</h3>
        <p className="text-secondary text-[20px] font-semibold text-center" style={{ margin: 0 }}>{experience.company_name}</p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white text-[16px] pl-1 tracking-wider cursor-pointer hover:text-secondary"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  
  )
}

const Experience = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <VerticalTimeline className="mt-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
      
      <img src={starfish} alt="starfish" className="absolute top-[15%] right-1/4 w-[200px] h-[200px] z-[-1]"/>
      <img src={starfish} alt="starfish" className="absolute top-[35%] left-1/4 w-[200px] h-[200px] z-[-1]"/>
      <img src={starfish} alt="starfish" className="absolute top-[60%] right-1/4 w-[200px] h-[200px] z-[-1]"/>
      <img src={starfish} alt="starfish" className="absolute top-[85%] left-1/4 w-[200px] h-[200px] z-[-1]"/>
    </div>
  )
}

export default SectionWrapper(Experience, "");