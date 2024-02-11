import { View, StyleSheet } from "@react-pdf/renderer";
import { WorkCard } from "./WorkCard/WordCard";
import { SectionCard } from "./UI/SectionCard";

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cards: {
    flexDirection: "column",
    padding: 20,
  },
  separator: {
    borderTop: "1px solid #000",
    marginVertical: 10,
  },
});

export const WorkCardList = () => (
  <SectionCard title="Work Experience">
    <>
      <WorkCard
        title="Senior Front-end software engineer"
        company="Blip (Fanduel)"
        date="08/2022 - present"
        location="Porto, Portugal"
        product="Back office apps to ease the life of Fanduel sports betting traders"
        technologies={[
          "Typescript",
          "nodeJS",
          "ReactJS",
          "React Query",
          "React hook forms + ZOD",
          "SASS and MUI",
          "Cypress",
          "React-testing-library",
          "Storybook",
          "Datadog",
        ]}
        responsibilities={[
          "Developed web applications for the back office.",
          "Worked on tests across the entire stack, ranging from unit tests to end-to-end tests.",
          "Served as a code maintainer, overseeing multi-division code reviews to ensure code quality and consistency.",
          "Conducted interviews and provided mentorship to junior developers, fostering their growth and development within the team.",
          "Initiated and organized new projects, breaking them down into actionable tickets for the team to work on.",
          "Collaborated with the product owner to provided insights on UI design and participated in negotiations regarding backend contract decisions.",
          "Introduced new technologies and managed technical debt, was a major driver of RTL best practices, React Query, Zod, and other key initiatives.",
        ]}
        training={[
          "BOOST program - Emotional Intelligence, Strategic Thinking, Peer Development, Communication and Influence",
        ]}
      />
      <View style={styles.separator} break />
      <WorkCard
        title="Front-end software engineer"
        company="Rows, Unipessoal Lda"
        date="03/2021 – 06/2022"
        location="Porto, Portugal"
        product="Productivity spreadsheet web app which allows to fetch API information directly from the cells"
        technologies={[
          "Typescript",
          "ReactJS",
          "KonvaJS",
          "CSS in JS and MUI",
          "GraphQL",
          "Apollo Client",
          "WebDriverIO",
          "React-testing-library",
          "storybook",
        ]}
        responsibilities={[
          "Developed both the main dashboard of the app, allowing users to efficiently manage their spreadsheets.",
          "Implemented new features for the spreadsheet app, utilizing KonvaJS to write onto the HTML5 canvas.",
          "Engaged in comprehensive testing practices, covering the entire testing stack from unit tests to end-to-end tests, ensuring robustness and reliability of the application.",
        ]}
      />
      <View style={styles.separator} />

      <WorkCard
        title="Front-end software engineer"
        company="Hostelworld Services Portugal LDA"
        date="05/2019 – 02/2021"
        location="Porto, Portugal"
        technologies={[
          "PHP",
          "mySQL",
          "Javascript",
          "VueJS",
          "NuxtJS",
          "Vuex",
          "SASS + Vuetify",
          "Jest",
          "Storybook",
        ]}
        product="Back office for hostel owners to manage the prices and availability of the clients and Hostelworld.com PWA webpage"
        responsibilities={[
          "Developed single-page applications for back-office operations using the Vue.js framework",
          "Implemented server-side rendering and progressive web application (PWA) features using Nuxt.js",
          "Constructed reusable components for the design system",
          "Conducted A/B tests and implemented tracking mechanisms to analyze and optimize performance.",
        ]}
      />
      <View style={styles.separator} break />
      <WorkCard
        title="Full stack software engineer"
        company="Neuroinova, LDA"
        date="04/2013 – 04/2019"
        location="Santa Maria da Feira, Portugal"
        product="Online platform for psychologists to prescribe interactive online games to assess their neurodegenerative disease progress"
        technologies={[
          "PHP",
          "mySQL",
          "Javascript",
          "HTML5 canvas - createJS",
          "jQuery",
          "VueJS",
        ]}
        responsibilities={[
          "Maintained and enhanced functionality of the online platform, addressing both frontend and backend requirements.",
          "Developed numerous cognitive HTML5 canvas games using the CreateJS Adobe library",
          "Facilitated data export from the database for scientific research purposes.",
        ]}
        publication="Cruz VT, Pais J, Ruano L, Mateus C, Colunas M, Alves I, Barreto R, Conde E, Sousa A, Araújo I, et al. Implementation
        and early outcomes of a collaborative multicentre network aimed at web-based cognitive training – COGWEB
        network. JMIR Mental Health; 2014."
        training={[
          "GDPR: Proteção de Dados nas Empresas: Novo Regulamento | Obrigações e boas práticas. Academia de PME do IAPMEI; 2017",
          "Wallstreet General and Professional English (150 hours)",
          "BULATS - English for Business (C1 Level)",
        ]}
      />
    </>
  </SectionCard>
);
