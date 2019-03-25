package oracle.cloud.mobile.bots.chatsample;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AutoCompleteTextView;
import android.widget.Button;

import oracle.cloud.mobile.core.Bots;
import oracle.cloud.mobile.core.BotsCallback;
import oracle.cloud.mobile.core.Settings;

public class LaunchActivity extends Activity {

    private static final String TAG = "BotsSampleApp";
    private AutoCompleteTextView mAPPIDView;
    private Button mContinueButton;
    private Context mContext;
    private String mAppID;
    private SharedPreferences mSharedPreferences;

    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        mContext = getApplicationContext();

        setContentView(R.layout.activity_launch);

        mAPPIDView = (AutoCompleteTextView) findViewById(R.id.appid);

        mSharedPreferences = getSharedPreferences(ChatSample.class.getPackage().getName() , Context.MODE_PRIVATE);

        mAppID = mSharedPreferences.getString("last_bot_app_id", null);

        if(mAppID != null){
            mAPPIDView.setText(mAppID);
        }

        mContinueButton = (Button) findViewById(R.id.continue_);

        Log.d(TAG,"App ID "+ mAppID);

        mContinueButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                mAppID = mAPPIDView.getText().toString();

                if(mAppID.isEmpty() || !mAppID.matches("^[a-z0-9]*$")){
                    mAPPIDView.setError("Invalid App Id, App Id should contain only lowercase and numbers");
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

    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
    }

}