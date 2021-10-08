package com.lewin.rnsystemfilebrower;
import android.app.Activity;

import android.content.Intent;

import android.net.Uri;


import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;


public class RNSystemFileBrower extends ReactContextBaseJavaModule {


    private Promise callBack;

    public RNSystemFileBrower(final ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(new ActivityEventListener() {
            @Override
            public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
                WritableArray writableMapList = Arguments.createArray();
                Uri uri = data.getData();
                writableMapList.pushString(uri.toString());

                WritableMap map = Arguments.createMap();
                map.putArray("urls", writableMapList);
                callBack.resolve(map);
            }
            @Override
            public void onNewIntent(Intent intent) {

            }
        });
    }

    @Override
    public String getName() {
        return "RNSystemFileBrower";
    }

    @ReactMethod
    public void openFileBrower(ReadableMap params, Promise promise) {
        try {
            callBack = promise;
            Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
             //intent.setType(“image/*”);//选择图片
            //intent.setType(“audio/*”); //选择音频
            //intent.setType(“video/*”); //选择视频 （mp4 3gp 是android支持的视频格式）
            //intent.setType(“video/*;image/*”);//同时选择视频和图片
            if (params.hasKey("types")) {
                intent.setType(params.getString("types"));//无类型限制
            } else {
                intent.setType("*/*");//无类型限制
            }
//            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.addCategory(Intent.CATEGORY_OPENABLE);
            getCurrentActivity().startActivityForResult(intent, 1);
//            promise.resolve(isInstalled(this.getReactApplicationContext(), packageName));
        }catch (Exception e) {
            e.printStackTrace();
            promise.reject(e);
        }
    }

}
