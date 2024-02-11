import { View, StyleSheet, Image } from "@react-pdf/renderer";
import { Typography } from "./UI/Typography";
import photo from "../assets/pdfphoto.jpeg";

// Create styles
const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    padding: 20,
    marginBottom: 10,
    backgroundColor: "rgb(242, 244, 247)",
  },
  highlight: {
    flexDirection: "row",
  },
  info: {
    marginLeft: 10,
  },
});

export const Header = () => (
  <View style={styles.header}>
    <Typography type="title">Eduardo Conde (Front-end Engineer)</Typography>
    <View style={styles.highlight}>
      <Image src={photo} style={{ width: 140, height: 140 }} />
      <View style={styles.info}>
        <Typography label="Nationality">Portuguese</Typography>
        <Typography label="Location">Porto</Typography>
        <Typography label="Languages">Portuguese, English</Typography>
        <Typography label="Birth Year">1989</Typography>
        <Typography label="Driver's License">B</Typography>
        <Typography label="Email">eduardoconde.y@gmail.com</Typography>
        <Typography label="Github" link="https://www.github.com/condward/">
          github.com/condward/
        </Typography>
        <Typography
          label="LinkedIn"
          link="https://www.linkedin.com/in/eduardo-conde/"
        >
          linkedin.com/in/eduardo-conde/
        </Typography>
      </View>
    </View>
  </View>
);
