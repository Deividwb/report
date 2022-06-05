import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  body: {
    paddingTop: "35",
    padding: "30px 15px 25px",
  },
  header: {
    fontSize: "12",
    marginBottom: "20",
    textAlign: "center",
    color: "grey",
  },
  title: {
    fontWeight: "bold",
    alignItems: "center",
    padding: "10px 0px",
  },
  writer: {
    fontStyle: "picsum",
    paddingBottom: "8px",
  },
  image: {
    manWidth: "600px",
    maxHeight: "400",
    margin: "0px, 5px",
    border: "5px",
  },
  content: {
    paddingTop: "20px",
    border: "solid 2px",
  },
  lorem: {
    marginTop: 5,
    borderBottom: 1,
    borderRight: 1,
    borderTop: 1,
    borderLeft: 1,
    width: "100%",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: "12",
    bottom: "30",
    left: "0",
    right: "0",
    textAlign: "right",
    color: "grey",
    paddingRight: "8px",
  },
});
