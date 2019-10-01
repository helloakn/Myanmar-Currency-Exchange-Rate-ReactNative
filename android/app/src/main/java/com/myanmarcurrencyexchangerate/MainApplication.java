package com.myanmarcurrencyexchangerate;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;

//for firebase react
import io.invertase.firebase.admob.ReactNativeFirebaseAdmobPackage;
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import io.invertase.firebase.analytics.ReactNativeFirebaseAnalyticsPackage;
//import io.invertase.firebase.admob.ReactNativeFirebaseAdMobPackage;
import io.invertase.firebase.admob.ReactNativeFirebaseAdMobBannerAdViewManager;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }
          @Override
          protected List<ReactPackage> getPackages() {
              return Arrays.<ReactPackage>asList(
                      new MainReactPackage(),
                      new ReactNativeFirebaseAppPackage(),
                      new ReactNativeFirebaseAnalyticsPackage(),
                      new ReactNativeFirebaseAdmobPackage()
              );
          }
/*
        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          //packages.add(new ReactNativeFirebaseAppPackage());
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }
*/
        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled
  }

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
