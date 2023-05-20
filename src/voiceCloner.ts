import { Dir, PathLike } from "fs";
import { voiceClonerRequest as voiceClonerRequest } from "./voiceClonerRequest";


export const voiceCloner = async (
    name: string,
    dir: PathLike
    ) => {
    return voiceClonerRequest(name, dir);
    };



