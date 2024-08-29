import { QuartzTransformerPlugin } from "../types"
 
 
export const Nutshell: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  return {
    name: "Nutshell",
    markdownPlugins() {
      return []
    },
    htmlPlugins() {
        return []
    },
    externalResources() {
        return {
            js: [
                {
                    src: "https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js",
                    loadTime: "beforeDOMReady",
                    contentType: "external",
                },
            ],
        }
      }
  }
}
