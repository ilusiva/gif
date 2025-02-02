import { IBlock } from "./blocks/block";
import { Header } from "./blocks/header";

export interface IGif {
    readonly header: IBlock<Header>;
}