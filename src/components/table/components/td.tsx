import { twMerge } from "tailwind-merge"

export const Td = ({ className, children, ...rest }: React.ComponentProps<'td'>) => {
    return <td className={twMerge('text-center border p-1', className)} {...rest}>{children}</td>
}