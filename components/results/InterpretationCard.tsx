type InterpretationCardProps = {
    text: string;
  };
  
  export function InterpretationCard({ text }: InterpretationCardProps) {
    return (
      <div className="rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-teal-pale text-xl">
            🧠
          </div>
  
          <h3 className="text-xl font-black text-primary">Interpretation</h3>
        </div>
  
        <p className="text-sm leading-7 text-muted">{text}</p>
      </div>
    );
  }