import { CardGaleriaBlock } from "./CardGaleriaBlock";
import { CardServices } from "./CardServices";
import { FormEnd } from "./FormEnd";

export function MainRight() {
    return (
        <>
        <div className="mainright">

            <CardGaleriaBlock />
            <CardServices />
            <FormEnd />
            
        </div>
        </>
    )
}