package org.slatejs.androidtests

import android.annotation.SuppressLint
import android.annotation.TargetApi
import android.os.Build
import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import androidx.activity.ComponentActivity
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat

class MainActivity : ComponentActivity() {
  @SuppressLint("SetJavaScriptEnabled")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val webView = WebView(this)

    val assetLoader = WebViewAssetLoader.Builder()
      .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
      .build()

    webView.webViewClient = LocalContentWebViewClient(assetLoader)
    webView.settings.javaScriptEnabled = true
    webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")

    setContentView(webView)
  }
}

private class LocalContentWebViewClient(private val assetLoader: WebViewAssetLoader) : WebViewClientCompat() {
  @TargetApi(Build.VERSION_CODES.LOLLIPOP)
  override fun shouldInterceptRequest(
    view: WebView,
    request: WebResourceRequest
  ): WebResourceResponse? {
    var response = assetLoader.shouldInterceptRequest(request.url)

    // Some versions of Chrome require JS modules to have the correct MIME type
    if (request.url.toString().endsWith("js", true)) {
      response?.mimeType = "text/javascript"
    }

    return response
  }
}
