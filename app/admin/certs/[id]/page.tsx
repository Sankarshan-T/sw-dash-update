'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";


export default function CertIdPage() {
    return (
        <div className="p-8 h-full">
            <div className="flex space-x-3 items-center">
                <Link href={'/admin/queue'} className="hover:text-primary transition">
                    <ArrowLeft />
                </Link>
                <h1 className="text-xl font-bold">Edit Cerification</h1>
            </div>
            <div className="flex justify-between flex-col h-full">
                <div className="flex items-center justify-between gap-x-8">
                    <div className="group rounded-2xl border bg-background backdrop-blur-xl p-5 w-full transition mt-6 flex flex-col gap-y-5 h-full">
                        <div>
                            <p className="text-primary">Creator:</p>
                            <div className="flex gap-x-2 items-center text-xl mt-3">
                                <Image
                                    src={'/sw.png'}
                                    alt="logo"
                                    height={30}
                                    width={30}
                                    className="border-2 rounded-full"
                                />
                                coolcream
                                <span className="text-xs font-mono text-primary">U096RMRG03G</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-primary">Details:</p>
                            <div className="flex flex-col items-start text-sm mt-1 font-mono ">
                                <p>ProjectName: ....... </p>
                                <p>Submitter: coolcream</p>
                                <p>Type: .......</p>
                                <p>Dev Time: .......</p>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-2xl border bg-background backdrop-blur-xl p-5 w-full transition mt-6 flex flex-col gap-y-5 h-full">
                        <div>
                            <p className="text-primary">Description:</p>
                            <div className="flex gap-x-2 items-center mt-3 text-sm font-mono">
                                Project description goes here....
                            </div>
                        </div>
                    </div>

                </div>
                <div className="group rounded-2xl border bg-background backdrop-blur-xl p-5 w-full transition mt-6 flex flex-col gap-y-5 h-65">
                    <p>Decision:</p>
                    <Textarea className="h-full flex items-start justify-start" placeholder="I approve/reject because...." />
                </div>
                <div className="flex gap-x-5">
                    <div className="group rounded-2xl border-3 bg-background backdrop-blur-xl p-5 w-full transition mt-6 flex items-center justify-center border-dashed cursor-pointer select-none">
                        Click here or drag to upload proof video...
                    </div>
                    <div className="group rounded-2xl border bg-background backdrop-blur-xl p-5 w-full transition mt-6 flex items-center justify-center gap-x-5">
                        <Button
                            className="px-15 py-5 font-mono border-blue-800/70 bg-transparent border-dashed border-3 cursor-pointer text-muted-foreground"
                        >
                            Claim Cert
                        </Button>
                        <Button
                            className="px-15 py-5 font-mono border-green-800/70 bg-transparent border-dashed border-3 cursor-pointer text-muted-foreground"
                        >
                            Approve
                        </Button>
                        <Button
                            className="px-15 py-5 font-mono border-red-600/70 bg-transparent border-dashed border-3 cursor-pointer text-muted-foreground"
                        >
                            Reject
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}