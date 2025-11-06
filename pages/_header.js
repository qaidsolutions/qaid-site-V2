
import Link from "next/link";
export default function Header(){ 
  return (
    <header className="bg-qaidTeal p-4 text-white flex items-center">
      <div className="flex items-center">
        <img src="/Q·aid logo.png" alt="Q·aid logo" className="header-logo mr-3" />
        <div>
          <div className="font-bold">Q·AID</div>
          <div className="text-sm">Fair, Fast, Accessible Healthcare</div>
        </div>
      </div>
      <nav className="ml-auto">
        <Link href="/admin/login"><a className="bg-white text-qaidTeal px-3 py-1 rounded">Admin Login</a></Link>
      </nav>
    </header>
  );
}
