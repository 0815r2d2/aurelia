import { InterfaceSymbol, IRegistry } from '@aurelia/kernel';
export interface ISanitizer {
    /**
     * Sanitizes the provided input.
     * @param input The input to be sanitized.
     */
    sanitize(input: string): string;
}
export declare const ISanitizer: InterfaceSymbol<ISanitizer>;
/**
 * Simple html sanitization converter to preserve whitelisted elements and attributes on a bound property containing html.
 */
export declare class SanitizeValueConverter {
    static readonly inject: ReadonlyArray<InterfaceSymbol<unknown>>;
    static register: IRegistry['register'];
    private readonly sanitizer;
    constructor(sanitizer: ISanitizer);
    /**
     * Process the provided markup that flows to the view.
     * @param untrustedMarkup The untrusted markup to be sanitized.
     */
    toView(untrustedMarkup: string): string | null;
}
//# sourceMappingURL=sanitize.d.ts.map