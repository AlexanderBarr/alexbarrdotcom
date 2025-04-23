// hooks/useTypewriter.ts
import { useEffect, useState } from "react";

export function useTypewriter(words: string[], delay = 150, pause = 2000) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === words.length) setIndex(0); // loop back

    if (!deleting && subIndex === words[index]?.length) {
      // pause at full word
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(words[index]?.slice(0, subIndex + (deleting ? -1 : 1)) ?? "");
      },
      deleting ? delay / 2 : delay,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, delay, pause]);

  return text;
}
