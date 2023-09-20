import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  
  const [characters, setCharacters] = useState({
    
        upperCase: "",
        lowerCase: "",
        digits: "",
        spacialChars: "",
  });

  const generateRandomString = (length) => {
    let result = "";
     const charactersLength = characters.toString().length;
     console.log({ charactersLength });
    for (let i = 0; i < length; i++) {
      result += characters
        .toString()
        .charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const randomGenerator = () => {
    const randomPw = generateRandomString(15);
    setPassword(randomPw);
  };
  console.log({characters});
  return (
    <div>
      Your Randomly Generated Password is<b>{password}</b>
      <br />
      <button onClick={randomGenerator}>Genrate random Password</button>
      <label>ABCD</label>
      <input
        type="checkbox"
        value="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        onClick={(e) => {
          setCharacters((prev) => {
            return {...prev, upperCase: e.target.checked ? e.target.value: ""};
          });
        }}
      />
      <label>abcd</label>
      <input
        type="checkbox"
        value="abcdefghijklmnopqrstuvwxyz"
        onClick={(e) => {
            
          setCharacters((prev) => {
            return {...prev, lowerCase: e.target.checked ? e.target.value: ""};
          });
        }}
      />
      <label>1234</label>
      <input
        type="checkbox"
        value="0123456789"
        onClick={(e) => {
          setCharacters((prev) => {
            return {...prev,digits: e.target.checked ? e.target.value: ""};
          });
        }}
      />
      <label>!@#$</label>
      <input
        type="checkbox"
        value="!@#$%^&*()"
        onClick={(e) => {
          setCharacters((prev) => {
            return {...prev, spacialChars:e.target.checked ? e.target.value: ""};
          });
        }}
      />
    </div>
  );
}
