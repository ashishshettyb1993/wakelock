package com.wakelock; // replace com.your-app-name with your app’s name
import android.content.Context;
import android.content.Intent;
import android.os.PowerManager;
import android.view.WindowManager;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
public String getName() {
   return "CalendarModule";
}

@ReactMethod
public void createCalendarEvent() {
    ReactApplicationContext context = getReactApplicationContext();
    Intent intent = new Intent(context, MainActivity2.class);
    intent.addFlags(Intent.FLAG_ACTIVITY_MULTIPLE_TASK);
    context.startActivity(intent);
}
}