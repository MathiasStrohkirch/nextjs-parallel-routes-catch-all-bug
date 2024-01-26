import Link from "next/link";

export default function DashboardPage() {
    return (
        <div>
            <p>dashboard page</p>
            <div><Link href='/dashboard/add/1'>go to /dashboard/add/1</Link></div>
            <div><Link href='/dashboard/add'>go to /dashboard/add</Link></div>
        </div>
    );
  }