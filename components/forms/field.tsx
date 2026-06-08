import { cn } from "@/lib/utils";

const base =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-navy placeholder:text-text-muted/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

export function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(base, props.className)} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(base, "min-h-[140px] resize-y", props.className)} />;
}
