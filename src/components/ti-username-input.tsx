'use client'

import { useUserContext } from "@/contexts/user-context"
import { twMerge } from "tailwind-merge"

interface ITIUsernameInput extends React.ComponentProps<'input'>{}

export const TIUsernameInput = ({className, ...rest}: ITIUsernameInput) => {
    const { handleChangeUser, username } = useUserContext();

    return <input type="text" placeholder="Insira seu nome..." spellCheck="false" value={username} onChange={e => handleChangeUser(e.currentTarget.value)} className={twMerge('outline-none text-2xl capitalize placeholder:normal-case tracking-tight font-semibold placeholder:font-normal placeholder:text-xl', className)} {...rest}/>
}