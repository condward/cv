import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { Aspiration } from "components/Aspiration";
import { Education } from "components/Education";
import { Header } from "components/Header";
import { JobSkills } from "components/JobSkills";
import { OtherSkills } from "components/OtherSkills";
import { WorkCardList } from "components/WorkCardList";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
});

export const App = () => (
  <Document author="Eduardo Conde" title="CV">
    <Page size="A4" style={styles.page}>
      <Header />
      <Aspiration />
      <WorkCardList />
      <JobSkills />
    </Page>
    <Page size="A4" style={styles.page}>
      <OtherSkills />
      <Education />
    </Page>
  </Document>
);
