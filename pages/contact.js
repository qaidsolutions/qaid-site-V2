
import Header from "./_header";
import { useState } from "react";

export default function Contact(){
  const [state, setState] = useState({ name: "", email: "", message: "", sent: false, loading: false });
  async function send(e){
    e.preventDefault();
    setState({...state, loading: true});
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: state.name, email: state.email, message: state.message })
    });
    if (res.ok) setState({ name: "", email: "", message: "", sent: true, loading: false });
    else setState({ ...state, loading: false });
  }
  return (
    <div>
      <Header />
      <div className="p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold">Contact</h1>
        {state.sent ? <div className="mt-4 text-green-600">Message sent — we will reply to qaid.solutions@gmail.com</div> :
        <form onSubmit={send} className="mt-4 flex flex-col gap-3">
          <input required placeholder="Your name" className="p-2 border" value={state.name} onChange={(e)=>setState({...state,name:e.target.value})}/>
          <input required placeholder="Your email" className="p-2 border" value={state.email} onChange={(e)=>setState({...state,email:e.target.value})}/>
          <textarea required placeholder="Message" className="p-2 border" value={state.message} onChange={(e)=>setState({...state,message:e.target.value})}/>
          <button className="bg-qaidTeal text-white px-4 py-2 rounded" disabled={state.loading}>{state.loading ? "Sending..." : "Send"}</button>
        </form>}
      </div>
    </div>
  );
}
