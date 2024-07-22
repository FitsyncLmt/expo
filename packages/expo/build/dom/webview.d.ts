import { BridgeMessage, JSONValue } from './www-types';
import type WebView from 'react-native-webview';
import type { WebViewMessageEvent } from 'react-native-webview';
export type WebViewProps = Omit<import('react-native-webview').WebViewProps, 'source'>;
export declare const emit: <TData extends JSONValue>(message: BridgeMessage<TData>) => never;
export declare const useBridge: <TData extends JSONValue>(onSubscribe: (message: BridgeMessage<TData>) => void) => readonly [(detail: BridgeMessage<TData>) => void, {
    readonly ref: import("react").RefObject<WebView<{}>>;
    readonly onMessage: (event: WebViewMessageEvent) => void;
}];
export declare function _invokeNativeAction(actionId: string, args: any[]): Promise<any>;
export declare function _getActionsObject(): Record<string, (...args: any[]) => void | Promise<any>>;
export { default as WebView, StyleNoSelect } from './webview-wrapper';
export * from './www-types';
export { addEventListener } from './global-events';
export declare function isWebview(): boolean;
//# sourceMappingURL=webview.d.ts.map