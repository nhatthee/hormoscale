type MilestoneTimelineProps = {
    timeline: {
      month: string;
      detail: string;
    }[];
  };
  
  export function MilestoneTimeline({ timeline }: MilestoneTimelineProps) {
    return (
      <div className="rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-teal-pale text-xl">
            🗓️
          </div>
  
          <h3 className="text-xl font-black text-primary">
            Milestone Timeline
          </h3>
        </div>
  
        <div className="relative space-y-5 pl-8 before:absolute before:left-[9px] before:top-3 before:h-[calc(100%-24px)] before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-teal before:to-primary">
          {timeline.map((item) => (
            <div
              key={item.month}
              className="relative rounded-xl bg-background p-4 before:absolute before:-left-[27px] before:top-5 before:size-3 before:rounded-full before:border-2 before:border-white before:bg-teal before:shadow-[0_0_0_3px_rgba(75,191,191,0.2)]"
            >
              <p className="font-black text-primary">{item.month}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }