
// Sends contact emails via Brevo (Sendinblue) - placeholder using BREVO_API_KEY
import axios from "axios";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { name, email, message } = req.body;
  const { store, addActivity } = require("../../utils/fake-db");
  store.orders.push({ id: store.orders.length+1, type: "contact", name, email, message, created_at: Date.now() });
  addActivity({ user: email, role: "Public", action: "Sent contact message", ts: Date.now() });
  try {
    const BREVO_API_KEY = process.env.BREVO_API_KEY || "BREVO_TEST_KEY";
    await axios.post("https://api.brevo.com/v3/smtp/email", {
      sender: { name: "Q·aid", email: "qaid.solutions@gmail.com" },
      to: [{ email: "qaid.solutions@gmail.com", name: "Q·aid Team" }],
      subject: `Contact form: ${name}`,
      htmlContent: `<p><strong>${name}</strong> (${email}) says: <br/>${message}</p>`
    }, {
      headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json" }
    });
    return res.json({ ok: true });
  } catch (err) {
    return res.json({ ok: true, warning: "Email send failed in sandbox" });
  }
}
