import React from "react";
import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "./styles";

const DocPdf = ({ poema }) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <Document>
      <Page style={styles.body} size="A4">
        <Text style={styles.header} fixed>
          ~Created by Deivid~
        </Text>
        <View>
          <View style={styles.title}>
            <Text>{poema ? poema.title : "..."}</Text>
          </View>
          <Text style={styles.writer}>
            Por {poema ? poema.poet.name : "..."}
          </Text>
          <Image
            src="https://picsum.photos/600/400"
            alt="random image"
            style={styles.image}
          ></Image>
          <View style={styles.lorem}>
            <Text>{lorem}</Text>
          </View>
          <Text style={styles.content}>{poema ? poema.content : "..."}</Text>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default DocPdf;
