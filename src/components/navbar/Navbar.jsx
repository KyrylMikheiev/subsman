import { useEffect, useState } from 'react'
import NavBarDesktop from './NavBarDesktop'
import NavbarMobile from './NavBarMobile'

export default function Navbar() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
            document.body.style.height = '100vh'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    return (
        <>
            <NavBarDesktop  />
            <NavbarMobile open={open} setOpen={setOpen}/>
        </>
    )
}