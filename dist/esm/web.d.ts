import { WebPlugin } from '@capacitor/core';
export declare class EmarsysSDKCustomWeb extends WebPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getUUID(value: string): Promise<{
        value: string;
    }>;
}
