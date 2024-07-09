import './Navbar.css'
import { useState } from 'react'
import NavBarDesktop from './NavBarDesktop'
import NavbarMobile from './NavBarMobile'

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <NavBarDesktop  />
            <NavbarMobile open={open} setOpen={setOpen}/>
        </>
    )
}