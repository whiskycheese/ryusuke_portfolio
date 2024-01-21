import {
  mobile,
  perfectPixel,
  english,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  sass,
  jquery,
  vuejs,
  firebase,
  asfit,
  australia,
  techA,
  ielove,
  kirameki,
  trainerAcademy,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer + 3D",
    icon: web,
  },
  {
    title: "React Vue Native",
    icon: mobile,
  },
  {
    title: "Perfect Pixel",
    icon: perfectPixel,
  },
  {
    title: "English Native",
    icon: english,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SCSS",
    icon: sass,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Personal Trainer (Manager)",
    company_name: "Asfit",
    icon: asfit,
    iconBg: "#383E56",
    date: "May 2020 - May 2023",
    points: [
      "Fastest and Youngest to be assigned as a manager in the company.",
      "Membership increased from 35 to 70 clients, a 200% increase.",
      "Sales increased from 1.5 million to 2.3 million, a 150% increase. ",
      "One of my clients became a champion at novice body building competition!",
      "All of my goals were achieved. I was about to be assigned to a general manager, but I wanted to challenge myself to new area of work.",
    ],
  },
  {
    title: "Learning by myself",
    company_name: "Australia",
    icon: australia,
    iconBg: "#E6DEDD",
    date: "May 2023 -",
    points: [
      "I decided to go to a working holiday in Australia so that I'll have more time to study to become a frontend engineer. My initial plan was to stay there for 1~2 years.",
      "Something unexpected happened. My girlfriend and I received a blessing of having a baby!",
      "That meant I had to come back to Japan. I still wanted to follow my dream of becoming a frontend engineer, so I didnt give up. I have been studying very hard everyday since.",
    ],
  },
  {
    title: "Frontend Engineer School",
    company_name: "Tech Academy",
    icon: techA,
    iconBg: "#383E56",
    date: "Sept 2023 - Nov 2023",
    points: [
      "I decided to go to a school, because I thought it was the quickest way of understanding what I needed to learn.",
      "Finished the curriculum 2 weeks early, passing every assignment given.",
      "Passed the Tech Academy Working Test (optional). If you pass you are given the opportunity to work on a case",
    ],
  },
  {
    title: "Actual Case",
    company_name: "Tech Academy Works",
    icon: techA,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - ",
    points: [
      "I was given a case. It was an actual case but an old one. I received money to make it, so there was resposibility.",
      "The evaluation of my work was A out of ABCD. It was pointed out that I made few slight mistakes but overall it was made perfect.",
      "I'm waiting for the next assignment at the moment.",
      "While I was waiting, I made this portfolio that's made with completely new skills that I didnt learn at school."
    ],
  },
];

const projects = [
  {
    name: "Tech Academy Works (case)",
    description:
      "An actual case that I received an evaluation of A. This case required me to create it in PERFECT PIXEL condition.",
    tags: [
      {
        name: "css",
      },
      {
        name: "javascript",
      },
      {
        name: "jquery",
      },
    ],
    image: ielove,
    source_code_link: "https://github.com/whiskycheese/case.git",
    border_radius: "rounded-[61% 58% 30% 38% / 41% 51% 64% 67%]",
  },
  {
    name: "Tech Academy Works (test)",
    description:
      "This is the test to get into Tech Academy Works. Only a few people can get into Tech Academy Works.",
    tags: [
      {
        name: "css",
      },
      {
        name: "javascript",
      },
      {
        name: "jquery",
      },
    ],
    image: kirameki,
    source_code_link: "https://github.com/whiskycheese/final.git",
    border_radius: "rounded-[61% 58% 30% 38% / 41% 51% 64% 67%]",
  },
  {
    name: "Portfolio 2023 (trainer academy)",
    description:
      "A website that gives online lectures about how to become a personal trainer. It has an authentication function.",
    tags: [
      {
        name: "vue",
      },
      {
        name: "firebase",
      },
      {
        name: "jquery",
      },
    ],
    image: trainerAcademy,
    source_code_link: "https://github.com/whiskycheese/trainer-academy.git",
    border_radius: "rounded-[61% 58% 30% 38% / 41% 51% 64% 67%]",
  },
];

export { services, technologies, experiences, projects };