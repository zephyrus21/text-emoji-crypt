import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "@components/Form";

const Home: NextPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [secret, setSecret] = useState("");
  const [answer, setAnswer] = useState("");
  const [active, setActive] = useState("encrypt");
  const [copied, setCopied] = useState(false);

  const buttons = [
    {
      label: "Encrypt Text",
      value: "encrypt",
    },
    {
      label: "Decrypt Emojis",
      value: "decrypt",
    },
  ];

  const handleSubmit = async (e: any, type: string) => {
    setLoading(true);
    e.preventDefault();

    const response = await axios.post(`/api/${type}`, {
      data,
      secret,
    });
    setLoading(false);
    setAnswer(response.data.data);
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto min-h-screen font-primary max-w-3xl'>
      <Head>
        <title>Text to Emoji</title>
      </Head>
      <div className='flex flex-col items-center gap-8'>
        <div className='flex gap-2 p-2 bg-neutral-300 rounded-2xl transition-all duration-200'>
          {buttons.map((button) => (
            <button
              key={button.value}
              className={`rounded-lg ${
                active === button.value
                  ? "bg-neutral-100"
                  : "bg-neutral-300 text-neutral-500"
              } p-2 hover:bg-neutral-50 transition-all duration-200`}
              onClick={() => {
                setActive(button.value);
                setData("");
                setSecret("");
                setAnswer("");
                setCopied(false);
              }}>
              {button.label}
            </button>
          ))}
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
          <>
            {loading ? (
              <Image src='/loading.svg' alt='loading' width={30} height={30} />
            ) : (
              <div className='flex bg-neutral-200 p-4 rounded-lg relative'>
                <p>{answer}</p>
                {active === "encrypt" && (
                  <CopyToClipboard text={answer} onCopy={() => setCopied(true)}>
                    <button className='absolute right-4 bg-neutral-50 p-1 rounded flex justify-center items-center'>
                      <Image
                        src='/copy.png'
                        alt='copy'
                        height='20px'
                        width='20px'
                      />
                    </button>
                  </CopyToClipboard>
                )}
              </div>
            )}
            {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
          </>
        )}
        <footer className=''>
          Made with 🔥 by{" "}
          <a
            className='text-orange-500 underline'
            href='https://p2.piyushpandey.tech/'>
            Piyush
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
