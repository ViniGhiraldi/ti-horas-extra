import { twMerge } from "tailwind-merge"

export const Th = ({ className, children, ...rest }: React.ComponentProps<'th'>) => {
    return <th className={twMerge('p-4 text-center text-xs font-medium uppercase tracking-wider', className)} {...rest}>{children}</th>
}