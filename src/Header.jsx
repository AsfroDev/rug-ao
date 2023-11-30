import NavDropdown from 'react-bootstrap/NavDropdown';

import './styles/Header.css'

export function Header() {
    return (
        <>
            <div className="header-container">

                <div className="header-content">

                    <div className="header-left">

                        <div className="header-area1">
                            <div className="relativelogo">
                                <h1>RUG.AO</h1>
                                <h6 className='byasfro'>by Asfrotype</h6>
                            </div>
                            <h3>|</h3>
                            <h3>audio</h3>
                        </div>


                        <div className="header-area2">
                            <NavDropdown title="Negócios" id="basic-nav-dropdown" className='header-option'>
                                <NavDropdown.Item href="#action/3.1">Gravação de áudio</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Arte de capa
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Mixagem e Masterização</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Design para o marketing digital
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Foto e edição
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div className="header-option contact">
                                Contato
                            </div>
                        </div>

                    </div>

                    <div className="header-right">

                        <div className="header-area3">
                            <button>Conte-nos sobre seu projeto</button>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}