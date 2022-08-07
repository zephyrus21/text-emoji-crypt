import { NextPage } from "next";

const Form: NextPage<any> = ({
  handleSubmit,
  data,
  secret,
  setData,
  setSecret,
  type,
}) => {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8 w-96'>
      <div className='flex flex-col'>
        <label className='text-neutral-500'>
          {type === "Encrypt"
            ? "Enter text to encrypt."
            : "Enter emojis to decrypt"}
        </label>
        <textarea
          placeholder='Input'
          rows={4}
          className='rounded-lg bg-neutral-200 p-2 border border-neutral-300'
          value={data}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setData(e.target.value);
          }}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-neutral-500'>
          {type === "Encrypt" ? "Set a password." : "Enter the password."}
        </label>
        <input
          placeholder='Password'
          type='text'
          className='rounded-lg bg-neutral-200 p-2 border border-neutral-300'
          value={secret}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSecret(e.target.value);
          }}
        />
      </div>
      <button
        className='text-white bg-black rounded-lg px-6 py-2 text-lg'
        type='submit'>
        {type}
      </button>
    </form>
  );
};

export default Form;
