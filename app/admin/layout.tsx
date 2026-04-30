import { Sidebar } from "../_components/sidebar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-screen flex p-3 space-x-3">
            <Sidebar />
            <div className="p-3 bg-sidebar border-2 shadow-xl h-full w-full rounded-3xl">
                {children}
            </div>
        </div>
    );
}