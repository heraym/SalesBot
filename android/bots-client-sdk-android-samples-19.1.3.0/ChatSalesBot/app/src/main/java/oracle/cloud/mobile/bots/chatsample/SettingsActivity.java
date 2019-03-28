package oracle.cloud.mobile.bots.chatsample;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.AutoCompleteTextView;
import android.widget.Button;

import oracle.cloud.mobile.core.Bots;
import oracle.cloud.mobile.core.BotsCallback;
import oracle.cloud.mobile.core.Settings;

public class SettingsActivity extends AppCompatActivity {

    private static final String TAG = "SettingsActivity";
    private String mAppID;
    private AutoCompleteTextView mAPPIDView;
    private Button mOKButton;
    private Button mCancelButton;
    private Context mContext;
    private SharedPreferences mSharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.settings);

        setupActionBar();

        mContext = getApplicationContext();

        mAPPIDView = (AutoCompleteTextView)findViewById(R.id.appId);

        mOKButton = (Button)findViewById(R.id.ok);

        mCancelButton = (Button)findViewById(R.id.cancel);

        mSharedPreferences = getSharedPreferences(ChatSample.class.getPackage().getName() , Context.MODE_PRIVATE);

        final String appID = mSharedPreferences.getString("last_bot_app_id", null);

        if(appID != null){
            mAPPIDView.setText(appID);
        }

        Log.d(TAG,"App ID "+mAppID);

        mOKButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mAppID = mAPPIDView.getText().toString();

                if(mAppID.isEmpty() || !mAppID.matches("^[a-z0-9]*$")){
                    mAPPIDView.setError("Invalid App Id, App Id should contain only lowercase and numbers");
                }
                else if(appID!= null && appID.equals(mAppID)) {
                    Intent intent = new Intent(mContext, MainActivity.class);
                    startActivity(intent);
                }
                else{
                    Bots.init(getApplication(), new Settings(mAppID), new BotsCallback() {
                        @Override
                        public void run(Response response) {
                            // Handle init response here!
                            if(response.getError()!=null){
                                mAPPIDView.setError(response.getError());
                            }else{
                                mSharedPreferences.edit().putString("last_bot_app_id", mAppID).apply();
                                Intent intent = new Intent(mContext, MainActivity.class);
                                startActivity(intent);
                            }
                        }
                    });
                }
            }
        });

        mCancelButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(intent);
                finish();
            }
        });

    }

    /**
     * Set up the {@link android.app.ActionBar}, if the API is available.
     */
    private void setupActionBar() {
        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            // Show the Up button in the action bar.
            actionBar.setDisplayHomeAsUpEnabled(true);
        }
    }

}
