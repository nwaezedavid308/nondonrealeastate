import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatConfigs } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [...FlatConfigs.envs(["next/core-web-vitals"])];