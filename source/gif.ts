import { IBlock } from "./blocks/block";
import { Header } from "./blocks/header";
import { LogicalScreenDescriptor } from "./blocks/logical-screen-descriptor";

export interface IGif {
    readonly header: IBlock<Header>;
    readonly logicalScreenDescriptor: IBlock<LogicalScreenDescriptor>;
}