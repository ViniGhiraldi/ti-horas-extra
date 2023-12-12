import { twMerge } from "tailwind-merge"

export const CardContent = ({ className, children, ...rest }: React.ComponentProps<'div'>) => {
    return <div className={twMerge('flex flex-col gap-4', className)} {...rest}>{children}</div>
}