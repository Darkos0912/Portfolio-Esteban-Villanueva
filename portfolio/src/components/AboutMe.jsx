

function AboutMe() {
    return (
        <>
            <div className="about-me" id="about-me">
                <h2 className="h2-tit-2"> Sobre mi... </h2>
                <p> Hola, mi nombre es Esteban Villanueva, soy un Desarrollador Web Full Stack, aunque también puedo dedicarme completamente al back-end. <br />
                    Soy Argentino. Tengo 24 años. Manejo distintas herramientas, y tecnologías, que están especificadas abajo. Estoy dispuesto a aprender todo lo que se requiera,
                    soy un loco de la curiosidad y del esfuerzo.
                </p>
                <h3> Tecnologías: </h3>
                <div className="col-icons">
                    <div className="div-icons">
                        <img className="icons" src="./img/html.svg" alt="Logo-HTML" />
                        <strong> HTML </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/css.svg" alt="Logo-CSS" />
                        <strong> CSS </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/javascript.svg" alt="Logo-Javascript" />
                        <strong> JavaScript </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/typescript.png" alt="Logo-Typescript" />
                        <strong> TypeScript </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/nodejs.png" alt="Logo-Nodejs" />
                        <strong> NodeJs </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/react.svg" alt="Logo-React" />
                        <strong> React </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/angular.svg" alt="Logo-Angular" />
                        <strong> Angular </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/vitejs.svg" alt="Logo-Vite" />
                        <strong> Vite </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/git.svg" alt="Logo-Git" />
                        <strong> Git </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/github.svg" alt="Logo-GitHub" />
                        <strong> GitHub </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/mysql.png" alt="Logo-MySQL" />
                        <strong> MySQL </strong>
                    </div>
                    <div className="div-icons">
                        <img className="icons" src="./img/sequelize.png" alt="Logo-Sequelize" />
                        <strong> Sequelize </strong>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AboutMe;