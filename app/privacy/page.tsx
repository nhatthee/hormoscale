export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-background px-4 py-12 text-foreground">
        <section className="mx-auto max-w-3xl rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
          <a href="/" className="text-sm font-black text-primary">
            ← Back to Calculator
          </a>
  
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-primary">
            Privacy Policy
          </h1>
  
          <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
            <p>
              Hormoscale is designed to provide educational calculator results.
              Information entered into the calculator is used to generate your
              on-page results and PDF output.
            </p>
  
            <p>
              In the current version, calculator inputs are processed in your
              browser and are not stored in a database by Hormoscale.
            </p>
  
            <p>
              If analytics tools, advertising platforms, or email capture features
              are added in the future, this page should be updated to explain what
              data is collected, how it is used, and how users can contact us.
            </p>
  
            <p>
              We may use standard web hosting logs or analytics to understand
              website performance, traffic sources, and usage patterns. These tools
              may collect technical information such as browser type, device type,
              pages visited, and approximate location.
            </p>
  
            <p>
              We do not sell personal medical information. This website should not
              be used to submit sensitive medical records or emergency health
              information.
            </p>
          </div>
        </section>
      </main>
    );
  }