import { is_env_browser } from './is_env_browser'
/**
 * is true if the environment is not browser
 */
export const is_env_server = !is_env_browser
export default is_env_server