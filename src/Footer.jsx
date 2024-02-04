import './styles/Footer.css'

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">

                    <div className="footerarea1">
                        <div className="logo">
                            <div className="relativelogo">
                                <h1>RUG.AO</h1>
                                <h6 className='byasfro'>by Asfrotype</h6>
                            </div>
                            <h3>|</h3>
                            <h3>audio</h3>
                        </div>

                    </div>

                    <div className="footerarea2">

                        <div className="footercardcontainer">
                            <h5>Conexão</h5>
                            <hr></hr>
                            <ul>
                                <li>Email</li>
                                <li>Whatsapp</li>
                                <li>Instagram</li>
                                <li>Formulário</li>
                            </ul>
                        </div>

                        <div className="footercardcontainer">
                            <h5>Serviços</h5>
                            <hr></hr>
                            <ul>
                                <li>Gravação de áudio</li>
                                <li>Mixagem e Masterização</li>
                                <li>Arte da capa</li>
                                <li>Design para marketing digital</li>
                                <li>Foto e edição</li>
                            </ul>
                        </div>


                    </div>

                </div>

                <div className="cnpjinfo">
                    <hr />
                    <p>Raider Software e Tech - CNPJ 52.861.511/0001-00
                        Rua Maringa, 580, São Paulo - SP - CEP 05941-100</p>
                </div>
            </div>
        </>
    )
}
