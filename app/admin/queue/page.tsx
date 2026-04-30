'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const QUEUE_DATA = [
    { id: "1", name: "Project", type: "Web app", submitter: "coolcream", claimedBy: null, pendingSince: "3 days" },
    { id: "2", name: "Project 1", type: "Extension", submitter: "coolcream", claimedBy: null, pendingSince: "1 day" },
    { id: "3", name: "Project 2", type: "Linux App", submitter: "coolcream", claimedBy: "User3683", pendingSince: "4 days" },
    { id: "4", name: "Project 3", type: "Windows App", submitter: "coolcream", claimedBy: null, pendingSince: "6 days" },
    { id: "5", name: "Project 4", type: "CLI Tool", submitter: "coolcream", claimedBy: null, pendingSince: "5 days" },
];

const ToggleButton = ({ initialClaimed }: { initialClaimed: boolean }) => {
    const [claimed, setClaimed] = useState(initialClaimed);

    return (
        <Button
            onClick={(e) => {
                e.stopPropagation();
                setClaimed(prev => !prev);
            }}
            variant={claimed ? "outline" : "default"}
        >
            {claimed ? "Unclaim" : "Claim"}
        </Button>
    );
};

export default function QueuePage() {
    const router = useRouter();

    const handleRowClick = (id: string) => {
        console.log("Redirecting to:", `/admin/certs/${id}`);
        router.push(`/admin/certs/${id}`);
    };

    return (
        <div className="p-8">
            <h1 className="font-medium font-mono text-xl">Da queue:</h1>
            <table className="w-full text-left border-collapse mt-10">
                <thead>
                    <tr className="border-b">
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Name</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Type</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Submitter</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Claimed by</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50 text-right">Pending Since</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50 text-right">Claim cert</th>
                    </tr>
                </thead>

                <tbody className="divide-y">
                    {QUEUE_DATA.map((item) => (
                        <tr
                            key={item.id}
                            onClick={() => handleRowClick(item.id)}
                            className="hover:bg-muted/50 cursor-pointer transition-colors group"
                        >
                            <td className="px-6 py-4 text-sm font-semibold tracking-tight">
                                {item.name}
                            </td>
                            <td className="px-6 py-4 text-[11px] font-mono opacity-70">
                                {item.type}
                            </td>
                            <td className="px-6 py-4 text-sm opacity-80">
                                {item.submitter}
                            </td>
                            <td className="px-6 py-4 text-sm opacity-30">
                                {item.claimedBy ? `${item.claimedBy} 🔒` : "—"}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right opacity-80">
                                {item.pendingSince}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right opacity-80">
                                {item.claimedBy ? (
                                    <Button disabled variant="secondary">Claimed 🔒</Button>
                                ) : (
                                    <ToggleButton initialClaimed={false} />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}