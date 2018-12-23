import { INode } from '../dom.interfaces';
export interface ISVGAnalyzer {
    isStandardSvgAttribute(node: INode, attributeName: string): boolean;
}
export declare const ISVGAnalyzer: import("@aurelia/kernel/dist/di").InterfaceSymbol<ISVGAnalyzer>;
//# sourceMappingURL=svg-analyzer.d.ts.map