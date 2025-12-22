import { WorkID } from "./workID.js";
import { IconHTML } from "./iconHTML.js";

export const skillsData = [
    {
        category: "#Game Development",
        item:[
            {
                id: WorkID.TierAIM,
                h1:"MVrP",
                h2:"UIとロジックを分離し、\nView差し替え・仕様変更に耐える設計\n\nR3を用いて状態駆動・疎結合を維持",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
            {
                id: WorkID.Grainium,
                h1:"Editor Extension",
                h2:"開発効率向上を目的とした\nエディタ拡張を実装\n\n実行時コードと明確に分離し、\nビルド影響を排除",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
            {
                id: WorkID.TierAIM,
                h1:"URP / Custom Post Effect",
                h2:"URPレンダリングパスを理解した上で\n既存Volumeに依存しない\nポストエフェクトを設計・運用",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
        ],
    },
]