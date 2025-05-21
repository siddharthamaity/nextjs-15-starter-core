import { Fragment } from 'react';

import Link from 'next/link';

import './SetupDetails.css';

interface Feature {
    name: string;
}

interface Plugin {
    name: string;
    githubUrl: string;
}

const FEATURES: Feature[] = [
    { name: 'Next.js 15' },
    { name: 'React 19' },
    { name: 'Typescript 5' },
    {
        name: 'ESLint 9'
    },
    { name: 'Prettier 3' },
    { name: 'App Directory' },
    { name: 'System, Light & Dark Mode' },
    { name: 'Next Bundle Analyzer' },
    { name: 'Dockerfile for Node.js 22.15.1 & Bun 1.2.13 (alpine)' }
];

const ESLINT_PLUGINS: Plugin[] = [
    { name: '@eslint/js', githubUrl: 'https://github.com/eslint/eslint' },
    { name: 'typescript-eslint', githubUrl: 'https://github.com/typescript-eslint/typescript-eslint' },
    { name: 'eslint-plugin-react', githubUrl: 'https://github.com/jsx-eslint/eslint-plugin-react' },
    { name: '@next/eslint-plugin-next', githubUrl: 'https://github.com/vercel/next.js' },
    { name: 'eslint-config-prettier', githubUrl: 'https://github.com/prettier/eslint-config-prettier' },
    { name: 'eslint-plugin-import', githubUrl: 'https://github.com/import-js/eslint-plugin-import' },
    { name: 'eslint-plugin-promise', githubUrl: 'https://github.com/eslint-community/eslint-plugin-promise' }
];

const PRETTIER_PLUGINS: Plugin[] = [
    {
        name: '@trivago/prettier-plugin-sort-imports',
        githubUrl: 'https://github.com/trivago/prettier-plugin-sort-imports'
    }
];

const SetupDetails: React.FC = () => {
    return (
        <div
            style={{
                maxWidth: '800px'
            }}>
            <div>
                <ol className='features-list'>
                    {FEATURES.map((feature, index) => (
                        <Fragment key={feature.name}>
                            <li>
                                <h2 className='feature-name'>{feature.name}</h2>
                            </li>
                            {index < FEATURES.length - 1 && <span className='feature-separator'>•</span>}
                        </Fragment>
                    ))}
                </ol>
            </div>
            <div className='plugin-section'>
                <ul className='plugin-list'>
                    {ESLINT_PLUGINS.map((setup) => (
                        <li key={setup.name} className='plugin-link'>
                            <Link href={setup.githubUrl} target='_blank' rel='noreferrer'>
                                {setup.name} <span className='plugin-arrow'>↗</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='plugin-section'>
                <ul className='plugin-list'>
                    {PRETTIER_PLUGINS.map((plugin) => (
                        <li key={plugin.name} className='plugin-link'>
                            <Link href={plugin.githubUrl} target='_blank' rel='noreferrer'>
                                {plugin.name} <span className='plugin-arrow'>↗</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SetupDetails;
