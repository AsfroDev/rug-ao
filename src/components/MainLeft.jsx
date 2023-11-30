import { CardMainPhoto } from "./CardMainPhoto";
import { CardArtistsConf } from "./CardArtistsConf";
import { CardJobs } from "./CardJobs";
import { QuemSomos } from "./QuemSomos";

export function MainLeft() {
    return (
        <>
            <div className="mainleft">

                < CardMainPhoto />
                < CardArtistsConf />
                < CardJobs />
                < QuemSomos />


            </div>
        </>
    )
}