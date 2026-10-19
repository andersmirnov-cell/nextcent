import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const assetFolders: Record<string, RegExp> = {
	images: /\.(png|jpe?g|gif|svg|webp|avif|ico)$/i,
	fonts: /\.(woff2?|ttf|otf|eot)$/i,
	css: /\.css$/i,
	media: /\.(mp4|webm|ogg|mp3|wav)$/i,
};

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		// Keep SVGs as separate files (needed for CSS mask-image); other assets use the default 4KB limit
		assetsInlineLimit: (filePath) => (filePath.endsWith(".svg") ? false : undefined),
		rolldownOptions: {
			output: {
				entryFileNames: "assets/js/[name]-[hash].js",
				chunkFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: (assetInfo) => {
					const name = assetInfo.names[0] ?? "";
					const folder = Object.keys(assetFolders).find((key) =>
						assetFolders[key].test(name),
					);

					return `assets/${folder ?? "other"}/[name]-[hash][extname]`;
				},
			},
		},
	},
});
