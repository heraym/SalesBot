# Oracle Digital Assistant Android Client SDK v 19.1.3.0 Readme


1. Download the `bots-client-sdk-android-19.1.3.0.zip` file. You can download this from the [Oracle Technology Network’s Oracle Digital Assistant downloads page](https://www.oracle.com/technetwork/topics/cloud/downloads/amce-downloads-4478270.html).

2. Extract the downloaded ZIP file and look for the `bots-client-sdk-android-core-v19.1.3.aar` and `bots-client-sdk-android-ui-v19.1.3.aar` files.

3. Add these files to your app as modules:

    1. In Android Studio, click **File > New > New Module > Import .JAR/.AAR Package**.

    1. Select the  `bots-client-sdk-android-core aar` file from the extracted SDK directory. If needed change the Subproject Name. Otherwise, click **Finish**.

    1. Repeat the previous step to create another module for the `bots-client-sdk-android-ui-19.1.3.0.aar` file.

4. Add the following lines to the project’s `build.gradle` file:


         // place a dependecy on the created modules to use bots SDK
         compile project(':bots-client-sdk-android-core')
         compile project(':bots-client-sdk-android-ui')

         //Other dependencies used by bots SDK
         implementation 'com.google.code.gson:gson:2.4'
         implementation 'com.squareup.okhttp3:okhttp:3.4.1'
         implementation 'com.google.firebase:firebase-core:12.0.1'
         implementation 'com.google.firebase:firebase-messaging:12.0.1'
         implementation 'com.android.support:support-annotations:27.1.1'
     
     
         implementation 'com.github.bumptech.glide:glide:4.6.1'
         implementation 'com.android.support:support-v4:27.1.1'
         implementation 'com.android.support:appcompat-v7:27.1.1'
         implementation 'com.android.support:exifinterface:27.1.1'
         implementation 'com.android.support:recyclerview-v7:27.1.1'
         implementation 'com.android.support:support-media-compat:27.1.1'
         implementation 'com.google.android.gms:play-services-location:12.0.1'
         implementation 'com.davemorrissey.labs:subsampling-scale-image-view:3.10.0'

5. Add the code that initializes the Bots Android SDK. Be sure to replace `YOUR_APP_ID` with the App ID generated for the Android channel by Oracle Intelligent Bots.

         import android.app.Application;
         import android.util.Log;

         import oracle.cloud.mobile.core.Bots;
         import oracle.cloud.mobile.core.BotsCallback;
         import oracle.cloud.mobile.core.Settings;

         public class <YOUR_APPLICATION_NAME> extends Application {

         private static final String TAG = "YOUR_APPLICATION_NAME";

         @Override
         public void onCreate() {
             super.onCreate();

             Bots.init(this, new Settings("YOUR_APP_ID"), new BotsCallback() {
                 @Override
                 public void run(Response response) {
                     // Handle init response here!
                     if(response.getError()!=null){
                         Log.d(TAG, "Initialized");
                     }else{
                         Log.e(TAG, response.getError());
                     }
                 }
             });
           }
         }

6. Add the application name to the Android Manifest:

        <application
            android:name=".YOUR_APPLICATION_NAME">
        </application>

7. Call `ConversationActivity.show` in an activity to launch messaging UI for the bot whose App ID has been used to initialize the Bots Android SDK in the `Application` class:

          ConversationActivity.show(getApplicationContext());

## Unsupported APIs ##
The APIs that are related to following features are not supported in the current release:

- Push Notification (`FcmInstanceIDListenerService`, `FcmService`, `Notifier`, `NotificationController`)
- Payments (`CreditCard`, `CardSummary`, `PaymentStatus`)
- User Authentication (`LoginResult`, `LogoutResult`)

## License ##
Copyright (c) 2018, 2019 Oracle Corporation and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.