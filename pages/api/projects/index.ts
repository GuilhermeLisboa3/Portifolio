import { NextApiRequest, NextApiResponse } from "next";
import projects from './json/projects.json'


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ projects })
}