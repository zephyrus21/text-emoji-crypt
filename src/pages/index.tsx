import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "@components/Form";

const Home: NextPage = () => {
  const [data, setData] = useState("");
  const [secret, setSecret] = useState("");
  const [answer, setAnswer] = useState("");
  const [active, setActive] = useState("encrypt");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: any, type: string) => {
    e.preventDefault();

    const response = await axios.post(`/api/${type}`, {
      data,
      secret,
    });

    setAnswer(response.data.data);
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto min-h-screen font-primary max-w-3xl'>
      <Head>
        <title>Text to Emoji</title>
      </Head>
      <div className='flex flex-col items-center gap-8 transition-all duration-200'>
        <div className='flex gap-2 p-2 bg-neutral-300 rounded-2xl'>
          <button
            className={`rounded-lg ${
              active === "encrypt" ? "bg-neutral-200" : "bg-neutral-300"
            } p-2 hover:bg-neutral-100 transition-all duration-200`}
            onClick={() => {
              setActive("encrypt");
              setData("");
              setSecret("");
              setAnswer("");
              setCopied(false);
            }}>
            Encrypt Text
          </button>
          <button
            className={`rounded-lg ${
              active === "decrypt" ? "bg-neutral-200" : "bg-neutral-300"
            } p-2 hover:bg-neutral-100 transition-all duration-200`}
            onClick={() => {
              setActive("decrypt");
              setData("");
              setSecret("");
              setAnswer("");
              setCopied(false);
            }}>
            Decrypt Emojis
          </button>
        </div>
        {active === "encrypt" ? (
          <Form
            handleSubmit={(e: any) => handleSubmit(e, "emojify")}
            data={data}
            secret={secret}
            setData={setData}
            setSecret={setSecret}
            type='Encrypt'
          />
        ) : (
          <Form
            handleSubmit={(e: any) => handleSubmit(e, "demojify")}
            data={data}
            secret={secret}
            setData={setData}
            setSecret={setSecret}
            type='Decrypt'
          />
        )}
        {answer && (
          <div className=''>
            <p>{answer}</p>
            <CopyToClipboard text={answer} onCopy={() => setCopied(true)}>
              <button>Copy to clipboard</button>
            </CopyToClipboard>
            {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
