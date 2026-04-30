import { Button } from "@/components/ui/button";

export default function SupportPage() {
    return (
        <div>
            <h1 className="font-medium font-mono text-xl">Support Tickets</h1>
            <div className="flex items-center justify-between mt-6 gap-x-5">
                <div className="group rounded-2xl shadow-lg border bg-background backdrop-blur-xl p-5 w-96 hover:-translate-y-1 transition">
                    <p className="group-hover:text-blue-500 text-lg text-muted-foreground">Total Tickets</p>
                    <h2 className="group-hover:text-indigo-900 transition text-4xl font-semibold mt-2 text-blue-600">5</h2>
                </div>
                <div className="group rounded-2xl shadow-lg border bg-background backdrop-blur-xl p-5 w-96 hover:-translate-y-1 transition">
                    <p className="group-hover:text-green-500 text-lg text-muted-foreground">Closed</p>
                    <h2 className="group-hover:text-emerald-900 transition text-4xl font-semibold mt-2 text-green-600">3</h2>
                </div>
                <div className="group rounded-2xl shadow-lg border bg-background backdrop-blur-xl p-5 w-96 hover:-translate-y-1 transition">
                    <p className="group-hover:text-red-500 text-lg text-muted-foreground">Open</p>
                    <h2 className="group-hover:text-rose-900 transition text-4xl font-semibold mt-2 text-red-600">2</h2>
                </div>
            </div>
            <table className="w-full text-left border-collapse mt-10">
                <thead>
                    <tr className="border-b">
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">User</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Question</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Status</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Created</th>
                    </tr>
                </thead>

                <tbody className="divide-y">
                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">coolcream</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">question...</td>
                        <td className="px-6 py-4 text-sm opacity-80">open</td>
                        <td className="px-6 py-4 text-sm opacity-30">1 day ago</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">coolcream</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">question...</td>
                        <td className="px-6 py-4 text-sm opacity-80">closed</td>
                        <td className="px-6 py-4 text-sm opacity-30">2 days ago</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">coolcream</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">question...</td>
                        <td className="px-6 py-4 text-sm opacity-80">open</td>
                        <td className="px-6 py-4 text-sm opacity-30">3 day ago</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">coolcream</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">question...</td>
                        <td className="px-6 py-4 text-sm opacity-80">closed</td>
                        <td className="px-6 py-4 text-sm opacity-30">5 days ago</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">coolcream</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">question...</td>
                        <td className="px-6 py-4 text-sm opacity-80">closed</td>
                        <td className="px-6 py-4 text-sm opacity-30">6 days ago</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}