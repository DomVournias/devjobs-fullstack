import * as React from "react";

import { Ref } from "react-hook-form";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  number?: boolean | undefined;
  prefix?: string;
  suffix?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, number, prefix, suffix, ...props }, ref) => {
    const handleInputChange = (event: any) => {
      // ref.field.onChange(value);
      console.log(event.target.value);
    };

    return (
      <div className="relative flex items-center gap-1">
        {number && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-muted-foreground text-sm ">
            {prefix}
          </span>
        )}

        <input
          type={type}
          onChange={handleInputChange}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            number && "pl-6"
          )}
          ref={ref}
          {...props}
        />

        {number && (
          <span className="flex items-center pr-2 text-muted-foreground text-sm">
            {suffix}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
