import * as React from "react"
import { cn } from "../../../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputProps>(
  ({ className, type, icon: Icon, leftElement, rightElement, label, error, ...props }, ref) => {
    const isTextArea = type === "textarea";
    return (
      <div className="space-y-1.5 text-left">
        {label && <label className="text-[13px] font-bold text-slate-700 capitalize tracking-wider ml-1">{label}</label>}
        <div className="relative group">
          {leftElement ? (
            leftElement
          ) : Icon ? (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#0066FF] flex items-center justify-center pointer-events-none">
              <Icon size={18} strokeWidth={2.5} />
            </div>
          ) : null}
          {isTextArea ? (
            <textarea
              className={cn(
                "flex w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 transition-colors duration-200 outline-none placeholder:text-slate-300 min-h-[100px] resize-none",
                "focus:border-[#0066FF]/50 focus:ring-4 focus:ring-[#0066FF]/5",
                "hover:border-slate-300",
                (Icon || leftElement) && "pl-11",
                rightElement && "pr-11",
                error && "border-red-500 focus:ring-red-50",
                className
              )}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              type={type}
              className={cn(
                "flex w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 transition-colors duration-200 outline-none placeholder:text-slate-300 h-11",
                "focus:border-[#0066FF]/50 focus:ring-4 focus:ring-[#0066FF]/5",
                "hover:border-slate-300",
                (Icon || leftElement) && "pl-11",
                rightElement && "pr-11",
                error && "border-red-500 focus:ring-red-50",
                className
              )}
              ref={ref as React.Ref<HTMLInputElement>}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          {rightElement && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
              {rightElement}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-xs font-medium text-red-600 ml-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
