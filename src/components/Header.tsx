import { View, StyleSheet, Image, Link } from "@react-pdf/renderer";
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
    <Typography type="title">Eduardo Conde</Typography>
    <View style={styles.highlight}>
      <Image src={photo} style={{ width: 120, height: 120 }} />
      <View style={styles.info}>
        <Typography>
          <Typography type="label">Nationality: </Typography> Portugal
        </Typography>
        <Typography>
          <Typography type="label">Birth Year: </Typography> 1989
        </Typography>
        <Typography>
          <Typography type="label">Email: </Typography> eduardoconde.y@gmail.com
        </Typography>
        <Typography>
          <Typography type="label">Location: </Typography> Porto
        </Typography>
        <Typography>
          <Typography type="label">Driver License: </Typography> B
        </Typography>
        <Typography>
          <Typography type="label">Languages: </Typography> Portuguese, English
        </Typography>
        <Typography>
          <Typography type="label">Github: </Typography>{" "}
          <Link src="https://www.github.com/condward/">
            github.com/condward/
          </Link>
        </Typography>
      </View>
    </View>
  </View>
);
