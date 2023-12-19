import { twMerge } from "tailwind-merge"

export const Input = ({ className, ...rest }: React.ComponentProps<'input'>) => {
    return <input type="text" className={twMerge('border w-full p-2 rounded-md hover:shadow-inner transition-shadow', className)} {...rest} />
}