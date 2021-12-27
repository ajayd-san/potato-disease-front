import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Container from "@mui/material/Container";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@mui/material/Button";
import ResultsCard from "./components/ResultsCard";
import Contact from "./components/Contact";

function App() {
  const [image, setImage] = useState(null);
  const [disease, setDisease] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [resultStatus, setResultStatus] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);

  const sendFile = async () => {
    if (!image) {
      alert("Please select an image!!");
      return;
    }
    setResultStatus(false);
    const form = new FormData();
    form.append("file", image);
    console.log(process.env.REACT_APP_BACKEND_ADDRESS);
    try {
      let res = await fetch(process.env.REACT_APP_BACKEND_ADDRESS, {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      console.log(data);
      setDisease(data.pred);
      setConfidence(data.confidence);
      setResultStatus(true);
      setErrorOccured(false);
    } catch (err) {
      setErrorOccured(true);
      console.log(err);
    }
  };

  return (
    <div className="App">
      <TopBar style="padding-top: 500px" />

      <Container maxWidth="md">
        <DropzoneArea filesLimit={1} onChange={(files) => setImage(files[0])} />
        <Button
          variant="contained"
          style={{ margin: 50 }}
          size="large"
          onClick={sendFile}
        >
          submit
        </Button>
        {resultStatus && (
          <ResultsCard
            errorstatus={errorOccured}
            disease={disease}
            confidence={confidence}
          />
        )}
      </Container>
      <Contact />
    </div>
  );
}

export default App;
