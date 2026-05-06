export default function TermsPage() {
    return (
      <main className="min-h-screen bg-background px-4 py-12 text-foreground">
        <section className="mx-auto max-w-3xl rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
          <a href="/" className="text-sm font-black text-primary">
            ← Back to Calculator
          </a>
  
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-primary">
            Terms of Use
          </h1>
  
          <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
            <p>
              By using Hormoscale, you agree that the website is provided for
              informational and educational purposes only.
            </p>
  
            <p>
              Calculator results are estimates and may not reflect your actual
              medical outcomes. Hormoscale does not guarantee weight loss,
              medication suitability, safety, or treatment results.
            </p>
  
            <p>
              You are responsible for consulting a licensed healthcare professional
              before making decisions about medications, diet, exercise, or medical
              treatment.
            </p>
  
            <p>
              Hormoscale may update, modify, or remove features at any time. We are
              not liable for decisions made based on calculator outputs or website
              content.
            </p>
  
            <p>
              Continued use of the website means you accept these terms.
            </p>
          </div>
        </section>
      </main>
    );
  }