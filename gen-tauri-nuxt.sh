APP_NAME=$1
if [ -z "$APP_NAME" ]; then
    echo "Please provide the app name as the first argument"
    read APP_NAME
fi

npx nuxi init $APP_NAME
cd $APP_NAME
pnpm i

echo "// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-22',
    devtools: { enabled: false },
    ssr: false // SSR must be turned off
})" > nuxt.config.ts
pnpm install --save-dev @tauri-apps/cli
# use sed to add "tauri": "tauri" to package.json -> scripts
sed -i '' 's/"postinstall": "nuxt prepare"/"postinstall": "nuxt prepare",\n    "tauri": "tauri"/g' package.json
echo "\033[0;31m\nFor the following questions,\nkeep defaults for all questions except for the 'frontend build command'. \nUse 'npm run generate' \n\033[0m"
pnpm run tauri init
# need user interaction here
# Keep defaults for all questions except for the frontend build command
# use `npm run generate`
pnpm install @tauri-apps/api


