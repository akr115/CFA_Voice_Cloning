import { PathLike } from "fs"
import { voiceCloner } from "./voiceCloner"

const test = async () => {
    const audioFile:PathLike = `/home/rashad/Downloads/mo.wav`
    const name:string = 'cri'
    const result = await voiceCloner(name, audioFile)
    console.log(result)
}

test()