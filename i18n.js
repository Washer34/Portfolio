import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      mainImageAlt: 'My portfolio image',
      mainTitle: "I'm Antoine Paturel",
      mainSubtitlePrefix: "I'm",
      aboutMeTitle: "About me",
      aboutMeIntro: "My name is Antoine, I'm 29 years old, and I am a passionate Fullstack web developer. After completing an 8-month training at 'The Hacking Project', I fell in love with the world of web development. Diligent, friendly, curious, and eager to learn, I am always seeking new challenges to tackle.",
      aboutMeSkills: "Through my journey, I have developed strong skills in Ruby, Rails, JavaScript, ReactJS, CSS, and HTML. Furthermore, I am proficient with SQL and PostgreSQL databases. I have also gained a deep understanding of the application development process, from initial development to staging and deployment.",
      aboutMeIntro2: "I love creating web applications that provide exceptional user experiences and perfectly meet my clients' needs. Currently, I am seeking a 2-month internship, from 02/10/2023 to 24/11/2023, which could potentially lead to a full-time job opportunity.",
      aboutMeIntro3: "I firmly believe that continuous learning is crucial in this ever-evolving field, which is why I am always open to new collaborations and exciting projects. Feel free to contact me to discuss your ideas and projects; I would be delighted to contribute to their realization.",
      projectTitle: "Projects",
      projectIntro: "Throughout my training at The Hacking Project, I have been able to create various projects, more or less elaborate. This section will also showcase the future projects I will be involved in during my web developer career.",
      contactName: "Name",
      contactPhone: "Phone",
      contactSubject: "Subject",
      contactSend: "Send Message",
    }
  },
  fr: {
    translation: {
      mainImageAlt: 'Image de mon portfolio',
      mainTitle: "Je suis Antoine Paturel",
      mainSubtitlePrefix: "Je suis ",
      aboutMeTitle: 'À propos de moi',
      aboutMeIntro: "Je m'appelle Antoine, j'ai 29 ans et je suis un développeur web Fullstack passionné. Après avoir suivi une formation de 8 mois à 'The Hacking Project', j'ai été conquis par le monde du développement web. Assidu, amical, curieux et avide d'apprendre, je suis toujours à la recherche de nouveaux défis à relever.",
      aboutMeSkills: "Au cours de mon parcours, j'ai développé de solides compétences en Ruby, Rails, JavaScript, ReactJS, CSS et HTML. De plus, je maîtrise les bases de données SQL et PostgreSQL. J'ai également acquis une compréhension approfondie du processus de développement d'applications, de la création initiale à la mise en scène et au déploiement.",
      aboutMeIntro2: "J'adore créer des applications web offrant des expériences utilisateur exceptionnelles et répondant parfaitement aux besoins de mes clients. Actuellement, je recherche un stage de 2 mois, du 02/10/2023 au 24/11/2023, qui pourrait éventuellement déboucher sur une opportunité d'emploi à temps plein.",
      aboutMeIntro3: "Je crois fermement que l'apprentissage continu est essentiel dans ce domaine en constante évolution, c'est pourquoi je suis toujours ouvert à de nouvelles collaborations et à des projets passionnants. N'hésitez pas à me contacter pour discuter de vos idées et projets ; je serais ravi de contribuer à leur réalisation.",
      projectTitle: "Projets",
      projectIntro: "Tout au long de ma formation à The Hacking Project, j'ai pu créer différents projets, plus ou moins élaborés. Cette section mettra également en avant les futurs projets auxquels je participerai tout au long de ma carrière de développeur web.",
      contactName: "Nom",
      contactPhone: "Téléphone",
      contactSubject: "Sujet",
      contactSend: "Envoyer le message",
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