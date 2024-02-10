import { View, StyleSheet } from "@react-pdf/renderer";
import { Typography } from "components/UI/Typography";

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
});

interface WorkCardProps {
  title: string;
  company: string;
  date: string;
  location: string;
  product: string;
  technologies: Array<string>;
  responsibilities: Array<string>;
  publication?: string;
  training?: Array<string>;
}

export const WorkCard = ({
  title,
  company,
  date,
  location,
  responsibilities,
  technologies,
  product,
  publication,
  training,
}: WorkCardProps) => (
  <View style={styles.card}>
    <Typography type="subtitle">{title}</Typography>
    <Typography type="heading">
      {company} [{date}]
    </Typography>
    <Typography>
      <Typography type="label">Location: </Typography> {location}
    </Typography>
    <Typography>
      <Typography type="label">Product: </Typography> {product}
    </Typography>
    <Typography>
      <Typography type="label">Technologies: </Typography>
      {technologies.join(" * ")}
    </Typography>
    <Typography>
      <Typography type="label">Responsibilities: </Typography>
    </Typography>
    {responsibilities.map((res, index) => (
      <Typography key={index}>• {res}</Typography>
    ))}
    {publication && (
      <Typography>
        <Typography type="label">Publication: </Typography>
        {publication}
      </Typography>
    )}
    {training && (
      <>
        <Typography>
          <Typography type="label">Training: </Typography>
        </Typography>
        {training.map((res, index) => (
          <Typography key={index}>• {res}</Typography>
        ))}
      </>
    )}
  </View>
);
