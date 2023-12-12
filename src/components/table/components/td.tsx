import { twMerge } from "tailwind-merge"

export const Td = ({ className, children, ...rest }: React.ComponentProps<'td'>) => {
    return <td className={twMerge('text-center text-sm', className)} {...rest}>{children}</td>
}