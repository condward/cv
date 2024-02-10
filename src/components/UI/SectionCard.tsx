import { View, StyleSheet } from "@react-pdf/renderer";
import { Typography } from "./Typography";
import { ReactNode } from "react";

const styles = StyleSheet.create({
  cards: {
    flexDirection: "column",
    padding: "10 20",
  },
});

interface SectionCard {
  title: string;
  children: ReactNode;
}
export const SectionCard = ({ title, children }: SectionCard) => (
  <View style={styles.cards}>
    <Typography type="title">{title}</Typography>
    {children}
  </View>
);
