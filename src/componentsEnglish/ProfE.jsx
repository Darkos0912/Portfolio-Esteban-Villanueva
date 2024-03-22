

function Prof() {
    return (
        <>
            <div className="sect">
                <img className="img-perf" src="/img/foto.png" alt="imagen de perfil"/>
                    <div className="sects">
                        <div className="text-sect">
                            <strong className="tx-1">Hello, I´m Esteban Villanueva</strong>
                            <h2 className="h2-tit">Full Stack Developer</h2>
                            <strong className="tx-2">Passionate about web development</strong>
                        </div>
                        <div className="link-sect">
                            <a href="/files/cv.pdf" download="CurriculumVitae" target="_blank" className="cv"> Resume <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b5e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg> </a>
                            <a href="#portfolio" className="lucide lucide-arrow-right  port"> Portfolio <svg className="animated-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Prof;