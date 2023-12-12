import { twMerge } from "tailwind-merge"

export const CardFooter = ({ className, children, ...rest }: React.ComponentProps<'div'>) => {
    return <div className={twMerge('flex justify-between items-center gap-4', className)} {...rest}>{children}</div>
}