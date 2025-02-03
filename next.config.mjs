/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '', // Deja vacío si no usas un puerto específico
                pathname: '/**', // Esto permite cualquier ruta bajo este dominio
            },
        ],
        dangerouslyAllowSVG: true,  // Permite SVGs
    },
};

export default nextConfig;
