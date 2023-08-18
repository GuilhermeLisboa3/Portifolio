import { NextApiRequest, NextApiResponse } from "next";
import skills from './json/skills.json'


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ skills })
}