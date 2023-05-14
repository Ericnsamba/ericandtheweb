import { useState } from "react";

function CopyToClipboard({ text }: { text: string}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000); // set timeout for 3 seconds
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <button onClick={copyToClipboard} className={`font-body change__bg ${copied ? "bg-green": "bg-green/50" } text-black p-[10px] px-[20px] text-base font-normal rounded-full`}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default CopyToClipboard;
