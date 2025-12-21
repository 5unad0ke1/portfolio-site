import { WorkID } from "./workID.js";
import { IconHTML } from "./iconHTML.js";

export const skillsData = [
    {
        category: "#Game Development",
        item:[
            {
                id: WorkID.TierAIM,
                h1:"MVrP",
                h2:"R3を用い、View差し替えを前提としたMVrP設計ができる",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
            {
                id: WorkID.Grainium,
                h1:"Editor Extension",
                h2:"実行時処理に影響しない前提でエディタ拡張を実装できる",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
            {
                id: WorkID.TierAIM,
                h1:"URP / Custom Post Effect",
                h2:"Unity/URP環境で　既存Volumeに依存せず　ポストエフェクトを自作・運用できる",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
        ],
    },
]