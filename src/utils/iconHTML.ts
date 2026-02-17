export const IconMap ={
    Unity:  `devicon-unity-plain`,
    CS:     `devicon-csharp-plain`,
    Blender:`devicon-blender-original`,
    HTML5:  `devicon-html5-plain-wordmark`,
    CSS3:   `devicon-css3-plain-wordmark`,
    JS:     `devicon-javascript-plain`,
    VisualStudio:`devicon-visualstudio-plain`,
    VSCode: `devicon-vscode-plain`,
    Python: `devicon-python-plain`,
    GitHub: `devicon-github-original`,
    Git:    `devicon-git-plain`,
    Sourcetree:`devicon-sourcetree-original`,
} as const;

export type IconKey = keyof typeof IconMap;