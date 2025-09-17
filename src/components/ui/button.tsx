import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
//         outline:
//           "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
//         ghost:
//           "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2 has-[>svg]:px-3",
//         sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
//         lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
//         icon: "size-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

const buttonVariants = cva(
  `justify-center inline-flex items-center font-medium rounded-[0.25rem] shadow-sm not-disabled:cursor-pointer disabled:cursor-not-allowed focus:outline-none focus:ring-4 [&_svg:not([class*='size-'])]:size-5`,
  {
    variants: {
      variant: {
        primary:
          "bg-orange-500 text-white hover:bg-orange-800 focus:bg-orange-800 focus:ring-orange-600/12 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none!",
        secondary:
          "bg-white border border-neutral-200 text-neutral-950 hover:text-neutral-950 hover:bg-neutral-50 focus:bg-neutral-50 focus:shadow-none! focus:ring-indigo-800/20 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none! disabled:border-none",
        tertiary:
          "shadow-none! text-indigo-700 hover:bg-neutral-50 focus:bg-neutral-50 focus:ring-indigo-800/20 disabled:text-neutral-400 disabled:bg-transparent!",
        "link-color":
          "shadow-none! p-0! text-orange-500 hover:text-orange-800 focus:text-orange-800 focus:bg-neutral-50 focus:ring-orange-800/20 disabled:text-neutral-400",
        "link-gray":
          "shadow-none p-0! text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 focus:bg-neutral-50 focus:ring-indigo-800/20 disabled:text-neutral-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 focus:ring-red-800/20 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none!",
      },
      size: {
        sm: "px-2.5 py-2 text-sm gap-1.5 ",
        md: "px-3.5 py-2.5 text-sm gap-1.5",
        lg: "px-4 py-2.5 text-base gap-2",
        xl: "px-5 py-3 text-base gap-2",
        "2xl": "px-6 py-4 text-lg gap-3",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: "sm",
        className: "has-[>svg:nth-of-type(1):last-of-type]:px-2",
      },
      {
        iconOnly: true,
        size: "md",
        className: "has-[>svg:nth-of-type(1):last-of-type]:px-2.5",
      },
      {
        iconOnly: true,
        size: "lg",
        className: "has-[>svg:nth-of-type(1):last-of-type]:px-2.5",
      },
      {
        iconOnly: true,
        size: "xl",
        className: "has-[>svg:nth-of-type(1):last-of-type]:px-3",
      },
      {
        iconOnly: true,
        size: "2xl",
        className:
          "has-[>svg:nth-of-type(1):last-of-type]:px-4 [&_svg:not([class*='size-'])]:size-6",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  },
);

function Button({
  className,
  variant,
  size,
  iconOnly,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, iconOnly, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
