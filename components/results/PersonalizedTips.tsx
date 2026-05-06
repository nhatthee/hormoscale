type PersonalizedTipsProps = {
    medicationName: string;
  };
  
  export function PersonalizedTips({ medicationName }: PersonalizedTipsProps) {
    const tips = [
      {
        icon: "🥦",
        title: "Protein first",
        text: "Prioritize protein with each meal to help preserve lean muscle during weight loss.",
      },
      {
        icon: "💧",
        title: "Hydration matters",
        text: "GLP-1 medications may reduce appetite and thirst signals, so build a daily hydration routine.",
      },
      {
        icon: "🚶",
        title: "Move gently but consistently",
        text: "Walking and strength training can help improve body composition and long-term results.",
      },
      {
        icon: "📅",
        title: `${medicationName} consistency`,
        text: "Consistent follow-up, dose review, and side-effect tracking help make the plan safer and more effective.",
      },
    ];
  
    return (
      <div className="rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-teal-pale text-xl">
            💡
          </div>
  
          <h3 className="text-xl font-black text-primary">
            Personalized Tips
          </h3>
        </div>
  
        <div className="space-y-3">
          {tips.map((tip) => (
            <div key={tip.title} className="flex gap-4 rounded-xl bg-teal-pale p-4">
              <span className="text-2xl">{tip.icon}</span>
  
              <p className="text-sm leading-6 text-foreground">
                <strong className="text-primary">{tip.title}:</strong> {tip.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }