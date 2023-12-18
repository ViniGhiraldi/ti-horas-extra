import { twMerge } from "tailwind-merge"

export const Button = ({ className, children, ...rest }: React.ComponentProps<'button'>) => {
    return <button className={twMerge('px-4 py-2 rounded-md border hover:shadow-inner active:brightness-95 transition-shadow', className)} {...rest}>{children}</button>
}