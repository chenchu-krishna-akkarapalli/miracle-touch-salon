import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-black border border-gold text-white hover:bg-gold hover:text-black',
        gold:
          'bg-gold text-black hover:bg-gold-light',
        ghost:
          'border border-gold/50 text-gold hover:bg-gold/10',
        outline:
          'border border-gold text-white hover:bg-gold hover:text-black',
        mint:
          'bg-mint text-black hover:bg-mint-dark',
        link:
          'text-gold underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-10 px-6 text-sm',
        md: 'h-14 px-8 text-base',
        lg: 'h-[56px] px-10 text-lg',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
export default Button;
