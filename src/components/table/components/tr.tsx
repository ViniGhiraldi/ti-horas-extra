import { twMerge } from "tailwind-merge"

export const Tr = ({ className, children, ...rest }: React.ComponentProps<'tr'>) => {
    return <tr className={twMerge('', className)} {...rest}>{children}</tr>
}