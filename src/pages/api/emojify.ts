import { emojify } from "@utils/emoji-convert";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { data: string };

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const data = emojify(req.body.text, req.body.secret);
  res.status(200).json({ data: data });
};

export default handler;
