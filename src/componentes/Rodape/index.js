import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='icones'>
                <img src="/imagens/fb.png" alt="imagem icone facebook" />
                <img src="/imagens/tw.png" alt="imagem iconetwiter" />
                <img src="/imagens/ig.png" alt="imagem icone instagram" />
            </div>
            <div>
                <img src="/imagens/logo.png" />
            </div>
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}

export default Rodape