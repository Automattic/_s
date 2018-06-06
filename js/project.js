/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 * @see https://stackoverflow.com/a/21742107/1654250
 *
 * @returns {String}
 */
var MoonBoy = {
  util: {
    device: {
      OS: {
        ANDROID: 'Android',
        iOS: 'iOS',
        WINDOWS_PHONE: 'Windows Phone',
        UNKNOWN: 'unknown'
      },
      getOS: function() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if ( /windows phone/i.test( userAgent ) ) {
          return MoonBoy.util.device.OS.WINDOWS_PHONE;
        }

        if ( /android/i.test( userAgent ) ) {
          return MoonBoy.util.device.OS.ANDROID;
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if ( /iPad|iPhone|iPod/.test( userAgent ) && ! window.MSStream ) {
          return MoonBoy.util.device.OS.iOS;
        }

        return MoonBoy.util.device.OS.UNKNOWN;
      },
      isAndroid: function() {
        return MoonBoy.util.device.OS.ANDROID === MoonBoy.util.device.getOS();
      },
      isiOS: function() {
        return MoonBoy.util.device.OS.iOS === MoonBoy.util.device.getOS();
      }
    }
  }
};
(function($){
  if( MoonBoy.util.device.isAndroid() ) {
    $('.buttons .ios').hide();
  }
  else if( MoonBoy.util.device.isiOS() ) {
    $('.buttons .android').hide();
  }
})(jQuery);
