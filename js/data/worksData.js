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
        ],
        description: "Grainiumは、Unityエディター内で使用できる強力なエディター拡張ツールです。開発者が効率的に作業できるように設計されており、プロジェクトの管理や操作を簡素化します。",
    },
    {
        id: WorkID.Silt,
        name: "Silt",
        about:"Unity向けフレームワーク",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ],
        description: "Siltは、Unityエンジン向けに開発された柔軟で拡張性の高いフレームワークです。ゲーム開発者が迅速にプロジェクトを立ち上げ、効率的に開発を進めるための基盤を提供します。",
    },
    {
        id: WorkID.TierAIM,
        name: "TierA.I.M.",
        about:"2Dリアクションシューティング",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ],
        description: "TierA.I.M.は、プレイヤーが多彩戦術を駆使して敵と戦うゲームです。スピーディーなアクションと戦略的なプレイが求められるエキサイティングな体験を提供します。",
    },
    {
        id: WorkID.GitHubToNASBackUp,
        name: "GitHub自動バックアップ",
        about:"リポジトリ消失リスクをゼロにする自動バックアップ基盤",
        languages:[
            IconHTML.Git,
            IconHTML.GitHub,
            IconHTML.Python,
        ],
        description: "このプロジェクトは、GitHub上のリポジトリを定期的にNAS（Network Attached Storage）に自動バックアップするシステムを構築しました。これにより、リポジトリの消失リスクを最小限に抑え、データの安全性と可用性を確保します。",
    },
    {
        id: WorkID.PortfolioWebsite,
        name: "Portfolio Website",
        about:"このポートフォリオサイト",
        languages:[
            IconHTML.HTML5,
            IconHTML.CSS3,
            IconHTML.JS,
        ],
        description: "スタイル性と可読性を重視し、訪問者にとって魅力的で使いやすいデザインを実現しています。",
    },
    {
        id:-1,
        name:"",
        about:"",
        languages:[],
    },
];