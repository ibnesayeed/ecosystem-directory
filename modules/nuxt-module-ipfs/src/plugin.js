/*
 *
 * 🔌 [Plugin | NuxtPluginIpfs] Methods
 *
 */

console.log(`🔌 [Plugin | NuxtPluginIpfs] Methods`)

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ------------------------------------------------------------------ relativity
const Relativity = (path) => {
  const append = path.charAt(0) === '/' ? path.slice(1) : path
  if (process.env.NODE_ENV !== 'development') {
    if (typeof window !== 'undefined') { return path }
    return `/relativity/${append}`
  }
  return path
}

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default ({}, inject) => {
  inject('relativity', Relativity)
}