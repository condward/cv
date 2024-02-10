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
        title="(Senior) Front-end software engineer"
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
          "sass and MUI",
          "Cypress",
          "react-testing-library",
          "storybook",
          "datadog",
        ]}
        responsibilities={[
          "Adding new features and creating new back office web apps",
          "Working on the whole testing stack, from unit tests to e2e tests",
          "Code maintainer which requires multi division code reviews",
          "Conducting interviews and mentoring junior developers",
          "Shaping and delegating new initiatives into tickets to the team",
          "Helping the product owner with UI and negotiating backend contract decisions",
          "Introducing technologies and managing tech debt cards (main driver of RTL best practices, react query and zod among others)",
        ]}
        training={[
          "BOOST program - Emotional Intelligence, Strategic Thinking, Peer Development, Communication and Influence",
        ]}
      />
      <View style={styles.separator} />
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
          "css in JS and MUI",
          "GraphQL",
          "Apollo Client",
          "WebDriverIO",
          "react-testing-library",
          "storybook",
        ]}
        responsibilities={[
          "Worked on the main dashboard for the app where users can manage their spreadsheets",
          "Adding new features to the spreadsheet based using KonvaJS to write in the html5 canvas",
          "Working on the whole testing stack, from unit tests to e2e tests",
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
          "sass + Vuetify",
          "jest",
          "storybook",
        ]}
        product="Back office for hostel owners to manage the prices and availability of the clients and Hostelworld.com PWA webpage"
        responsibilities={[
          "Developing back office single page applications with VueJS Framework",
          "Building server side rendering/pwa web page using Nuxt",
          "Building components for the design system",
          "Creating A/B Tests and tracking.",
        ]}
      />
      <View style={styles.separator} />
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
          "Maintaining and adding features to the online platform both in frontend and backend",
          "Creation of dozens of cognitive HTML5 canvas games with createJS Adobe library",
          "Exporting database data for scientific studies.",
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
