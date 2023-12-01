import { CardMainPhoto } from "./CardMainPhoto";
import { CardArtistsConf } from "./CardArtistsConf";
import { CardJobs } from "./CardJobs";
import { QuemSomos } from "./QuemSomos";
import { Form } from "./Form";

export function MainLeft() {
    return (
        <>
            <div className="mainleft">

                < CardMainPhoto />
                < CardArtistsConf />
                < CardJobs />
                < QuemSomos />
                < Form />

            </div>
        </>
    )
}