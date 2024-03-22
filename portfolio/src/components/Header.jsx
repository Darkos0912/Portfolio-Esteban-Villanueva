

function Header() {
    return (
        <>
            <header>
                <div className="nav">
                    <div className="lang">
                        <select id="select" className="select">
                            <option className="es" value="es">ES</option>
                            <option className="en" value="en">EN</option>
                        </select>
                    </div>
                    <div className="mod">
                        <svg className="lucide lucide-sun  mod-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="yellow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                        <svg className="lucide lucide-moon  mod-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                    </div>
                    <div className="menu">
                        <svg className="lucide lucide-menu  menu-open" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00759b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        <svg className="lucide lucide-x  menu-close" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00759b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </div>
                    <div className="col">
                        <a href="#">Inicio</a>
                        <a href="#about-me">Sobre mí</a>
                        <a href="#portfolio">Portafolio</a>
                        <a href="#contact">Contacto</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;