import { twMerge } from "tailwind-merge"

export const TableHead = ({ className, children, ...rest }: React.ComponentProps<'thead'>) => {
    return <thead className={twMerge('bg-zinc-200', className)} {...rest}>{children}</thead>
}