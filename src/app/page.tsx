import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert mb-15"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="max-w-md text-sm mb-3 leading-8">
            In Dev...
          </h3>

          <h1 className="max-w-xxl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Demo App For AI + GCP (Google Cloud Platform) Practices.
          </h1>

          <h3 className="max-w-md text-base mt-3 leading-8">
            This will be a Cloud AI Agent with the following technologies:
          </h3>

          <ul>
            <li className="mt-2 pl-2 flex items-center justify-start">
              <Image
                className="dark:invert"
                src="/ChatGPT-Logo.svg"
                alt="ChatGPT logo"
                width={20}
                height={20}
                priority
              />
              <p className="max-w-md ml-2 text-base">GTP-5</p>
            </li>
            <li className="mt-2 pl-2 flex items-center justify-start">
              <Image
                className="dark:invert"
                src="/language-typescript-svgrepo-com.svg"
                alt="ChatGPT logo"
                width={20}
                height={20}
                priority
              />
              <p className="max-w-md ml-2 text-base">Typescript</p>
            </li>

            <li className="mt-2 pl-2 flex items-center justify-start">
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="ChatGPT logo"
                width={15}
                height={15}
                priority
              />
              <p className="max-w-md ml-2 text-base">Next.js (with Typescript)</p>
            </li>

            <li className="mt-2 pl-2 flex items-center justify-start">
              <Image
                className="dark:invert"
                src="/node-js-seeklogo.svg"
                alt="ChatGPT logo"
                width={15}
                height={15}
                priority
              />
              <p className="max-w-md ml-2 text-base">Node.js (with Typescript)</p>
            </li>

            <li className="mt-2 pl-2 flex items-center justify-start">
              <Image
                className="dark:invert"
                src="/cloud-run-svgrepo-com.svg"
                alt="ChatGPT logo"
                width={20}
                height={20}
                priority
              />
              <p className="max-w-md ml-2 text-base">Google Cloud Run</p>
            </li>
            {/* <li className="mt-2">
              <p className="max-w-md ml-2 text-base"> • • • </p>
            </li> */}
          </ul>
        </div>

        <h2 className="max-w-md mt-7 text-xl text-lg leading-8">
          Nicolas Gabrenas
        </h2>
      </main>
    </div>
  );
}
