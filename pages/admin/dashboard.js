
import { useEffect, useState } from "react";
import Header from "../_header";
export default function Dashboard(){
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState([]);
  useEffect(()=>{
    try { const u = JSON.parse(localStorage.getItem("qaid_user")); setUser(u); } catch(e){}
    fetch("/api/activity").then(r=>r.json()).then(d=>setActivity(d.activity || []));
  },[]);
  if (!user) return <div className="p-8">Not logged in. <a href="/admin/login" className="text-qaidTeal">Login</a></div>;
  return (
    <div>
      <Header />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="mt-4"><strong>User:</strong> {user.username} ({user.role})</div>
        <section className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Activity Log (visible to Manager)</h2>
          <div className="mt-2">
            {activity.length === 0 ? <div className="text-gray-600">No activity yet.</div> :
              activity.slice().reverse().map(a=>(
                <div key={a.id} className="border-b py-2">
                  <div><strong>{a.user}</strong> — {a.action}</div>
                  <div className="text-sm text-gray-500">{new Date(a.ts).toLocaleString()}</div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
}
