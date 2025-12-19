import Link from "next/link";
import {
    Activity,
    CreditCard,
    DollarSign,
    Download,
    Users,
    LayoutDashboard,
    Settings,
    LogOut
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-black">
            {/* Sidebar */}
            <div className="hidden border-r bg-white dark:bg-zinc-900 md:block w-64">
                <div className="flex h-14 items-center border-b px-6 font-bold text-lg">
                    CSDEVYANI
                </div>
                <div className="space-y-1 py-4">
                    <div className="px-3 py-2">
                        <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-gray-500">
                            Overview
                        </h2>
                        <div className="space-y-1">
                            <Link
                                href="#"
                                className="flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-zinc-800 dark:text-white"
                            >
                                <LayoutDashboard className="mr-3 h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-zinc-800"
                            >
                                <Users className="mr-3 h-4 w-4" />
                                Clients
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-zinc-800"
                            >
                                <Settings className="mr-3 h-4 w-4" />
                                Settings
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <Link
                        href="/"
                        className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                        <LogOut className="mr-3 h-4 w-4" />
                        Sign Out
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-white dark:bg-zinc-900 px-6">
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                    <div className="ml-auto flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                    </div>
                </header>

                <main className="flex-1 p-6 space-y-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {/* Stats Cards */}
                        <Card title="Total Revenue" value="$45,231.89" icon={DollarSign} subtext="+20.1% from last month" />
                        <Card title="Subscriptions" value="+2350" icon={Users} subtext="+180.1% from last month" />
                        <Card title="Sales" value="+12,234" icon={CreditCard} subtext="+19% from last month" />
                        <Card title="Active Now" value="+573" icon={Activity} subtext="+201 since last hour" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        {/* Main Chart Area Placeholder */}
                        <div className="col-span-4 rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow-sm">
                            <h3 className="font-semibold mb-4">Overview</h3>
                            <div className="h-[300px] w-full bg-gray-50 dark:bg-zinc-800 rounded flex items-center justify-center text-gray-400">
                                Chart Placeholder
                            </div>
                        </div>

                        {/* Recent Sales */}
                        <div className="col-span-3 rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow-sm">
                            <h3 className="font-semibold mb-4">Recent Client Activity</h3>
                            <div className="space-y-8">
                                <RecentSale name="Olivia Martin" email="olivia.martin@email.com" amount="+$1,999.00" />
                                <RecentSale name="Jackson Lee" email="jackson.lee@email.com" amount="+$39.00" />
                                <RecentSale name="Isabella Nguyen" email="isabella.nguyen@email.com" amount="+$299.00" />
                                <RecentSale name="William Kim" email="will@email.com" amount="+$99.00" />
                                <RecentSale name="Sofia Davis" email="sofia.davis@email.com" amount="+$39.00" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function Card({ title, value, icon: Icon, subtext }: { title: string, value: string, icon: any, subtext: string }) {
    return (
        <div className="rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">{title}</h3>
                <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{subtext}</p>
            </div>
        </div>
    )
}

function RecentSale({ name, email, amount }: { name: string, email: string, amount: string }) {
    return (
        <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-medium">
                {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
            </div>
            <div className="ml-auto font-medium">{amount}</div>
        </div>
    )
}
