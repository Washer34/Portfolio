import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      mainImageAlt: 'My portfolio image',
      mainTitle: "Antoine Paturel",
      mainSubtitlePrefix: "FullStack JavaScript",
      aboutMeTitle: "About me",
      aboutMeIntro: "My name is Antoine, I am 29 years old and I am a passionate Fullstack web developer. After completing a comprehensive training and interning with a Freelance Developer, I was captivated by the world of web development. Diligent, friendly, curious, and eager to learn, I am always looking for new challenges to tackle.",
      aboutMeSkills: "Throughout my journey, I have developed strong skills in JavaScript, React, Node, Ruby, and Rails. Additionally, I am proficient in SQL databases with PostgreSQL and NoSQL with MongoDB. I have also gained a deep understanding of the application development process, from initial creation to staging and deployment.",
      aboutMeIntro2: "I love creating web applications that offer exceptional user experiences and meet my clients' needs perfectly. Currently, I am looking for a position and am available immediately.",
      aboutMeIntro3: "I firmly believe that continuous learning is crucial in this ever-evolving field, which is why I am always open to new collaborations and exciting projects. Feel free to contact me to discuss your ideas and projects; I would be delighted to contribute to their realization.",
      projectTitle: "Projects",
      projectIntro: "Here I present a selection of my latest projects",
      contactName: "Name",
      contactPhone: "Phone",
      contactSubject: "Subject",
      contactSend: "Send Message",
      downloadCv: "Download my fullstack web developer CV",
      navHome: "Home",
      navAboutme: "About me",
      navProjects: "Projects",
      navContact: "Contact",
      navLightmode: "Light mode",
      navDarkmode: "Dark mode",
      navLang: "Language",
    }
  },
  fr: {
    translation: {
      mainImageAlt: 'Image de mon portfolio',
      mainTitle: "Antoine Paturel",
      mainSubtitlePrefix: "FullStack JavaScript",
      aboutMeTitle: 'À propos de moi',
      aboutMeIntro: "Je m'appelle Antoine, j'ai 29 ans et je suis un développeur web Fullstack passionné. Après avoir suivi une formation complète et fais un stage chez un Développeur Freelance, j'ai été conquis par le monde du développement web. Assidu, amical, curieux et avide d'apprendre, je suis toujours à la recherche de nouveaux défis à relever.",
      aboutMeSkills: "Au cours de mon parcours, j'ai développé de solides compétences en JavaScript, React, Node, Ruby, Rails. De plus, je maîtrise les bases de données SQL avec PostgreSQL et NoSQL avec MongoDB. J'ai également acquis une compréhension approfondie du processus de développement d'applications, de la création initiale à la mise en scène et au déploiement.",
      aboutMeIntro2: "J'adore créer des applications web offrant des expériences utilisateur exceptionnelles et répondant parfaitement aux besoins de mes clients. Actuellement, je suis à la recherche d'un poste et suis disponible dès maintenant.",
      aboutMeIntro3: "Je crois fermement que l'apprentissage continu est essentiel dans ce domaine en constante évolution, c'est pourquoi je suis toujours ouvert à de nouvelles collaborations et à des projets passionnants. N'hésitez pas à me contacter pour discuter de vos idées et projets ; je serais ravi de contribuer à leur réalisation.",
      projectTitle: "Projets",
      projectIntro: "Je vous présente ici une selection de mes derniers projets",
      contactName: "Nom",
      contactPhone: "Téléphone",
      contactSubject: "Sujet",
      contactSend: "Envoyer le message",
      downloadCv: "Télécharger mon CV développeur web fullstack",
      navHome: "Accueil",
      navAboutme: "A propos de moi",
      navProjects: "Projets",
      navContact: "Contact",
      navLightmode: "Mode lumineux",
      navDarkmode: "Mode Sombre",
      navLang: "Langue",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;