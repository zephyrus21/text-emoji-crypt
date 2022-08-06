import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [emojis, setEmojis] = useState("");
  const [secret, setSecret] = useState("");

  const handleEncrypt = async (e: any) => {
    e.preventDefault();

    const response = await axios.post("/api/emojify", {
      text,
      secret,
    });
    setText("");
    setEmojis(response.data.data);
  };

  const handleDecrypt = async (e: any) => {
    e.preventDefault();

    const response = await axios.post("/api/demojify", {
      emojis,
      secret,
    });
    setText(response.data.data);
    setEmojis("");
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-primary'>
      <Head>
        <title>Text to Emoji</title>
      </Head>
      <div>
        <h3>Encrypt</h3>
        <form onSubmit={handleEncrypt}>
          <input
            placeholder='Input text'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
          <input
            placeholder='Password'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSecret(e.target.value);
            }}
          />
          <button type='submit'>Submit</button>
        </form>
        <p>{emojis}</p>
      </div>
      <div>
        <h3>Decrypt</h3>
        <form onSubmit={handleDecrypt}>
          <input
            placeholder='Input emoji'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmojis(e.target.value);
            }}
          />
          <input
            placeholder='Password'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSecret(e.target.value);
            }}
          />
          <button type='submit'>Submit</button>
        </form>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Home;
