import { twMerge } from "tailwind-merge"

export const TableBody = ({ className, children, ...rest }: React.ComponentProps<'tbody'>) => {
    return <tbody className={twMerge('', className)} {...rest}>{children}</tbody>
}