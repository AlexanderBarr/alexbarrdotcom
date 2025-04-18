// /src/pages/api/login.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const correctPassword = process.env.DEV_SITE_PASSWORD ?? "supersecret";
    const { password } = req.body as { password: string };
    if (password === correctPassword) {
      const cookie = serialize("auth", "true", {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
      });

      res.setHeader("Set-Cookie", cookie);
      return res.status(200).json({ ok: true });
    }

    return res.status(401).json({ error: "Unauthorized" });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
