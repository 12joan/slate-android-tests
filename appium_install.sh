is_installed() { 
  appium driver list 2>&1 | grep -q "$1.*\[installed"
}

ensure_installed() {
  if is_installed "$1"; then
    appium driver update "$1"
  else
    appium driver install "$1"
  fi
}

ensure_installed uiautomator2
