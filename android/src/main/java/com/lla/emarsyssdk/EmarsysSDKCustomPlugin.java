package com.lla.emarsyssdk;

import android.util.Log;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import com.emarsys.Emarsys;
import com.emarsys.config.EmarsysConfig;

import com.emarsys.inapp.ui.InlineInAppView;

import java.io.IOException;
import java.util.Map;

@CapacitorPlugin(name = "EmarsysSDKCustom")
public class EmarsysSDKCustomPlugin extends Plugin {
    public EmarsysConfig config;
    public String emarrsysDeviceInformationConfig;
    private EmarsysSDKCustom implementation = new EmarsysSDKCustom();
    EmarsysPushNotification emarsysPushNotification = new EmarsysPushNotification();

    @Override
    public void load() {
        Log.d("INITIALIZE EMARSYS", "LOADING ...");

        config = new EmarsysConfig.Builder()
                .application(this.getActivity().getApplication()) //
                .applicationCode("EMSD5-99166")
                .merchantId("1F634D68EE4C9C7A")
                .enableVerboseConsoleLogging()
                .build();

        Log.d("Emersys", config.toString());

        Emarsys.setup(config);
        Log.d("Emersys", "EMERSYS has been configured... ");
        InlineInAppView inlineInAppView = new InlineInAppView(getContext());
        inlineInAppView.loadInApp("Emarsys_Inapp");
//        emarsysPushNotification.createNotificationChannel();
    }

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }


    // setPushTokenFirebase
    @PluginMethod
    public void setPushTokenFirebase(PluginCall call){
        String value = call.getString("value");
        System.out.println("get initialization 1 " + value);

        JSObject ret = new JSObject();
        ret.put("value", implementation.initializeEmarsys(value));
        System.out.println("after ret  put value ");

        emarsysPushNotification.onNewToken(value);

        call.resolve(ret);
    }

    @PluginMethod
    public void setUser(PluginCall call){
        String value = call.getString("value");
        emarsysPushNotification.setContactUser(value);
    }

    @PluginMethod
    public void clearUser(PluginCall call){
        String value = call.getString("value");
        emarsysPushNotification.clearContactUser();
    }

    @PluginMethod
    public void getDeviceInformation(PluginCall call) {
        String value = this.emarrsysDeviceInformationConfig;

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void trackEvent(PluginCall call) {
        String eventName = call.getString("eventName");
        String eventAttributes = call.getString("eventAttributes");
        ObjectMapper mapper = new ObjectMapper();

        try{
            Map<String, String> mappedEventAtributes = mapper.readValue(eventAttributes, Map.class);
            JSObject ret = new JSObject();
            assert eventName != null;
            Emarsys.trackCustomEvent(eventName, mappedEventAtributes);

            call.resolve(ret);
        }catch (IOException e) {
            e.printStackTrace();
        }
    }
}
