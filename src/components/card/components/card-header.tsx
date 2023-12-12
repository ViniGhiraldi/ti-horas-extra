import { twMerge } from "tailwind-merge"

export const CardHeader = ({ className, children, ...rest }: React.ComponentProps<'div'>) => {
    return <div className={twMerge('flex justify-center items-center gap-4 text-2xl font-medium', className)} {...rest}>{children}</div>
}