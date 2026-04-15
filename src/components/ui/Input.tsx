import * as React from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-2.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="font-poppins text-base text-white tracking-tight"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'h-[73px] w-full rounded-[9px] border border-gold bg-transparent px-6 font-poppins text-base text-white placeholder:text-salon-muted transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold-light',
            error && 'border-red-500 focus:ring-red-500/50',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500" role="alert">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
export type { InputProps };
export default Input;
