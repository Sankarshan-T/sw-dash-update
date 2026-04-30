import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="h-full w-full flex items-center justify-center flex-col gap-y-3">
            <Image
                src={'/sw.png'}
                alt="SW logo"
                width={200}
                height={200}
            />
            <h1 className="text-5xl font-semibold">Welcome, Shipwright!</h1>
            <div className="flex space-x-4">
                <Link href={'/admin/stats'}>
                    <Button variant={'outline'} className="w-full py-4 px-10">Cert Stats</Button>
                </Link>
                <Link href={'/admin/queue'}>
                    <Button variant={'outline'} className="w-full py-4 px-10">Cert Queue</Button>
                </Link>
                <Link href={'/admin/support'}>
                    <Button variant={'outline'} className="w-full py-4 px-10">Support Tickets</Button>
                </Link>
            </div>
        </div>
    );
};