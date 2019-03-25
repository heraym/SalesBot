package oracle.cloud.mobile.bots.chatsample;


import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import oracle.cloud.mobile.core.Bots;
import oracle.cloud.mobile.core.BotsCallback;
import oracle.cloud.mobile.core.InitializationStatus;
import oracle.cloud.mobile.core.Settings;
import oracle.cloud.mobile.core.User;
import oracle.cloud.mobile.ui.ConversationActivity;


public class MainActivity extends AppCompatActivity {

    private static final String TAG = "MainActivity";
    private Button mChat;
    private SharedPreferences mSharedPreferences;
    private String mAppID;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mSharedPreferences = getSharedPreferences(ChatSample.class.getPackage().getName() , Context.MODE_PRIVATE);

        mAppID = mSharedPreferences.getString("last_bot_app_id", null);

        mChat = findViewById(R.id.chat);
        mChat.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if (Bots.getInitializationStatus() == InitializationStatus.Success) {
                    Log.d(TAG,"Already Initialized with App ID "+ mAppID);



                    //User properties can be set the below way

                    User.getCurrentUser().setFirstName("abc");
                    User.getCurrentUser().setLastName("xyz");
                    User.getCurrentUser().setEmail("abc.xyz@gmail.com");
                    User.getCurrentUser().setSignedUpAt(new Date());

                    //Custom Properties can be set below way to send extra information

                    final Map<String, Object> customProperties = new HashMap<>();
                    customProperties.put("zipCode", "123456");
                    customProperties.put("locale", "EN");
                    customProperties.put("Country", "NZ");
                    customProperties.put("province", "central");
                    User.getCurrentUser().addProperties(customProperties);

                    Log.d(TAG, "User "+ User.getCurrentUser().toString());

                    ConversationActivity.show(getApplicationContext(), Intent.FLAG_ACTIVITY_NEW_TASK);
                }
                else{

                    Log.d(TAG,"App ID "+ mAppID);

                    Bots.init(getApplication(), new Settings(mAppID), new BotsCallback() {
                        @Override
                        public void run(Response response) {
                            // Handle init response here!
                            if(response.getError()==null){
                                ConversationActivity.show(getApplicationContext(), Intent.FLAG_ACTIVITY_NEW_TASK);
                            }
                        }
                    });
                }

            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);

        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {

            case R.id.menu_settings:
                Intent intent = new Intent(getBaseContext(), SettingsActivity.class);
                startActivity(intent);
                return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onBackPressed() {

    }
}