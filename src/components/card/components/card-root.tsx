import { twMerge } from "tailwind-merge";

export const CardRoot = ({ className, children, ...rest }: React.ComponentProps<'div'>) => {
    return <div className={twMerge('p-6 rounded-md border shadow-md backdrop-blur-sm flex flex-col gap-4', className)} {...rest}>{children}</div>;
}