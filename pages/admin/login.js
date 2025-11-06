
import { useState } from "react";
import Router from "next/router";
export default function Login(){
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");
  async function submit(e){
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: u, password: p })
    });
    const data = await res.json();
    if (data.ok) {
      localStorage.setItem("qaid_user", JSON.stringify(data.user));
      Router.push("/admin/dashboard");
    } else setErr(data.message || "Login failed");
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        {err && <div className="text-red-600 mb-2">{err}</div>}
        <input className="w-full p-2 border mb-2" placeholder="username" value={u} onChange={(e)=>setU(e.target.value)} />
        <input type="password" className="w-full p-2 border mb-4" placeholder="password" value={p} onChange={(e)=>setP(e.target.value}) />
        <button className="w-full bg-qaidTeal text-white p-2 rounded">Sign In</button>
      </form>
    </div>
  );
}
