package com.example.simplemathapp;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class AboutPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about_page);

        if (getIntent().hasExtra("package name")) {
            TextView tv = (TextView) findViewById(R.id.aboutTextView);
            String text = getIntent().getExtras().getString("package name");
            tv.setText(text);
        }
    }
}