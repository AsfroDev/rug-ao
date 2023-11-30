import { MainLeft } from "./components/MainLeft";
import { MainRight } from "./components/MainRight";

export function Content() {
    return (

        <div className="center-main">
            <div className="main-windows">
               <MainLeft />
               <MainRight />
            </div>
        </div>

    )
}