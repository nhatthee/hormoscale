export default function DisclaimerPage() {
    return (
      <main className="min-h-screen bg-background px-4 py-12 text-foreground">
        <section className="mx-auto max-w-3xl rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
          <a href="/" className="text-sm font-black text-primary">
            ← Back to Calculator
          </a>
  
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-primary">
            Medical Disclaimer
          </h1>
  
          <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
            <p>
              Hormoscale provides educational estimates and wellness-related
              information only. The calculator and generated results are not
              medical advice, diagnosis, treatment, or a substitute for care from a
              licensed healthcare professional.
            </p>
  
            <p>
              GLP-1 medications may require prescription, clinical evaluation, and
              ongoing medical supervision. Individual results vary based on
              medical history, medication response, adherence, nutrition,
              activity, sleep, and other health factors.
            </p>
  
            <p>
              Do not start, stop, or adjust any medication or treatment plan based
              solely on information from this website. Always consult a qualified
              healthcare provider before making decisions about weight management,
              GLP-1 medications, nutrition, or exercise.
            </p>
  
            <p>
              If you experience urgent symptoms or a medical emergency, contact
              emergency services immediately.
            </p>
          </div>
        </section>
      </main>
    );
  }