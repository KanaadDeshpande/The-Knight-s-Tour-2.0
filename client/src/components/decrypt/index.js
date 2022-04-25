import React, { useState } from "react";
import {
  Container,
  Form,
  CipherInput,
  SubmitButton,
  CipherOutput,
  CopyIcon,
} from "./styles/decrypt";
import { CopyToClipboard } from "react-copy-to-clipboard";
import clipboard from "../../images/svg/clipboard.svg";
import greenTick from "../../images/svg/tick.svg";

function Encrypt() {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");
  const [copy, setCopy] = useState(false);
  const postData = { data: data };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    fetch("http://localhost:8000/api/decrypt/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((finalResponse) => {
        console.log(finalResponse);
        setOutput([...finalResponse]);
        setCopy(false);
      });
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <CipherInput value={data} onChange={(e) => setData(e.target.value)} />
        <SubmitButton>Submit</SubmitButton>
      </Form>
      <CipherOutput>
        {copy ? (
          <CopyIcon src={greenTick} alt="Copied!" />
        ) : (
          <CopyToClipboard
            text={String(output)}
            onCopy={() => setCopy({ copy: true })}
          >
            <CopyIcon src={clipboard} alt="" />
          </CopyToClipboard>
        )}
        {output}
      </CipherOutput>
    </Container>
  );
}

export default Encrypt;
