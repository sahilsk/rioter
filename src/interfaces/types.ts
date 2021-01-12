
export interface IConfig {
    datadragon:Map<string, string>
}

export interface IChampion {
    version: string
    id: string
    key: string
    name: string
    title: string
    blurb: string
    info: Map<string,string>
    image: Map<string,string>
    tags: string[]
    stats: Map<string,string>
}
