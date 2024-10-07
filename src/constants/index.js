import project1 from "../assets/projects/expense.png";
import project2 from "../assets/projects/passwordmanager.png";
import project3 from "../assets/projects/todolist.png";
import project4 from "../assets/projects/cc.png";
import project5 from "../assets/projects/weather.png";

export const HERO_CONTENT = `I am a passionate Android developer with a knack for crafting robust and scalable mobile applications. With 6 months of hands-on experience, I have honed my skills in Android development using technologies like Java, Kotlin, XML and Jetpack Compose. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Android developer with a passion for creating efficient, user-friendly, and scalable mobile applications. With 6 months of professional experience, I have honed my skills in Android development using technologies like Java, XML, Kotlin, Jetpack Compose, Android SDK, and Retrofit. My journey in Android development began with a deep curiosity for how mobile apps work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality mobile solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "01/2024 - 06/2024",
    role: "Android Intern",
    company: "Paperbird Tech.",
    description: `During my internship, I focused on developing Android applications using Kotlin. I collaborated with the team to design and optimize user interfaces, implemented responsive layouts, and integrated RESTful APIs to fetch and display data dynamically within the apps. This experience significantly enhanced my skills in Kotlin, Android SDK, and mobile development best practices. I am a quick learner and effective team player, ready to contribute to Android development projects`,
    technologies: ["Android", "Kotlin", "Java", "Room DB","Jetpack Compose","Android SDK"],
  },
];

export const PROJECTS = [
  {
    title: "Rupee Manager Android Application",
    image: project1,
    description:
      " Developed Rupee Manager, a comprehensive financial tool for Android users to easily track expenses, manage budgets, and monitor finances. Key features include intuitive expense categorization, customizable budgeting tools, detailed spending reports, and real-time synchronization across devices",
    technologies: ["Kotlin", "Room", "Firebase", "XML"],
    gitlink:"https://github.com/A23coder/"
  },
  {
    title: "Password Manager Android Application",
    image: project2,
    description:
      "Created a fully encrypted Password Manager app using Kotlin and Room database,providing users with a secure platform to manage their passwords with ease",
    technologies: ["Kotlin", "Room", "XML"],
    gitlink:"https://github.com/A23coder/Password-Manager"
  },
  {
    title: "To Do Android Application",
    image: project3,
    description:
      " User-Friendly Interface: Designed with simplicity and usability in mind. This project was a great opportunity to deepen my knowledge of Kotlin and Android's architecture components, especially Room Database",
    technologies: ["Kotlin", "Room", "XML"],
    gitlink:"https://github.com/A23coder/Kardiya-Kya"
  }, 
  {
    title: "Currency Converter Android Application",
    image: project4,
    description:
      " Developed a Currency Converter app for Android, utilizing Retrofit for real-time currency data integration. Users receive instant updates",
    technologies: ["Kotlin", "Jetpack Compose", "REST API", "View-Model"],
    gitlink:"https://github.com/A23coder/CurrencyConverter"
  },
  {
    title: "Weather Forecast Android Application",
    image: project5,
    description:
      " Developed a weather forecasr app for Android, utilizing Retrofit for fethcing real-time weather data.",
    technologies: ["Kotlin", "Retrofit", "REST API", "XML"],
    gitlink:"https://github.com/A23coder/Weather"
  },
];

export const CONTACT = {
  address: "Ahmedabad, India",
  phoneNo: "+91 1234567890 ",
  email: "apaakash.aakash@gmail.com",
};

export const SOCIALMEDIALINKS = {
  instalink: "https://www.instagram.com/panchal___aakash/profilecard/?igsh=NjVjbjM1aDlqMTIz",
  linkdinlink: "https://www.linkedin.com/in/aakash-panchal-6b3910247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  githublink:"https://github.com/A23coder/",
}
