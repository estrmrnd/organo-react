import './Rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/fb.png' alt='' width={16} height={16} />
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target='_blank'>
                        <img src='/imagens/tw.png' alt='' width={16} height={16} />
                    </a>
                </li>
                <a href='instagram.com' target='_blank'>
                    <img src='/imagens/ig.png' alt='' width={16} height={16} />
                </a>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt='' />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)

}

export default Rodape;