import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

interface LoginRequestBody {
  password: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { password }: LoginRequestBody = req.body as LoginRequestBody;
  const correctPassword = process.env.DEV_SITE_PASSWORD ?? "supersecret";

  if (password === correctPassword) {
    const cookie: string = serialize("auth", "true", {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });
    

    res.setHeader("Set-Cookie", cookie);
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: "Unauthorized" });
}
