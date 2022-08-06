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
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-8'>
      <textarea
        placeholder='Input'
        rows={2}
        className='rounded-lg bg-neutral-200 p-2 border border-neutral-300'
        value={data}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setData(e.target.value);
        }}
      />
      <input
        placeholder='Password'
        type='text'
        className='rounded-lg bg-neutral-200 p-2 border border-neutral-300'
        value={secret}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSecret(e.target.value);
        }}
      />
      <button
        className='text-white bg-black rounded-full px-6 py-2 text-lg'
        type='submit'>
        {type}
      </button>
    </form>
  );
};

export default Form;
