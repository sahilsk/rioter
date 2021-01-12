/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    datadragon: Datadragon
  }
  interface Datadragon {
    champion: string
  }
  export const config: Config
  export type Config = IConfig
}
