export const API_BASE = "https://vernanbackend.ezlab.in";

export async function submitContact(payload) {
  const res = await fetch(`${API_BASE}/api/contact-us/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json();
}
