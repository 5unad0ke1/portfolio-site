import { WorkID } from "./workID.js";
import { IconHTML } from "./iconHTML.js";

export const worksData =[
    {
        id: WorkID.Grainium,
        name: "Grainium",
        about:"Unity向けエディター拡張",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ]
    },
    {
        id: WorkID.Silt,
        name: "Silt",
        about:"Unity向けフレームワーク",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ]
    },
    {
        id: WorkID.TierAIM,
        name: "TierA.I.M.",
        about:"2Dリアクションシューティング",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ]
    },
    {
        id: WorkID.GitHubToNASBackUp,
        name: "GitHub自動バックアップ",
        about:"リポジトリ消失リスクをゼロにする自動バックアップ基盤",
        languages:[
            IconHTML.Git,
            IconHTML.GitHub,
            IconHTML.Python,
        ]
    },
    {
        id:-1,
        name:"",
        about:"",
        languages:[],
    },
];