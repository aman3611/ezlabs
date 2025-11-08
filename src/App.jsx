import ContactForm from "./components/ContactForm.jsx";

export default function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">EZ Labs</div>
        <nav className="nav">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>We’d love to hear from you</h1>
          <p>Fill out the form and our team will get back to you shortly.</p>
        </div>
        <ContactForm />
      </section>

      <footer className="footer">© {new Date().getFullYear()} EZ Labs</footer>
    </main>
  );
}
