export * from "./src/index";
import { VueConstructor } from "vue";

declare global {
  interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
    /** The module id of the context module. This may be useful for module.hot.accept. */
    id: string;
  }

  interface ComponentsMap {
    [key: string]: VueConstructor<Vue>;
  }
}
