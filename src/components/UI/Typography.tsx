import { Text, StyleSheet } from "@react-pdf/renderer";
import { ReactNode } from "react";

interface HeaderTextProps {
  type?: "title" | "subtitle" | "heading" | "label" | "text";
  children: ReactNode;
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
    fontFamily: "Courier",
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
  children,
}) => {
  return <Text style={styles[type]}>{children}</Text>;
};
