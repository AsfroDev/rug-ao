export function FormEnd() {
    return (
        <>
            <div className="form2">
                <div className="formtitle">Podemos te ajudar?</div>
                <div className="formhead">Conte-nos sobre seu projeto</div>
                <div className="formarea1">
                    <input type="fname" placeholder="Nome" />
                    <input type="lname" placeholder="Sobrenome" />
                </div>
                <div className="formarea2">
                    <input type="phone" placeholder="Telefone" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="formarea3">
                    <textarea id="textinput" type="text" placeholder="Mensagem" />
                </div>
                <div className="formarea4">
                    <input type="submit" value="Enviar" />
                </div>
            </div>
        </>
    )
}