import { useState } from "react";
import { submitContact } from "../lib/api.js";

const initial = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const setField = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = "Enter a valid email";
    }
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    if (!validate()) return;

    try {
      setLoading(true);
      const resp = await submitContact(form);
      // As per requirement: show “Form Submitted” on 200 OK
      setStatus({ type: "success", message: "Form Submitted" });
      setForm(initial);
      setErrors({});
      console.log("API response:", resp);
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.message?.slice(0, 200) || "Something went wrong. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 className="title">Contact Us</h2>
      <form onSubmit={onSubmit} noValidate className="form">
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={setField}
          />
          {errors.name && <p className="err">{errors.name}</p>}
        </div>

        <div className="field">
          <label>Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={setField}
          />
        {errors.email && <p className="err">{errors.email}</p>}
        </div>

        <div className="field">
          <label>Phone</label>
          <input
            name="phone"
            placeholder="9999999999"
            value={form.phone}
            onChange={setField}
          />
          {errors.phone && <p className="err">{errors.phone}</p>}
        </div>

        <div className="field">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows={4}
            value={form.message}
            onChange={setField}
          />
          {errors.message && <p className="err">{errors.message}</p>}
        </div>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status.message && (
          <p
            className={
              status.type === "success" ? "status success" : "status error"
            }
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
