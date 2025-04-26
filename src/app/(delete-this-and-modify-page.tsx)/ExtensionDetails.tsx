import Link from 'next/link';

import './ExtensionDetails.css';

const RECOMMENDED_EXTENSIONS: string[] = [
    'PulkitGangwar.nextjs-snippets',
    'formulahendry.auto-close-tag',
    'aaron-bond.better-comments',
    'mikestead.dotenv',
    'EditorConfig.EditorConfig',
    'dbaeumer.vscode-eslint',
    'MikeBovenlander.formate',
    'donjayamanne.githistory',
    'wix.vscode-import-cost',
    'sburg.vscode-javascript-booster',
    'christian-kohler.npm-intellisense',
    'esbenp.prettier-vscode',
    'Gruntfuggly.todo-tree',
    'ChakrounAnas.turbo-console-log',
    'codeandstuff.package-json-upgrade',
    'KnisterPeter.vscode-commitizen',
    'yzhang.markdown-all-in-one'
];

interface ExtensionStatistics {
    statisticName: string;
    value: number;
}

interface ExtensionFile {
    assetType: string;
    source: string;
}

interface ExtensionData {
    displayName: string;
    statistics: ExtensionStatistics[];
    versions: { files: ExtensionFile[] }[];
}

interface ExtensionDetails {
    name: string;
    displayName: string;
    downloadCount: number;
    iconUri: string;
}

const fetchExtensionDetails = async (extension: string): Promise<ExtensionDetails> => {
    const response = await fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json;api-version=3.0-preview.1'
        },
        body: JSON.stringify({
            filters: [
                {
                    criteria: [{ filterType: 7, value: extension }]
                }
            ],
            flags: 914
        })
    });

    const data = await response.json();
    const extensionData: ExtensionData = data.results[0].extensions[0];

    const downloadCount = extensionData.statistics.find((stat) => stat.statisticName === 'install')?.value ?? 0;
    const iconUri =
        extensionData.versions[0].files.find(
            (file) => file.assetType === 'Microsoft.VisualStudio.Services.Icons.Default'
        )?.source || '';

    return { name: extension, displayName: extensionData.displayName, downloadCount, iconUri };
};

const ExtensionDetails: React.FC = async () => {
    const extensionDetails = await Promise.all(RECOMMENDED_EXTENSIONS.map(fetchExtensionDetails));

    return (
        <div className='extension-container'>
            {extensionDetails.map((extension) => (
                <div key={extension.name} className='extension-item'>
                    <Link href={``} target='_blank'>
                        <img className='size-9' src={extension.iconUri} alt={extension.name} />
                    </Link>
                    <div className='extension-tooltip'>
                        <h3>{extension.displayName}</h3>
                        <p>Downloads: {extension.downloadCount.toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExtensionDetails;
