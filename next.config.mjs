import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['localhost'],
        unoptimized: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
        });
        return config;
    },
};

export default withBundleAnalyzer(nextConfig);
