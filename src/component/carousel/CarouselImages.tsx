import SWFamily from "../images/147774.webp";
import SWP1 from "../images/star-wars-skywalker_66578_3840x2160.webp";
import StarWar from "../images/star-wars-the-rise-of-skywalker-poster-4k-2019-na-3840x2160.webp";


interface Props {
    id:number;
    image:string;
}

export const images: Props[] = [
    {
        id: 1,
        image: SWFamily,

    },
    {
        id: 2,
        image: SWP1,
    },
    {
        id: 3,
        image: StarWar,
    }
]