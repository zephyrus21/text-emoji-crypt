import { demojify, emojify } from "@utils/emoji-convert";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { msg: string; text: string };

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const text = emojify(req.body.text, "123");
  const data = demojify(text, "123");
  res.status(200).json({ msg: data, text: text });
};

export default handler;
