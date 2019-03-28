package oracle.cloud.mobile.bots.chatsample;

import android.app.Application;

import oracle.cloud.mobile.core.Bots;

public class ChatSample extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Bots.init(this);
    }
}
