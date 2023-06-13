package com.lla.emarsyssdk;


import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;
import android.util.Log;

import com.emarsys.Emarsys;
import com.emarsys.service.EmarsysFirebaseMessagingServiceUtils;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class EmarsysPushNotification extends FirebaseMessagingService {

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        Emarsys.getPush().setPushToken(token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        boolean handledByEmarsysSDK = EmarsysFirebaseMessagingServiceUtils.handleMessage(this, remoteMessage);

        if (!handledByEmarsysSDK) {
            //this is firebase!!!!
//            this has to be called!
//            PushNotificationsPlugin.sendRemoteMessage(remoteMessage);
        }

        EmarsysSDKCustomPlugin.sendRemoteMessage(remoteMessage);

    }


}