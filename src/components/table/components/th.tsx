import { twMerge } from "tailwind-merge"

export const Th = ({ className, children, ...rest }: React.ComponentProps<'th'>) => {
    return <th className={twMerge('p-4 text-center text-sm font-medium uppercase tracking-wider border border-white', className)} {...rest}>{children}</th>
}