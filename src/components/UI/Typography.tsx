import { Text, StyleSheet, Link } from "@react-pdf/renderer";

interface HeaderTextProps {
  type?: "title" | "subtitle" | "heading" | "text";
  label?: string;
  link?: string;
  children?: string;
  bullet?: boolean;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Courier-Bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Courier-Bold",
    color: "blue",
    marginBottom: 8,
  },
  heading: {
    fontSize: 14,
    fontFamily: "Courier-Bold",
    color: "dimgray",
    marginBottom: 8,
  },
  label: {
    fontFamily: "Courier-Bold",
  },
  text: {
    fontFamily: "Courier",
    fontSize: 12,
    marginBottom: 4,
  },
});

export const Typography: React.FC<HeaderTextProps> = ({
  type = "text",
  label,
  children,
  bullet,
  link,
}) => {
  const text = bullet ? `• ${children}` : children;

  if (link) {
    return (
      <Text style={styles[type]}>
        {label && <Text style={styles.label}>{label}: </Text>}
        <Link src={link}>{text}</Link>
      </Text>
    );
  }

  return (
    <Text style={styles[type]}>
      {label && <Text style={styles.label}>{label}: </Text>}
      {text}
    </Text>
  );
};
