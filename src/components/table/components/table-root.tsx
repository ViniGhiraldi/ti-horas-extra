import { twMerge } from "tailwind-merge"

export const TableRoot = ({ className, children, ...rest }: React.ComponentProps<'table'>) => {
    return <table className={twMerge('w-full', className)} {...rest}>{children}</table>
}