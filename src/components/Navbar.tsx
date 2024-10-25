import Link from "next/link";

export function Navbar() {
    return (
        <header className="sticky top-0 bg-slate-700 border-b-2">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-white hover:text-cyan-500 text-2xl font-bold">
                        NextJS App
                    </Link>
                </div>
            </div>
        </header>
    );
}
