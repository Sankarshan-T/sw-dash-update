export default function QueuePage() {
    return (
        <div>
            <h1 className="font-medium font-mono text-xl">Da queue:</h1>
            <table className="w-full text-left border-collapse mt-10">
                <thead>
                    <tr className="border-b border-glass-border bg-white/5">
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Name</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Type</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Submitter</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50">Claimed by</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest opacity-50 text-right">Pending Since</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-glass-border">
                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">Project</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">Web app</td>
                        <td className="px-6 py-4 text-sm opacity-80">coolcream</td>
                        <td className="px-6 py-4 text-sm opacity-30">—</td>
                        <td className="px-6 py-4 text-sm font-medium text-right opacity-80">3 days</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">Project 1</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">Extension</td>
                        <td className="px-6 py-4 text-sm opacity-80">coolcream</td>
                        <td className="px-6 py-4 text-sm opacity-30">—</td>
                        <td className="px-6 py-4 text-sm font-medium text-right opacity-80 text-amber-500">1 day</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">Project 2</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">Linux App</td>
                        <td className="px-6 py-4 text-sm opacity-80">coolcream</td>
                        <td className="px-6 py-4 text-sm opacity-30">User3683 🔒</td>
                        <td className="px-6 py-4 text-sm font-medium text-right opacity-80">4 days</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">Project 3</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">Windows App</td>
                        <td className="px-6 py-4 text-sm opacity-80">coolcream</td>
                        <td className="px-6 py-4 text-sm opacity-30">—</td>
                        <td className="px-6 py-4 text-sm font-medium text-right opacity-80">6 days</td>
                    </tr>

                    <tr className="hover:bg-background transition-colors group">
                        <td className="px-6 py-4 text-sm font-semibold tracking-tight">Project 4</td>
                        <td className="px-6 py-4 text-[11px] font-mono opacity-70">CLI Tool</td>
                        <td className="px-6 py-4 text-sm opacity-80">coolcream</td>
                        <td className="px-6 py-4 text-sm opacity-30">—</td>
                        <td className="px-6 py-4 text-sm font-medium text-right opacity-80">5 days</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}