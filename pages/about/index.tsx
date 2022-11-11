import Image from "next/image";

import Vercel from "../public/vercel.svg";

export default function about() {
  return (
    <div>
      {/* comments */}
      <h1 className="text-8xl">hello</h1>
      <Image src={Vercel} alt="Text" />
    </div>
  );
}
