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
    <Typography type="heading">{`${company} (${date})`}</Typography>
    <Typography label="Location">{location}</Typography>
    <Typography label="Product">{product}</Typography>
    <Typography label="Technologies">{technologies.join(" * ")}</Typography>
    <Typography label="Responsibilities" />
    {responsibilities.map((res, index) => (
      <Typography bullet key={index}>
        {res}
      </Typography>
    ))}
    {publication && <Typography label="Publication">{publication}</Typography>}
    {training && (
      <>
        <Typography label="Training" />
        {training.map((res, index) => (
          <Typography bullet key={index}>
            {res}
          </Typography>
        ))}
      </>
    )}
  </View>
);
