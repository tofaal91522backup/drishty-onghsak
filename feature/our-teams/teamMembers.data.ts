export type TeamCardProps = {
  motto: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  linkedin?: string;
  right?: boolean;
};
export const teamMembers: TeamCardProps[] = [
  // {
  //   motto:
  //     "Opening Eyes can create Connection, Opportunity & Peace. We are on a mission to open Millions of Eyes.",
  //   name: "Erad Kawsar",
  //   designation: "Chairman",
  //   description:
  //     "Erad Kawsar, a seasoned professional with over 15 years of experience in both local and international organizations. As the Country Director of YGAP Bangladesh, Erad Kawsar oversees a diverse portfolio of 100+ startups, with a notable 48% led by women co-founders. Recognized for expertise in impact investment, Erad Kawsar was a keynote speaker at SAID Business School, University of Oxford in 2021. Under his guidance, YGAP Bangladesh achieved recognition as the best accelerator program in South Asia. Erad Kawsar has facilitated startups in raising a total of USD 2.5 million in local investments, offering strategic insights into brand, marketing, and investment readiness. With a keen interest in history and global economics, Erad identifies key trends including water, refugees, the rise of Asian startups, and global peace efforts.",
  //   image: "./images/our-teams/erad.png",
  //   linkedin: "https://www.linkedin.com/in/eradkawsar/",
  //   right: true,
  // },
  {
    motto: "We've started Drishti to eradicate Blindness as a Barrier",
    name: "Md. Ridwan Hossain",
    designation: "Chief Executive Officer",
    description:
      "Md. Ridwan Hossain, an entrepreneur and Co-Founder of Drishti. Passionate about crafting affordable assistive tech for visually impaired individuals and fostering gig-based opportunities for young developers. Ridwan won R-Venture 3.0, an investment platform organized by Robi. His notable achievements include the Award of Merit in the International Blockchain Olympiad, 2020 (Hong Kong), and Finalist at the NASA Human Exploration and Rover Challenge, 2019 (USA). At Drishti, he champions inclusivity through innovative tech solutions, aiming to enhance lives and communities.",
    image: "./images/our-teams/ridwan.png",
    linkedin: "https://www.linkedin.com/in/mdridwanhossain/",
    right: false,
  },
  {
    motto: "We are working to build a better world for the visually impaired, one product at a time",
    name: "Md Al Amin Ashik",
    designation: "Electronics Engineer",
    description:
      "Md Al Amin Ashik is an aspiring electronics engineer with a strong passion for designing and building electronic circuits from the ground up. He is currently working as a senior embedded systems engineer at drishti. He completed his B.Sc. in Electrical and Electronic Engineering (EEE) and has since been dedicated to developing innovative projects that merge hardware and software technologies. Ashik is also a content creator, sharing his projects and tutorials on platforms such as Instructables to educate and inspire fellow tech enthusiasts. Throughout his academic journey, he stood champion in all the science fair in high school. His technical expertise includes circuit simulation, C++ programming, computer vision, and machine learning, along with advanced proficiency in PCB design and fabrication — from schematic development to hand-building complex circuit boards with precision.",
    image: "./images/our-teams/ashik.png",
    linkedin: "https://www.linkedin.com/in/al-amin-ashik/",
    right: false,
  },

  {
    motto: "Our goal is to make it bright even without any light",
    name: "ANM Noor",
    designation: "3D Model Designer",
    description:
      "ANM Noor, a proficient 3D Model Designer at Drishti, specializing in 3D Modeling, Rendering, Robotics, and Competitive Programming. With a keen interest in felines, Noor is a dedicated cat lover. His exceptional skills were recognized when he clinched the Gold Medal at the World Robotics Olympiad, 2023 (National Round). Noor's expertise in crafting intricate 3D models demonstrates his invaluable contribution to Drishti's innovative projects. Passionate and dedicated, he continues to shape the technological landscape through cutting-edge designs and creative brilliance.",
    image: "./images/our-teams/noor.png",
    linkedin: "https://www.linkedin.com/in/noor202012/",
    right: false,
  },
  // {
  //   motto:
  //     "We are working to build a better world for the visually impaired, one product at a time",
  //   name: "Iqbal Samin Prithul",
  //   designation: "Product Specialist",
  //   description:
  //     "Iqbal Samin Prithul, an aspiring engineer and dedicated maker fueled by a profound passion for 3D printing, electronics, and robotics. With a talent for project creation and a desire to share knowledge within the community, Iqbal began his electronics journey through Arduino projects, ultimately culminating in the construction of his very own 3D printer. Currently studying Electro-mechanical Technology in the U.S. through the Department of State Community College Initiative (CCI) scholarship program, he seizes the opportunity to immerse himself in this field for a year. This program not only focuses on academic growth but also encourages cultural exchange and community involvement through volunteering and internship experiences. Iqbal holds the role of R&D Specialist at Drishti, bringing his innovative ideas to life. Noteworthy achievements include clinching the Bronze medal at the World Robotics Olympiad in 2022 (Germany) and contributing to the development of an automated cooking bot in a US-based company.",
  //   image: "./images/our-teams/prithul.png",
  //   linkedin: "https://www.linkedin.com/in/prithul0218/",
  //   right: true,
  // },
  {
    motto:
      "Empowering Vision Through Innovation, We Illuminate Lives with Technology's Light",
    name: "Saleh Sadiq Tanim",
    designation: "Machine Learning Engineer",
    description:
      "Saleh Sadiq Tanim, a dedicated Machine Learning Engineer at Drishti, boasts a strong passion for programming and a rich skill set encompassing Python, JavaScript, C++, and Linux Operating Systems. With over 4 years of hands-on experience, Saleh has spearheaded numerous projects, showcasing proficiency in Python GUI frameworks such as Kivy, Tkinter, and PyWebView, as well as Backend technologies including Django and Flask. His repertoire extends to ReactJS, OpenCV, microcontrollers, and the Godot Game Engine. Always eager to craft new software, and websites, and explore technologies, Saleh's enthusiasm lies in pushing boundaries and experimenting with microcontrollers.",
    image: "./images/our-teams/tanim.png",
    linkedin: "https://www.linkedin.com/in/tanim-sk-04b9931b3/",
    right: true,
  },
  {
    motto: "We've started Drishti to eradicate Blindness from the World",
    name: "Dr. Nova Ahmed",
    designation: "Technology Advisor",
    description:
      "Dr. Nova Ahmed, our esteemed Technology Advisor at Drishti, is a distinguished professor in the ECE Department at North South University. A dedicated researcher, Dr. Ahmed specializes in human-centered computing, with a strong affinity for qualitative research methodologies. Driven by a profound passion for social justice, she actively engages in causes that impact women. Dr. Nova Ahmed's guidance plays a pivotal role in shaping our product development, ensuring they align with both technological advancements and the ethos of making a positive difference in society.",
    image: "./images/our-teams/nova.png",
    linkedin: "https://www.linkedin.com/in/nova-ahmed-58b8949/",
    right: false,
  },
  {
    motto: "We've started Drishti to eradicate Blindness from the World",
    name: "Jeremy Davis",
    designation: "Collaboration & Outreach Advisor",
    description:
      "Jeremy Jackson Davis, our esteemed Collaboration and Outreach Advisor at Drishti, is a seasoned professional with over 25 years of diverse experience in project management, international development, sustainability, entrepreneurship, and investment. Having spent two decades dedicated to international development, working closely with rural communities across Asia, Latin America, and Africa, Jeremy transitioned into entrepreneurship. He founded SmartMek, an agricultural services company, focusing on sustainable and profitable management for smallholder farmers and agri-entrepreneurs. Jeremy's wealth of experience includes a pivotal role as Director of Programs for iDE Bangladesh, overseeing strategic initiatives in agriculture, WASH, and Women's Economic Empowerment projects.",
    image: "./images/our-teams/jeremy.png",
    linkedin: "https://www.linkedin.com/in/jeremyjdavis1/",
    right: true,
  },
  {
    motto: "We've started Drishti to eradicate Blindness from the World",
    name: "Dr Mohamed Abdus Salam",
    designation: "Assistive Device Consultant",
    description:
      "Mohamed Abdus Salam holds a crucial role as the Assistive Device Consultant at Drishti, while concurrently serving as the Head of the Cornea Department at the renowned Ispahani Islamia Eye Institute. With extensive experience and expertise, Mohamed is instrumental in providing guidance and consultation on assistive device initiatives at Drishti. His leadership within the Cornea Department underscores his unwavering commitment to the field of eye care, and his significant contributions to the advancement of assistive technology. Mohamed's dual roles reflect his dedication to improving the lives of individuals with visual impairments and his dedication to enhancing eye health and vision care.",
    image: "./images/our-teams/salam.png",
    linkedin: "",
    right: false,
  },
];
