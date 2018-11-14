import { IRenderLocation } from '../../dom';
import { IViewFactory } from '../../lifecycle';
import { LifecycleFlags } from '../../observation';
import { ICustomAttribute } from '../lifecycle-render';
export interface Replaceable extends ICustomAttribute {
}
export declare class Replaceable {
    private factory;
    private currentView;
    constructor(factory: IViewFactory, location: IRenderLocation);
    binding(flags: LifecycleFlags): void;
    attaching(flags: LifecycleFlags): void;
    detaching(flags: LifecycleFlags): void;
    unbinding(flags: LifecycleFlags): void;
}
//# sourceMappingURL=replaceable.d.ts.map