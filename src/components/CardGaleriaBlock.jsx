export function CardGaleriaBlock() {
    return (
        <>
            <div className="galeria-block">

                <div className="galeria-fotos">
                    <div className="galeria-head">
                        <h5>Galeria de fotos</h5>
                    </div>
                    <div className="galeria-body">
                        <div className="photo-box"><img src={"photo1.jpg"}/></div>
                        <div className="photo-box"><img src={"photo2.jpg"}/></div>
                        <div className="photo-box"><img src={"photo3.jpg"}/></div>
                        <div className="photo-box"><img src={"photo4.jpg"}/></div>
                    </div>
                </div>

                <div className="galeria-artes">
                    <div className="galeria-head">
                        <h5>Galeria de artes</h5>
                    </div>
                    <div className="galeria-body">
                        <div className="photo-box"><img src={"art1.png"}/></div>
                        <div className="photo-box"><img src={"art3.png"}/></div>
                        <div className="photo-box"><img src={"art2.png"}/></div>
                    </div>
                </div>

                <div className="galeria-faixas">
                    <div className="galeria-head">
                        <h5>Galeria de faixas</h5>
                    </div>
                    <div className="galeria-body">
                        <div className="audio-box">
                            audio
                        </div>
                        <div className="audio-box">
                            audio
                        </div>
                        <div className="audio-box">
                            audio
                        </div>
                        <div className="audio-box">
                            audio
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

//    background-color: rgb(233, 233, 230);
