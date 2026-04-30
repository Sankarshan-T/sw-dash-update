import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background flex flex-col flex-1 items-center justify-center w-screen h-screen space-y-4">
      <Image
        src={'/sw.png'}
        alt="SW logo"
        width={200}
        height={200}
      />
      <h1 className="text-4xl font-mono font-bold">SW-DASH</h1>
      <p>
        The private system for the <strong className="font-mono">Shipwrights</strong>
      </p>
      <Link href={'/admin'}>
        <Button className="px-24 py-5 text-xl">
          Open
        </Button>
      </Link>
    </div>
  );
}
