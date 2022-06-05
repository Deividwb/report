import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DocPdf from "./docPdf";
import LookWeb from "./lookWeb";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  const [poem, setPoem] = useState(null);
  const [lookWeb, setLookWeb] = useState(false);
  const [lookPdf, setLookPdf] = useState(false);

  function fetchPoema() {
    // setPoem([
    //   {
    //     title: "The Phoenix And The Turtle",
    //     name: "William Shakespeare",
    //     image: "https://www.pexels.com/photo/brown-squirrel-47547/",
    //     content:
    //       "Let the bird of loudest lay, On the sole Arabian tree, Herald sad and trumpet be,To whose sound chaste wings obey. But thou, shrieking harbinger, Foul pre-currer of the fiend, Augur of the fever's end, To this troop come thou not near.",
    //   },
    // ]);

    fetch("https://www.poemist.com/api/v1/randompoems")
      .then((response) => response.json())
      .then((data) => {
        setPoem(data[0]);
      });
  }

  // const [light, setLight] = useState(false);
  // const [night, setNight] = useState(false);

  // const ContinuePperiod = () => {
  //   const period = 99999;
  //   const final = 0;
  //   for (let i = 0; i < period; i--) {
  //     if (period < final) {
  //       period = period - 1;
  //       setTimeout(() => {
  //         setLight(true);
  //       }, 1000);
  //       setTimeout(() => {
  //         setLight(false);
  //       }, 1000);
  //       console.log("teste: ", [i]);
  //     }
  //     for (let j = 0; j < final; j--) {
  //       if (j > period) {
  //         period = period - 1;
  //         setTimeout(() => {
  //           setNight(true);
  //         }, 1000);
  //         setLight(false);
  //       }
  //     }
  //   }
  //   return period;
  // };

  // const ContinuePperiod = () => {
  //   while (!poem) {
  //     setTimeout(() => {
  //       setLight(true);
  //     }, 2500);
  //     setTimeout(() => {
  //       setLight(false);
  //     }, 5000);
  //   }
  // };

  useEffect(() => {
    // ContinuePperiod();
    fetchPoema();
  }, []);

  const Menu = () => {
    return (
      <>
        <nav>
          <Button
            onClick={() => {
              setLookWeb(!lookWeb);
              setLookPdf(false);
            }}
          >
            {lookWeb ? "Ocultar Web" : "Ver Web"}
          </Button>
          <Button
            onClick={() => {
              setLookWeb(false);
              setLookPdf(!lookPdf);
            }}
          >
            {lookPdf ? "Ocultar PDF" : "Ver PDF"}
          </Button>
          <PDFDownloadLink
            document={<DocPdf poema={poem} />}
            fileName="poema.pdf"
          >
            <Button>Baixar PDF</Button>
          </PDFDownloadLink>
        </nav>
      </>
    );
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Menu />

      {/* {!poem ? ( */}
      <>
        <h6>Escolha uma Opção</h6>
        {lookWeb && <LookWeb poema={poem} />}

        {lookPdf && (
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <DocPdf poema={poem} />
          </PDFViewer>
        )}
      </>
      {/* ) : (
        <h2>{`Buscando PDF.. .`}</h2>
      )} */}
    </div>
  );
}

export default App;
