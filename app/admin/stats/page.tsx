export default function StatsPage() {
    return (
        <div>
            <h1 className="font-medium font-mono text-xl">Certification Stats</h1>
            <div className="flex items-center justify-between mt-6 gap-x-5">
                <div className="group rounded-2xl shadow-lg border bg-background backdrop-blur-xl p-5 w-96 hover:-translate-y-1 transition">
                    <p className="group-hover:text-blue-500 text-lg text-muted-foreground">Total Certs</p>
                    <h2 className="group-hover:text-indigo-900 transition text-4xl font-semibold mt-2 text-blue-600">753</h2>
                </div>
                <div className="group rounded-2xl shadow-lg border bg-background backdrop-blur-xl p-5 w-96 hover:-translate-y-1 transition">
                    <p className="group-hover:text-green-500 text-lg text-muted-foreground">Approved</p>
                    <h2 className="group-hover:text-emerald-900 transition text-4xl font-semibold mt-2 text-green-600">377</h2>
                </div>
                <div className="group rounded-2xl shadow-lg border bg-background backdrop-blur-xl p-5 w-96 hover:-translate-y-1 transition">
                    <p className="group-hover:text-red-500 text-lg text-muted-foreground">Rejected</p>
                    <h2 className="group-hover:text-rose-900 transition text-4xl font-semibold mt-2 text-red-600">376</h2>
                </div>
            </div>
            <div className="flex items-start justify-between gap-x-13">
                <div className="group rounded-2xl shadow-lg border bg-background backdrop-blur-xl p-5 min-w-96 h-64 hover:-translate-y-1 transition mt-6 flex flex-col items-center">
                    <p className="group-hover:text-yellow-500 text-xl text-muted-foreground">Cookies earned</p>
                    <h2 className="text-7xl mt-5">🍪</h2>
                    <h2 className="group-hover:text-yellow-900 transition text-5xl font-semibold mt-2 text-yellow-600">357</h2>
                    <span className="font-mono text-xs">balance</span>
                </div>
                <div className="group rounded-2xl border bg-background backdrop-blur-xl p-5 w-full  transition mt-6 flex flex-col gap-y-5">
                    <p className="group-hover:text-blue-900 text-xl text-muted-foreground">By type</p>
                    <div className="flex gap-2 flex-wrap justify-between">
                        <div className="group rounded-2xl shadow-sm border-t bg-background backdrop-blur-xl p-5 w-54 hover:-translate-y-1 transition">
                            <p className="text-lg text-muted-foreground font-mono">Web app</p>
                            <h2 className="text-4xl font-semibold mt-2 text-lime-600">125</h2>
                        </div>
                        <div className="group rounded-2xl shadow-sm border-t bg-background backdrop-blur-xl p-5 w-54 hover:-translate-y-1 transition">
                            <p className="text-lg text-muted-foreground font-mono">Extension</p>
                            <h2 className="transition text-4xl font-semibold mt-2 text-yellow-600">126</h2>
                        </div>
                        <div className="group rounded-2xl shadow-sm border-t bg-background backdrop-blur-xl p-5 w-54 hover:-translate-y-1 transition">
                            <p className="text-lg text-muted-foreground font-mono">Linux app</p>
                            <h2 className="transition text-4xl font-semibold mt-2 text-rose-600">127</h2>
                        </div>
                        <div className="group rounded-2xl shadow-sm border-t bg-background backdrop-blur-xl p-5 w-54 hover:-translate-y-1 transition">
                            <p className="text-lg text-muted-foreground font-mono">Windows app</p>
                            <h2 className="transition text-4xl font-semibold mt-2 text-blue-600">128</h2>
                        </div>
                        <div className="group rounded-2xl shadow-sm border-t bg-background backdrop-blur-xl p-5 w-54 hover:-translate-y-1 transition">
                            <p className="text-lg text-muted-foreground font-mono">CLI</p>
                            <h2 className="transition text-4xl font-semibold mt-2 text-orange-600">123</h2>
                        </div>
                        <div className="group rounded-2xl shadow-sm border-t bg-background backdrop-blur-xl p-5 w-54 hover:-translate-y-1 transition">
                            <p className="text-lg text-muted-foreground font-mono">Other</p>
                            <h2 className="transition text-4xl font-semibold mt-2 text-indigo-600">124</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}