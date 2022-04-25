import styled from "styled-components/macro";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #2d132c;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CipherInput = styled.textarea`
  border-radius: 5px;
  height: 500px;
  width: 350px;
  padding: 18.5px;
  overflow-y: auto;
  color: black;
  resize: none;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #e50914;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  border: 1px solid #e50914;
  cursor: pointer;
`;

export const CipherOutput = styled.div`
  /* border: 1px solid beige; */
  border-radius: 5px;
  height: 500px;
  width: 350px;
  padding: 18.5px;
  overflow-y: auto;
  position: relative;
  background-color: white;
  color: black;
  margin-bottom: 40px;
`;

export const CopyIcon = styled.img`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  height: 24px;
  width: 24px;
`;
