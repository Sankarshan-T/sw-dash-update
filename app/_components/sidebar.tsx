import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
    return (
        <aside className="h-full w-64 flex flex-col bg-sidebar rounded-4xl p-3 border-2 shadow-md">
            <div className="flex items-center pb-3 justify-between space-x-1 border-b">
                <div className="flex space-x-1">
                    <Image
                        src={'/sw.png'}
                        alt="logo"
                        height={25}
                        width={25}
                    />
                    <p className="text-lg"> SW DASH </p>
                </div>
                <ModeToggle />
            </div>
            <div className="h-full flex flex-col mt-5 p-2 gap-y-2">
                <Link href={'/admin'}>
                    <Button variant={'outline'} className="w-full">Home</Button>
                </Link>
                <Link href={'/admin/stats'}>
                    <Button variant={'outline'} className="w-full">Cert Stats</Button>
                </Link>
                <Link href={'/admin/queue'}>
                    <Button variant={'outline'} className="w-full">Cert Queue</Button>
                </Link>
                <Link href={'/admin/support'}>
                    <Button variant={'outline'} className="w-full">Support Tickets</Button>
                </Link>
            </div>
            <div className="flex items-center pt-3 justify-start space-x-2 border-t">
                <Image
                    src={'/sw.png'}
                    alt="logo"
                    height={40}
                    width={40}
                />
                <div className="flex flex-col">
                    <h1 className="text-md font-medium">User3683</h1>
                    <h1 className="text-xs font-mono">Shipwright</h1>
                </div>
            </div>
        </aside>
    );
};