import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import Form from "@components/Form";

const Home: NextPage = () => {
  const [data, setData] = useState("");
  const [answer, setAnswer] = useState("");
  const [secret, setSecret] = useState("");

  const [active, setActive] = useState("encrypt");

  const handleEncrypt = async (e: any) => {
    e.preventDefault();

    const response = await axios.post("/api/emojify", {
      data,
      secret,
    });

    setAnswer(response.data.data);
  };

  const handleDecrypt = async (e: any) => {
    e.preventDefault();

    const response = await axios.post("/api/demojify", {
      data,
      secret,
    });

    setAnswer(response.data.data);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-primary '>
      <Head>
        <title>Text to Emoji</title>
      </Head>
      <div className=''>
        <div className='flex gap-8'>
          <button
            onClick={() => {
              setActive("encrypt");
              setData("");
              setSecret("");
            }}>
            Encrypt Text
          </button>
          <button
            onClick={() => {
              setActive("decrypt");
              setData("");
              setSecret("");
            }}>
            Decrypt Emojis
          </button>
        </div>
        {active === "encrypt" ? (
          <Form
            handleSubmit={(e: any) => handleEncrypt(e)}
            data={data}
            secret={secret}
            setData={setData}
            setSecret={setSecret}
            type='Encrypt'
          />
        ) : (
          <Form
            handleSubmit={(e: any) => handleDecrypt(e)}
            data={data}
            secret={secret}
            setData={setData}
            setSecret={setSecret}
            type='Decrypt'
          />
        )}
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Home;
