/// <reference types="@capacitor/cli" />

import type {
  SetContactOptions
} from './interfaces/base';
import type { PluginListenerHandle } from '@capacitor/core';

import type { PushMessageEvent, TokenResult } from './interfaces/push';
import type { ITokenInitializationStatus, PushMessageDTO, UserInformationDTO } from './interfaces/pushAndroid';


type ConsoleLogLevels = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'basic';

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    EmarsysSDKCustom?: {
      mobileEngageApplicationCode?: string;
      merchantId?: string;
      consoleLogLevels?: ConsoleLogLevels[];
    };
  }
}

export interface EmarsysSDKCustomPlugin {
  
  echo(options: { value: string }): Promise<{ value: string }>;
  
  addListener(
    eventName: 'pushMessageEvent',
    listenerFunc: (event: PushMessageEvent) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  getUUID(value: string): Promise<{ value: string }>;

  
  requestPermissions(): Promise<PermissionStatus>;

  checkPermissions(): Promise<PermissionStatus>;

  setContact(options: SetContactOptions): Promise<void>;

  getPushToken(): Promise<TokenResult>;

  register(): Promise<TokenResult>;

  checkPermissions(): Promise<PermissionStatus>;

  clearContact(options: SetContactOptions): Promise<void>;


  //----for android
  setPushTokenFirebase(data: {
    value: string;
  }): Promise<ITokenInitializationStatus>;

  
  setPushMessage(data: PushMessageDTO): Promise<{ value: PushMessageDTO }>;
  getUserInfo(data: UserInformationDTO): Promise<{ value: unknown }>;

  setUser(data: {
    value: string;
  }): Promise<void>;

  clearUser():Promise<void>;

  getDeviceInformation(options?: {
    value?: string;
  }): Promise<{ value: string }>;

  trackEvent(options?: { eventName: string, eventAttributes: any }): Promise<{ value: string }>;
  loadInlineInapp(data: { inAppName: string }): Promise<void>;

  addListener(
    eventName: 'EmarsysInAppDeepLink',
    listenerFunc: (event: PushMessageEvent) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'EmarsysInAppApplicationEvent',
    listenerFunc: (event: PushMessageEvent) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'EmarsysPushDeepLink',
    listenerFunc: (event: PushMessageEvent) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'EmarsysPushApplicationEvent',
    listenerFunc: (event: PushMessageEvent) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'EmarsysPushNotificationReceived',
    listenerFunc: (event: PushMessageEvent) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

// --------------------------

}
