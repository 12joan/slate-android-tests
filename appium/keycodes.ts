// https://android.googlesource.com/platform/frameworks/native/+/master/include/android/keycodes.h

export const AndroidKeys = {
  /** Unknown key code. */
  KEYCODE_UNKNOWN:          0,
  /** Soft Left key.
   * Usually situated below the display on phones and used as a multi-function
   * feature key for selecting a software defined function shown on the bottom left
   * of the display. */
  KEYCODE_SOFT_LEFT:        1,
  /** Soft Right key.
   * Usually situated below the display on phones and used as a multi-function
   * feature key for selecting a software defined function shown on the bottom right
   * of the display. */
  KEYCODE_SOFT_RIGHT:       2,
  /** Home key.
   * This key is handled by the framework and is never delivered to applications. */
  KEYCODE_HOME:             3,
  /** Back key. */
  KEYCODE_BACK:             4,
  /** Call key. */
  KEYCODE_CALL:             5,
  /** End Call key. */
  KEYCODE_ENDCALL:          6,
  /** '0' key. */
  KEYCODE_0:                7,
  /** '1' key. */
  KEYCODE_1:                8,
  /** '2' key. */
  KEYCODE_2:                9,
  /** '3' key. */
  KEYCODE_3:                10,
  /** '4' key. */
  KEYCODE_4:                11,
  /** '5' key. */
  KEYCODE_5:                12,
  /** '6' key. */
  KEYCODE_6:                13,
  /** '7' key. */
  KEYCODE_7:                14,
  /** '8' key. */
  KEYCODE_8:                15,
  /** '9' key. */
  KEYCODE_9:                16,
  /** '*' key. */
  KEYCODE_STAR:             17,
  /** '#' key. */
  KEYCODE_POUND:            18,
  /** Directional Pad Up key.
   * May also be synthesized from trackball motions. */
  KEYCODE_DPAD_UP:          19,
  /** Directional Pad Down key.
   * May also be synthesized from trackball motions. */
  KEYCODE_DPAD_DOWN:        20,
  /** Directional Pad Left key.
   * May also be synthesized from trackball motions. */
  KEYCODE_DPAD_LEFT:        21,
  /** Directional Pad Right key.
   * May also be synthesized from trackball motions. */
  KEYCODE_DPAD_RIGHT:       22,
  /** Directional Pad Center key.
   * May also be synthesized from trackball motions. */
  KEYCODE_DPAD_CENTER:      23,
  /** Volume Up key.
   * Adjusts the speaker volume up. */
  KEYCODE_VOLUME_UP:        24,
  /** Volume Down key.
   * Adjusts the speaker volume down. */
  KEYCODE_VOLUME_DOWN:      25,
  /** Power key. */
  KEYCODE_POWER:            26,
  /** Camera key.
   * Used to launch a camera application or take pictures. */
  KEYCODE_CAMERA:           27,
  /** Clear key. */
  KEYCODE_CLEAR:            28,
  /** 'A' key. */
  KEYCODE_A:                29,
  /** 'B' key. */
  KEYCODE_B:                30,
  /** 'C' key. */
  KEYCODE_C:                31,
  /** 'D' key. */
  KEYCODE_D:                32,
  /** 'E' key. */
  KEYCODE_E:                33,
  /** 'F' key. */
  KEYCODE_F:                34,
  /** 'G' key. */
  KEYCODE_G:                35,
  /** 'H' key. */
  KEYCODE_H:                36,
  /** 'I' key. */
  KEYCODE_I:                37,
  /** 'J' key. */
  KEYCODE_J:                38,
  /** 'K' key. */
  KEYCODE_K:                39,
  /** 'L' key. */
  KEYCODE_L:                40,
  /** 'M' key. */
  KEYCODE_M:                41,
  /** 'N' key. */
  KEYCODE_N:                42,
  /** 'O' key. */
  KEYCODE_O:                43,
  /** 'P' key. */
  KEYCODE_P:                44,
  /** 'Q' key. */
  KEYCODE_Q:                45,
  /** 'R' key. */
  KEYCODE_R:                46,
  /** 'S' key. */
  KEYCODE_S:                47,
  /** 'T' key. */
  KEYCODE_T:                48,
  /** 'U' key. */
  KEYCODE_U:                49,
  /** 'V' key. */
  KEYCODE_V:                50,
  /** 'W' key. */
  KEYCODE_W:                51,
  /** 'X' key. */
  KEYCODE_X:                52,
  /** 'Y' key. */
  KEYCODE_Y:                53,
  /** 'Z' key. */
  KEYCODE_Z:                54,
  /** ',' key. */
  KEYCODE_COMMA:            55,
  /** '.' key. */
  KEYCODE_PERIOD:           56,
  /** Left Alt modifier key. */
  KEYCODE_ALT_LEFT:         57,
  /** Right Alt modifier key. */
  KEYCODE_ALT_RIGHT:        58,
  /** Left Shift modifier key. */
  KEYCODE_SHIFT_LEFT:       59,
  /** Right Shift modifier key. */
  KEYCODE_SHIFT_RIGHT:      60,
  /** Tab key. */
  KEYCODE_TAB:              61,
  /** Space key. */
  KEYCODE_SPACE:            62,
  /** Symbol modifier key.
   * Used to enter alternate symbols. */
  KEYCODE_SYM:              63,
  /** Explorer special function key.
   * Used to launch a browser application. */
  KEYCODE_EXPLORER:         64,
  /** Envelope special function key.
   * Used to launch a mail application. */
  KEYCODE_ENVELOPE:         65,
  /** Enter key. */
  KEYCODE_ENTER:            66,
  /** Backspace key.
   * Deletes characters before the insertion point, unlike {@link KEYCODE_FORWARD_DEL}. */
  KEYCODE_DEL:              67,
  /** '`' (backtick) key. */
  KEYCODE_GRAVE:            68,
  /** '-'. */
  KEYCODE_MINUS:            69,
  /** '=' key. */
  KEYCODE_EQUALS:           70,
  /** '[' key. */
  KEYCODE_LEFT_BRACKET:     71,
  /** ']' key. */
  KEYCODE_RIGHT_BRACKET:    72,
  /** '\' key. */
  KEYCODE_BACKSLASH:        73,
  /** ';' key. */
  KEYCODE_SEMICOLON:        74,
  /** ''' (apostrophe) key. */
  KEYCODE_APOSTROPHE:       75,
  /** '/' key. */
  KEYCODE_SLASH:            76,
  /** '@' key. */
  KEYCODE_AT:               77,
  /** Number modifier key.
   * Used to enter numeric symbols.
   * This key is not {@link KEYCODE_NUM_LOCK}; it is more like {@link KEYCODE_ALT_LEFT}. */
  KEYCODE_NUM:              78,
  /** Headset Hook key.
   * Used to hang up calls and stop media. */
  KEYCODE_HEADSETHOOK:      79,
  /** Camera Focus key.
   * Used to focus the camera. */
  KEYCODE_FOCUS:            80,
  /** '+' key. */
  KEYCODE_PLUS:             81,
  /** Menu key. */
  KEYCODE_MENU:             82,
  /** Notification key. */
  KEYCODE_NOTIFICATION:     83,
  /** Search key. */
  KEYCODE_SEARCH:           84,
  /** Play/Pause media key. */
  KEYCODE_MEDIA_PLAY_PAUSE: 85,
  /** Stop media key. */
  KEYCODE_MEDIA_STOP:       86,
  /** Play Next media key. */
  KEYCODE_MEDIA_NEXT:       87,
  /** Play Previous media key. */
  KEYCODE_MEDIA_PREVIOUS:   88,
  /** Rewind media key. */
  KEYCODE_MEDIA_REWIND:     89,
  /** Fast Forward media key. */
  KEYCODE_MEDIA_FAST_FORWARD:  90,
  /** Mute key.
   * Mutes the microphone, unlike {@link KEYCODE_VOLUME_MUTE}. */
  KEYCODE_MUTE:             91,
  /** Page Up key. */
  KEYCODE_PAGE_UP:          92,
  /** Page Down key. */
  KEYCODE_PAGE_DOWN:        93,
  /** Picture Symbols modifier key.
   * Used to switch symbol sets (Emoji, Kao-moji). */
  KEYCODE_PICTSYMBOLS:      94,
  /** Switch Charset modifier key.
   * Used to switch character sets (Kanji, Katakana). */
  KEYCODE_SWITCH_CHARSET:   95,
  /** A Button key.
   * On a game controller, the A button should be either the button labeled A
   * or the first button on the bottom row of controller buttons. */
  KEYCODE_BUTTON_A:         96,
  /** B Button key.
   * On a game controller, the B button should be either the button labeled B
   * or the second button on the bottom row of controller buttons. */
  KEYCODE_BUTTON_B:         97,
  /** C Button key.
   * On a game controller, the C button should be either the button labeled C
   * or the third button on the bottom row of controller buttons. */
  KEYCODE_BUTTON_C:         98,
  /** X Button key.
   * On a game controller, the X button should be either the button labeled X
   * or the first button on the upper row of controller buttons. */
  KEYCODE_BUTTON_X:         99,
  /** Y Button key.
   * On a game controller, the Y button should be either the button labeled Y
   * or the second button on the upper row of controller buttons. */
  KEYCODE_BUTTON_Y:         100,
  /** Z Button key.
   * On a game controller, the Z button should be either the button labeled Z
   * or the third button on the upper row of controller buttons. */
  KEYCODE_BUTTON_Z:         101,
  /** L1 Button key.
   * On a game controller, the L1 button should be either the button labeled L1 (or L)
   * or the top left trigger button. */
  KEYCODE_BUTTON_L1:        102,
  /** R1 Button key.
   * On a game controller, the R1 button should be either the button labeled R1 (or R)
   * or the top right trigger button. */
  KEYCODE_BUTTON_R1:        103,
  /** L2 Button key.
   * On a game controller, the L2 button should be either the button labeled L2
   * or the bottom left trigger button. */
  KEYCODE_BUTTON_L2:        104,
  /** R2 Button key.
   * On a game controller, the R2 button should be either the button labeled R2
   * or the bottom right trigger button. */
  KEYCODE_BUTTON_R2:        105,
  /** Left Thumb Button key.
   * On a game controller, the left thumb button indicates that the left (or only)
   * joystick is pressed. */
  KEYCODE_BUTTON_THUMBL:    106,
  /** Right Thumb Button key.
   * On a game controller, the right thumb button indicates that the right
   * joystick is pressed. */
  KEYCODE_BUTTON_THUMBR:    107,
  /** Start Button key.
   * On a game controller, the button labeled Start. */
  KEYCODE_BUTTON_START:     108,
  /** Select Button key.
   * On a game controller, the button labeled Select. */
  KEYCODE_BUTTON_SELECT:    109,
  /** Mode Button key.
   * On a game controller, the button labeled Mode. */
  KEYCODE_BUTTON_MODE:      110,
  /** Escape key. */
  KEYCODE_ESCAPE:           111,
  /** Forward Delete key.
   * Deletes characters ahead of the insertion point, unlike {@link KEYCODE_DEL}. */
  KEYCODE_FORWARD_DEL:      112,
  /** Left Control modifier key. */
  KEYCODE_CTRL_LEFT:        113,
  /** Right Control modifier key. */
  KEYCODE_CTRL_RIGHT:       114,
  /** Caps Lock key. */
  KEYCODE_CAPS_LOCK:        115,
  /** Scroll Lock key. */
  KEYCODE_SCROLL_LOCK:      116,
  /** Left Meta modifier key. */
  KEYCODE_META_LEFT:        117,
  /** Right Meta modifier key. */
  KEYCODE_META_RIGHT:       118,
  /** Function modifier key. */
  KEYCODE_FUNCTION:         119,
  /** System Request / Print Screen key. */
  KEYCODE_SYSRQ:            120,
  /** Break / Pause key. */
  KEYCODE_BREAK:            121,
  /** Home Movement key.
   * Used for scrolling or moving the cursor around to the start of a line
   * or to the top of a list. */
  KEYCODE_MOVE_HOME:        122,
  /** End Movement key.
   * Used for scrolling or moving the cursor around to the end of a line
   * or to the bottom of a list. */
  KEYCODE_MOVE_END:         123,
  /** Insert key.
   * Toggles insert / overwrite edit mode. */
  KEYCODE_INSERT:           124,
  /** Forward key.
   * Navigates forward in the history stack.  Complement of {@link KEYCODE_BACK}. */
  KEYCODE_FORWARD:          125,
  /** Play media key. */
  KEYCODE_MEDIA_PLAY:       126,
  /** Pause media key. */
  KEYCODE_MEDIA_PAUSE:      127,
  /** Close media key.
   * May be used to close a CD tray, for example. */
  KEYCODE_MEDIA_CLOSE:      128,
  /** Eject media key.
   * May be used to eject a CD tray, for example. */
  KEYCODE_MEDIA_EJECT:      129,
  /** Record media key. */
  KEYCODE_MEDIA_RECORD:     130,
  /** F1 key. */
  KEYCODE_F1:               131,
  /** F2 key. */
  KEYCODE_F2:               132,
  /** F3 key. */
  KEYCODE_F3:               133,
  /** F4 key. */
  KEYCODE_F4:               134,
  /** F5 key. */
  KEYCODE_F5:               135,
  /** F6 key. */
  KEYCODE_F6:               136,
  /** F7 key. */
  KEYCODE_F7:               137,
  /** F8 key. */
  KEYCODE_F8:               138,
  /** F9 key. */
  KEYCODE_F9:               139,
  /** F10 key. */
  KEYCODE_F10:              140,
  /** F11 key. */
  KEYCODE_F11:              141,
  /** F12 key. */
  KEYCODE_F12:              142,
  /** Num Lock key.
   * This is the Num Lock key; it is different from {@link KEYCODE_NUM}.
   * This key alters the behavior of other keys on the numeric keypad. */
  KEYCODE_NUM_LOCK:         143,
  /** Numeric keypad '0' key. */
  KEYCODE_NUMPAD_0:         144,
  /** Numeric keypad '1' key. */
  KEYCODE_NUMPAD_1:         145,
  /** Numeric keypad '2' key. */
  KEYCODE_NUMPAD_2:         146,
  /** Numeric keypad '3' key. */
  KEYCODE_NUMPAD_3:         147,
  /** Numeric keypad '4' key. */
  KEYCODE_NUMPAD_4:         148,
  /** Numeric keypad '5' key. */
  KEYCODE_NUMPAD_5:         149,
  /** Numeric keypad '6' key. */
  KEYCODE_NUMPAD_6:         150,
  /** Numeric keypad '7' key. */
  KEYCODE_NUMPAD_7:         151,
  /** Numeric keypad '8' key. */
  KEYCODE_NUMPAD_8:         152,
  /** Numeric keypad '9' key. */
  KEYCODE_NUMPAD_9:         153,
  /** Numeric keypad '/' key (for division). */
  KEYCODE_NUMPAD_DIVIDE:    154,
  /** Numeric keypad '*' key (for multiplication). */
  KEYCODE_NUMPAD_MULTIPLY:  155,
  /** Numeric keypad '-' key (for subtraction). */
  KEYCODE_NUMPAD_SUBTRACT:  156,
  /** Numeric keypad '+' key (for addition). */
  KEYCODE_NUMPAD_ADD:       157,
  /** Numeric keypad '.' key (for decimals or digit grouping). */
  KEYCODE_NUMPAD_DOT:       158,
  /** Numeric keypad ',' key (for decimals or digit grouping). */
  KEYCODE_NUMPAD_COMMA:     159,
  /** Numeric keypad Enter key. */
  KEYCODE_NUMPAD_ENTER:     160,
  /** Numeric keypad '=' key. */
  KEYCODE_NUMPAD_EQUALS:    161,
  /** Numeric keypad '(' key. */
  KEYCODE_NUMPAD_LEFT_PAREN:  162,
  /** Numeric keypad ')' key. */
  KEYCODE_NUMPAD_RIGHT_PAREN:  163,
  /** Volume Mute key.
   * Mutes the speaker, unlike {@link KEYCODE_MUTE}.
   * This key should normally be implemented as a toggle such that the first press
   * mutes the speaker and the second press restores the original volume. */
  KEYCODE_VOLUME_MUTE:      164,
  /** Info key.
   * Common on TV remotes to show additional information related to what is
   * currently being viewed. */
  KEYCODE_INFO:             165,
  /** Channel up key.
   * On TV remotes, increments the television channel. */
  KEYCODE_CHANNEL_UP:       166,
  /** Channel down key.
   * On TV remotes, decrements the television channel. */
  KEYCODE_CHANNEL_DOWN:     167,
  /** Zoom in key. */
  KEYCODE_ZOOM_IN:          168,
  /** Zoom out key. */
  KEYCODE_ZOOM_OUT:         169,
  /** TV key.
   * On TV remotes, switches to viewing live TV. */
  KEYCODE_TV:               170,
  /** Window key.
   * On TV remotes, toggles picture-in-picture mode or other windowing functions. */
  KEYCODE_WINDOW:           171,
  /** Guide key.
   * On TV remotes, shows a programming guide. */
  KEYCODE_GUIDE:            172,
  /** DVR key.
   * On some TV remotes, switches to a DVR mode for recorded shows. */
  KEYCODE_DVR:              173,
  /** Bookmark key.
   * On some TV remotes, bookmarks content or web pages. */
  KEYCODE_BOOKMARK:         174,
  /** Toggle captions key.
   * Switches the mode for closed-captioning text, for example during television shows. */
  KEYCODE_CAPTIONS:         175,
  /** Settings key.
   * Starts the system settings activity. */
  KEYCODE_SETTINGS:         176,
  /** TV power key.
   * On TV remotes, toggles the power on a television screen. */
  KEYCODE_TV_POWER:         177,
  /** TV input key.
   * On TV remotes, switches the input on a television screen. */
  KEYCODE_TV_INPUT:         178,
  /** Set-top-box power key.
   * On TV remotes, toggles the power on an external Set-top-box. */
  KEYCODE_STB_POWER:        179,
  /** Set-top-box input key.
   * On TV remotes, switches the input mode on an external Set-top-box. */
  KEYCODE_STB_INPUT:        180,
  /** A/V Receiver power key.
   * On TV remotes, toggles the power on an external A/V Receiver. */
  KEYCODE_AVR_POWER:        181,
  /** A/V Receiver input key.
   * On TV remotes, switches the input mode on an external A/V Receiver. */
  KEYCODE_AVR_INPUT:        182,
  /** Red "programmable" key.
   * On TV remotes, acts as a contextual/programmable key. */
  KEYCODE_PROG_RED:         183,
  /** Green "programmable" key.
   * On TV remotes, actsas a contextual/programmable key. */
  KEYCODE_PROG_GREEN:       184,
  /** Yellow "programmable" key.
   * On TV remotes, acts as a contextual/programmable key. */
  KEYCODE_PROG_YELLOW:      185,
  /** Blue "programmable" key.
   * On TV remotes, acts as a contextual/programmable key. */
  KEYCODE_PROG_BLUE:        186,
  /** App switch key.
   * Should bring up the application switcher dialog. */
  KEYCODE_APP_SWITCH:       187,
  /** Generic Game Pad Button #1.*/
  KEYCODE_BUTTON_1:         188,
  /** Generic Game Pad Button #2.*/
  KEYCODE_BUTTON_2:         189,
  /** Generic Game Pad Button #3.*/
  KEYCODE_BUTTON_3:         190,
  /** Generic Game Pad Button #4.*/
  KEYCODE_BUTTON_4:         191,
  /** Generic Game Pad Button #5.*/
  KEYCODE_BUTTON_5:         192,
  /** Generic Game Pad Button #6.*/
  KEYCODE_BUTTON_6:         193,
  /** Generic Game Pad Button #7.*/
  KEYCODE_BUTTON_7:         194,
  /** Generic Game Pad Button #8.*/
  KEYCODE_BUTTON_8:         195,
  /** Generic Game Pad Button #9.*/
  KEYCODE_BUTTON_9:         196,
  /** Generic Game Pad Button #10.*/
  KEYCODE_BUTTON_10:        197,
  /** Generic Game Pad Button #11.*/
  KEYCODE_BUTTON_11:        198,
  /** Generic Game Pad Button #12.*/
  KEYCODE_BUTTON_12:        199,
  /** Generic Game Pad Button #13.*/
  KEYCODE_BUTTON_13:        200,
  /** Generic Game Pad Button #14.*/
  KEYCODE_BUTTON_14:        201,
  /** Generic Game Pad Button #15.*/
  KEYCODE_BUTTON_15:        202,
  /** Generic Game Pad Button #16.*/
  KEYCODE_BUTTON_16:        203,
  /** Language Switch key.
   * Toggles the current input language such as switching between English and Japanese on
   * a QWERTY keyboard.  On some devices, the same function may be performed by
   * pressing Shift+Spacebar. */
  KEYCODE_LANGUAGE_SWITCH:  204,
  /** Manner Mode key.
   * Toggles silent or vibrate mode on and off to make the device behave more politely
   * in certain settings such as on a crowded train.  On some devices, the key may only
   * operate when long-pressed. */
  KEYCODE_MANNER_MODE:      205,
  /** 3D Mode key.
   * Toggles the display between 2D and 3D mode. */
  KEYCODE_3D_MODE:          206,
  /** Contacts special function key.
   * Used to launch an address book application. */
  KEYCODE_CONTACTS:         207,
  /** Calendar special function key.
   * Used to launch a calendar application. */
  KEYCODE_CALENDAR:         208,
  /** Music special function key.
   * Used to launch a music player application. */
  KEYCODE_MUSIC:            209,
  /** Calculator special function key.
   * Used to launch a calculator application. */
  KEYCODE_CALCULATOR:       210,
  /** Japanese full-width / half-width key. */
  KEYCODE_ZENKAKU_HANKAKU:  211,
  /** Japanese alphanumeric key. */
  KEYCODE_EISU:             212,
  /** Japanese non-conversion key. */
  KEYCODE_MUHENKAN:         213,
  /** Japanese conversion key. */
  KEYCODE_HENKAN:           214,
  /** Japanese katakana / hiragana key. */
  KEYCODE_KATAKANA_HIRAGANA:  215,
  /** Japanese Yen key. */
  KEYCODE_YEN:              216,
  /** Japanese Ro key. */
  KEYCODE_RO:               217,
  /** Japanese kana key. */
  KEYCODE_KANA:             218,
  /** Assist key.
   * Launches the global assist activity.  Not delivered to applications. */
  KEYCODE_ASSIST:           219,
  /** Brightness Down key.
   * Adjusts the screen brightness down. */
  KEYCODE_BRIGHTNESS_DOWN:  220,
  /** Brightness Up key.
   * Adjusts the screen brightness up. */
  KEYCODE_BRIGHTNESS_UP:    221,
  /** Audio Track key.
   * Switches the audio tracks. */
  KEYCODE_MEDIA_AUDIO_TRACK:  222,
  /** Sleep key.
   * Puts the device to sleep.  Behaves somewhat like {@link KEYCODE_POWER} but it
   * has no effect if the device is already asleep. */
  KEYCODE_SLEEP:            223,
  /** Wakeup key.
   * Wakes up the device.  Behaves somewhat like {@link KEYCODE_POWER} but it
   * has no effect if the device is already awake. */
  KEYCODE_WAKEUP:           224,
  /** Pairing key.
   * Initiates peripheral pairing mode. Useful for pairing remote control
   * devices or game controllers, especially if no other input mode is
   * available. */
  KEYCODE_PAIRING:          225,
  /** Media Top Menu key.
   * Goes to the top of media menu. */
  KEYCODE_MEDIA_TOP_MENU:   226,
  /** '11' key. */
  KEYCODE_11:               227,
  /** '12' key. */
  KEYCODE_12:               228,
  /** Last Channel key.
   * Goes to the last viewed channel. */
  KEYCODE_LAST_CHANNEL:     229,
  /** TV data service key.
   * Displays data services like weather, sports. */
  KEYCODE_TV_DATA_SERVICE:  230,
  /** Voice Assist key.
   * Launches the global voice assist activity. Not delivered to applications. */
  KEYCODE_VOICE_ASSIST:     231,
  /** Radio key.
   * Toggles TV service / Radio service. */
  KEYCODE_TV_RADIO_SERVICE:  232,
  /** Teletext key.
   * Displays Teletext service. */
  KEYCODE_TV_TELETEXT:      233,
  /** Number entry key.
   * Initiates to enter multi-digit channel nubmber when each digit key is assigned
   * for selecting separate channel. Corresponds to Number Entry Mode (0x1D) of CEC
   * User Control Code. */
  KEYCODE_TV_NUMBER_ENTRY:  234,
  /** Analog Terrestrial key.
   * Switches to analog terrestrial broadcast service. */
  KEYCODE_TV_TERRESTRIAL_ANALOG:  235,
  /** Digital Terrestrial key.
   * Switches to digital terrestrial broadcast service. */
  KEYCODE_TV_TERRESTRIAL_DIGITAL:  236,
  /** Satellite key.
   * Switches to digital satellite broadcast service. */
  KEYCODE_TV_SATELLITE:     237,
  /** BS key.
   * Switches to BS digital satellite broadcasting service available in Japan. */
  KEYCODE_TV_SATELLITE_BS:  238,
  /** CS key.
   * Switches to CS digital satellite broadcasting service available in Japan. */
  KEYCODE_TV_SATELLITE_CS:  239,
  /** BS/CS key.
   * Toggles between BS and CS digital satellite services. */
  KEYCODE_TV_SATELLITE_SERVICE:  240,
  /** Toggle Network key.
   * Toggles selecting broacast services. */
  KEYCODE_TV_NETWORK:       241,
  /** Antenna/Cable key.
   * Toggles broadcast input source between antenna and cable. */
  KEYCODE_TV_ANTENNA_CABLE:  242,
  /** HDMI #1 key.
   * Switches to HDMI input #1. */
  KEYCODE_TV_INPUT_HDMI_1:  243,
  /** HDMI #2 key.
   * Switches to HDMI input #2. */
  KEYCODE_TV_INPUT_HDMI_2:  244,
  /** HDMI #3 key.
   * Switches to HDMI input #3. */
  KEYCODE_TV_INPUT_HDMI_3:  245,
  /** HDMI #4 key.
   * Switches to HDMI input #4. */
  KEYCODE_TV_INPUT_HDMI_4:  246,
  /** Composite #1 key.
   * Switches to composite video input #1. */
  KEYCODE_TV_INPUT_COMPOSITE_1:  247,
  /** Composite #2 key.
   * Switches to composite video input #2. */
  KEYCODE_TV_INPUT_COMPOSITE_2:  248,
  /** Component #1 key.
   * Switches to component video input #1. */
  KEYCODE_TV_INPUT_COMPONENT_1:  249,
  /** Component #2 key.
   * Switches to component video input #2. */
  KEYCODE_TV_INPUT_COMPONENT_2:  250,
  /** VGA #1 key.
   * Switches to VGA (analog RGB) input #1. */
  KEYCODE_TV_INPUT_VGA_1:   251,
  /** Audio description key.
   * Toggles audio description off / on. */
  KEYCODE_TV_AUDIO_DESCRIPTION:  252,
  /** Audio description mixing volume up key.
   * Louden audio description volume as compared with normal audio volume. */
  KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP:  253,
  /** Audio description mixing volume down key.
   * Lessen audio description volume as compared with normal audio volume. */
  KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN:  254,
  /** Zoom mode key.
   * Changes Zoom mode (Normal, Full, Zoom, Wide-zoom, etc.) */
  KEYCODE_TV_ZOOM_MODE:     255,
  /** Contents menu key.
   * Goes to the title list. Corresponds to Contents Menu (0x0B) of CEC User Control
   * Code */
  KEYCODE_TV_CONTENTS_MENU:  256,
  /** Media context menu key.
   * Goes to the context menu of media contents. Corresponds to Media Context-sensitive
   * Menu (0x11) of CEC User Control Code. */
  KEYCODE_TV_MEDIA_CONTEXT_MENU:  257,
  /** Timer programming key.
   * Goes to the timer recording menu. Corresponds to Timer Programming (0x54) of
   * CEC User Control Code. */
  KEYCODE_TV_TIMER_PROGRAMMING:  258,
  /** Help key. */
  KEYCODE_HELP:             259,
  KEYCODE_NAVIGATE_PREVIOUS:  260,
  KEYCODE_NAVIGATE_NEXT:    261,
  KEYCODE_NAVIGATE_IN:      262,
  KEYCODE_NAVIGATE_OUT:     263,
  /** Primary stem key for Wear
   * Main power/reset button on watch. */
  KEYCODE_STEM_PRIMARY:  264,
  /** Generic stem key 1 for Wear */
  KEYCODE_STEM_1:  265,
  /** Generic stem key 2 for Wear */
  KEYCODE_STEM_2:  266,
  /** Generic stem key 3 for Wear */
  KEYCODE_STEM_3:  267,
  /** Directional Pad Up-Left */
  KEYCODE_DPAD_UP_LEFT:     268,
  /** Directional Pad Down-Left */
  KEYCODE_DPAD_DOWN_LEFT:   269,
  /** Directional Pad Up-Right */
  KEYCODE_DPAD_UP_RIGHT:    270,
  /** Directional Pad Down-Right */
  KEYCODE_DPAD_DOWN_RIGHT:  271,
  /** Skip forward media key */
  KEYCODE_MEDIA_SKIP_FORWARD:  272,
  /** Skip backward media key */
  KEYCODE_MEDIA_SKIP_BACKWARD:  273,
  /** Step forward media key.
   * Steps media forward one from at a time. */
  KEYCODE_MEDIA_STEP_FORWARD:  274,
  /** Step backward media key.
   * Steps media backward one from at a time. */
  KEYCODE_MEDIA_STEP_BACKWARD:  275,
  /** Put device to sleep unless a wakelock is held. */
  KEYCODE_SOFT_SLEEP:  276,
  /** Cut key. */
  KEYCODE_CUT:  277,
  /** Copy key. */
  KEYCODE_COPY:  278,
  /** Paste key. */
  KEYCODE_PASTE:  279,
  /** fingerprint navigation key, up. */
  KEYCODE_SYSTEM_NAVIGATION_UP:  280,
  /** fingerprint navigation key, down. */
  KEYCODE_SYSTEM_NAVIGATION_DOWN:  281,
  /** fingerprint navigation key, left. */
  KEYCODE_SYSTEM_NAVIGATION_LEFT:  282,
  /** fingerprint navigation key, right. */
  KEYCODE_SYSTEM_NAVIGATION_RIGHT:  283,
  /** all apps */
  KEYCODE_ALL_APPS:  284,
  /** refresh key */
  KEYCODE_REFRESH:  285,
  /** Thumbs up key. Apps can use this to let user upvote content. */
  KEYCODE_THUMBS_UP:  286,
  /** Thumbs down key. Apps can use this to let user downvote content. */
  KEYCODE_THUMBS_DOWN:  287,
  /** Used to switch current account that is consuming content.
   * May be consumed by system to switch current viewer profile. */
  KEYCODE_PROFILE_SWITCH:  288,
  /** Video Application key #1. */
  KEYCODE_VIDEO_APP_1:  289,
  /** Video Application key #2. */
  KEYCODE_VIDEO_APP_2:  290,
  /** Video Application key #3. */
  KEYCODE_VIDEO_APP_3:  291,
  /** Video Application key #4. */
  KEYCODE_VIDEO_APP_4:  292,
  /** Video Application key #5. */
  KEYCODE_VIDEO_APP_5:  293,
  /** Video Application key #6. */
  KEYCODE_VIDEO_APP_6:  294,
  /** Video Application key #7. */
  KEYCODE_VIDEO_APP_7:  295,
  /** Video Application key #8. */
  KEYCODE_VIDEO_APP_8:  296,
  /** Featured Application key #1. */
  KEYCODE_FEATURED_APP_1:  297,
  /** Featured Application key #2. */
  KEYCODE_FEATURED_APP_2:  298,
  /** Featured Application key #3. */
  KEYCODE_FEATURED_APP_3:  299,
  /** Featured Application key #4. */
  KEYCODE_FEATURED_APP_4:  300,
  /** Demo Application key #1. */
  KEYCODE_DEMO_APP_1:  301,
  /** Demo Application key #2. */
  KEYCODE_DEMO_APP_2:  302,
  /** Demo Application key #3. */
  KEYCODE_DEMO_APP_3:  303,
  /** Demo Application key #4. */
  KEYCODE_DEMO_APP_4:  304,
  /** Keyboard backlight Down key.
   * Adjusts the keyboard backlight brightness down. */
  KEYCODE_KEYBOARD_BACKLIGHT_DOWN:  305,
  /** Keyboard backlight Up key.
   * Adjusts the keyboard backlight brightness up. */
  KEYCODE_KEYBOARD_BACKLIGHT_UP:  306,
  /** Keyboard backlight Toggle key.
   * Toggles the keyboard backlight on/off. */
  KEYCODE_KEYBOARD_BACKLIGHT_TOGGLE:  307,
  /** The primary button on the barrel of a stylus.
   * This is usually the button closest to the tip of the stylus. */
  KEYCODE_STYLUS_BUTTON_PRIMARY:  308,
  /** The secondary button on the barrel of a stylus.
   * This is usually the second button from the tip of the stylus. */
  KEYCODE_STYLUS_BUTTON_SECONDARY:  309,
  /** The tertiary button on the barrel of a stylus.
   * This is usually the third button from the tip of the stylus. */
  KEYCODE_STYLUS_BUTTON_TERTIARY:  310,
  /** A button on the tail end of a stylus. */
  KEYCODE_STYLUS_BUTTON_TAIL:  311,
  /** Key to open recent apps (a.k.a. Overview) */
  KEYCODE_RECENT_APPS:  312,
  /** User customizable key #1. */
  KEYCODE_MACRO_1:  313,
  /** User customizable key #2. */
  KEYCODE_MACRO_2:  314,
  /** User customizable key #3. */
  KEYCODE_MACRO_3:  315,
  /** User customizable key #4. */
  KEYCODE_MACRO_4:  316,
  /** Open Emoji picker */
  KEYCODE_EMOJI_PICKER:  317,
  /** Take Screenshot */
  KEYCODE_SCREENSHOT:  318,
  /** To start dictate to an input field */
  KEYCODE_DICTATE:  319,
  /** AC New */
  KEYCODE_NEW:  320,
  /** AC Close */
  KEYCODE_CLOSE:  321,
  /** To toggle 'Do Not Disturb' mode */
  KEYCODE_DO_NOT_DISTURB:  322,
  /** To Print */
  KEYCODE_PRINT:  323,
  /** To Lock the screen */
  KEYCODE_LOCK:  324,
  /** To toggle fullscreen mode (on the current application) */
  KEYCODE_FULLSCREEN:  325,
  /** F13 key */
  KEYCODE_F13:  326,
  /** F14 key */
  KEYCODE_F14:  327,
  /** F15 key */
  KEYCODE_F15:  328,
  /** F16 key */
  KEYCODE_F16:  329,
  /** F17 key */
  KEYCODE_F17:  330,
  /** F18 key */
  KEYCODE_F18:  331,
  /** F19 key */
  KEYCODE_F19:  332,
  /** F20 key */
  KEYCODE_F20:  333,
  /** F21 key */
  KEYCODE_F21:  334,
  /** F22 key */
  KEYCODE_F22:  335,
  /** F23 key */
  KEYCODE_F23:  336,
  /** F24 key */
  KEYCODE_F24:  337,
}
