
import Header from "./_header";
import Link from "next/link";
export default function Home(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
        <section className="bg-white rounded shadow p-8 mt-6">
          <h2 className="text-3xl font-bold mb-2">Fair, Smart, and Accessible Healthcare</h2>
          <p className="mb-4 text-gray-700">Q·aid provides intelligent kiosks to make patient queues fair and efficient. This MVP site is ready for your team to add kiosk models, maintenance plans, and more via the Admin dashboard.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-qaidTeal text-white rounded">Buy a Kiosk</button>
            <button className="px-4 py-2 border border-qaidTeal text-qaidTeal rounded">Subscribe to Maintenance</button>
            <button className="px-4 py-2 border border-qaidBlue text-qaidBlue rounded">Schedule Maintenance</button>
          </div>
        </section>

        <section className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">About Q·aid</h3>
          <p className="text-gray-600 mt-2">This section is editable by your Editor after login.</p>
          <div className="mt-4">
            <Link href="/about"><a className="text-qaidTeal">Learn more →</a></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
