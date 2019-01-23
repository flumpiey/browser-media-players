upload url: https://addons.mozilla.org/en-US/developers/addon/media-keys/upload-listed
upload header
```
-----------------------------18127123534912
Content-Disposition: form-data; name="csrfmiddlewaretoken"

ARtMW33uwrewv3jD0V0oB3MS4AS7GaMf0qywZWM7iyUuuwCXFnGiS1KgACYSPY41
-----------------------------18127123534912
Content-Disposition: form-data; name="upload"; filename="media_keys-2.1.4.zip"
Content-Type: application/x-zip-compressed
```

curl up
====
```bash
curl "https://addons.mozilla.org/en-US/developers/addon/media-keys/upload-listed" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0" -H "Accept: */*" -H "Accept-Language: en-US,en;q=0.5" --compressed -H "Referer: https://addons.mozilla.org/en-US/developers/addon/media-keys/versions/submit/" -H "Content-Type: multipart/form-data; boundary=---------------------------18127123534912" -H "Connection: keep-alive" -H "Cookie: sessionid="".eJxVjM1OAjEURt-lazO5_Zlp69JAiGTcoEB0M7ltby0o0zhTFGJ8d4eEDcsv5zvnl8UTdmPBQuyeoaaouZGNtlbrqKwnlF6FiM4HSwFCU4OQXKvagUUKWiEJ4ZR3EcBZdsc6PJbUHUcaul2YkpwL0EqbW5RwTBMkHgACmYhYG2GdQ7SNceRdAwQQo5DIJeCt7NB_UH-Jhz3277nyuS_DzlWXS3WlY_WUA30-XL9TwI9DLHlakwjr1da_pc3ydE6qfWxfy9C3RIt8MO3LcFh9le0iPsP5e05REq9nG52E92qd6UfE-Yz9_QM3Y2Vy:1gm6kH:Cyuq2aO82cWM7R8HYu2h1d3z-os""; __utma=164683759.1130220560.1548204108.1548204108.1548204108.1; __utmb=164683759.7.10.1548204108; __utmc=164683759; __utmz=164683759.1548204108.1.1.utmcsr=accounts.firefox.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmt=1; frontend_auth_token=""eyJhdXRoX2hhc2giOiJlMWQwMGRlOGZhYTU4MjliYmFhOTY4YmVjYjYwZTAwZmYyM2ExMzBhIiwidXNlcl9pZCI6MTEyMDc0Nzh9:1gm6cH:TdHiCe0vIE34ft53SQ59aNtLOaw""" --data ""
```

curl progress
=============

request
-------
```bash
curl "https://addons.mozilla.org/en-US/developers/addon/media-keys/upload/d01b97371da243ecbfd0d94d8435b987?_=1548204621071" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0" -H "Accept: application/json, text/javascript, */*; q=0.01" -H "Accept-Language: en-US,en;q=0.5" --compressed -H "Referer: https://addons.mozilla.org/en-US/developers/addon/media-keys/versions/submit/" -H "X-CSRFToken: ARtMW33uwrewv3jD0V0oB3MS4AS7GaMf0qywZWM7iyUuuwCXFnGiS1KgACYSPY41" -H "X-Requested-With: XMLHttpRequest" -H "Connection: keep-alive" -H "Cookie: sessionid="".eJxVjM1OAjEURt-lazO5_Zlp69JAiGTcoEB0M7ltby0o0zhTFGJ8d4eEDcsv5zvnl8UTdmPBQuyeoaaouZGNtlbrqKwnlF6FiM4HSwFCU4OQXKvagUUKWiEJ4ZR3EcBZdsc6PJbUHUcaul2YkpwL0EqbW5RwTBMkHgACmYhYG2GdQ7SNceRdAwQQo5DIJeCt7NB_UH-Jhz3277nyuS_DzlWXS3WlY_WUA30-XL9TwI9DLHlakwjr1da_pc3ydE6qfWxfy9C3RIt8MO3LcFh9le0iPsP5e05REq9nG52E92qd6UfE-Yz9_QM3Y2Vy:1gm6kH:Cyuq2aO82cWM7R8HYu2h1d3z-os""; __utma=164683759.1130220560.1548204108.1548204108.1548204108.1; __utmb=164683759.7.10.1548204108; __utmc=164683759; __utmz=164683759.1548204108.1.1.utmcsr=accounts.firefox.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmt=1; frontend_auth_token=""eyJhdXRoX2hhc2giOiJlMWQwMGRlOGZhYTU4MjliYmFhOTY4YmVjYjYwZTAwZmYyM2ExMzBhIiwidXNlcl9pZCI6MTEyMDc0Nzh9:1gm6cH:TdHiCe0vIE34ft53SQ59aNtLOaw""; multidb_pin_writes=y"
```

response in progress
--------------------
```json
{"full_report_url": "/en-US/developers/upload/d01b97371da243ecbfd0d94d8435b987", "url": "/en-US/developers/addon/media-keys/upload/d01b97371da243ecbfd0d94d8435b987", "upload": "d01b97371da243ecbfd0d94d8435b987", "error": null, "validation": "", "processed_by_addons_linter": ""}
```

response done
-------------

```json
{"full_report_url": "/en-US/developers/upload/d01b97371da243ecbfd0d94d8435b987", "url": "/en-US/developers/addon/media-keys/upload/d01b97371da243ecbfd0d94d8435b987", "upload": "d01b97371da243ecbfd0d94d8435b987", "addon_type": 1, "error": null, "validation": {"errors": 0, "success": true, "warnings": 4, "compatibility_summary": {"notices": 0, "errors": 0, "warnings": 0}, "ending_tier": 5, "messages": [{"uid": "ed0922e31c9e4a5bbf6fd9ee051f0e6e", "file": "lib/browser-polyfill.min.js", "tier": 1, "message": "Known JS library detected", "type": "notice", "id": ["KNOWN_LIBRARY"], "description": ["JavaScript libraries are discouraged for simple add-ons, but are generally accepted."]}, {"description": ["This API is not implemented by the given minimum Firefox version"], "column": 17, "message": "commands.reset is not supported in Firefox version 57.0", "file": "options/CommandOptions.js", "tier": 1, "line": 73, "type": "warning", "id": ["INCOMPATIBLE_API"], "uid": "3a22dce68cbe4489a56ec3beea261906"}, {"description": ["This API is not implemented by the given minimum Firefox version"], "column": 17, "message": "commands.update is not supported in Firefox version 57.0", "file": "options/CommandOptions.js", "tier": 1, "line": 76, "type": "warning", "id": ["INCOMPATIBLE_API"], "uid": "e3d4eaa4e4164dc581f83330e905ebf2"}, {"description": ["This API is not implemented by the given minimum Firefox version"], "column": 21, "message": "contentScripts.register is not supported in Firefox version 57.0", "file": "options/ContentScriptOptions.js", "tier": 1, "line": 58, "type": "warning", "id": ["INCOMPATIBLE_API"], "uid": "40e1572e10284f7fb24f67c9f28b291e"}, {"description": ["This API is not implemented by the given minimum Firefox for Android version"], "column": 21, "message": "contentScripts.register is not supported in Firefox for Android version 57.0", "file": "options/ContentScriptOptions.js", "tier": 1, "line": 58, "type": "warning", "id": ["ANDROID_INCOMPATIBLE_API"], "uid": "4b3874a02e964ffc99011c32921f4c6b"}], "detected_type": "extension", "notices": 1, "metadata": {"manifestVersion": 2, "identified_files": {"lib/browser-polyfill.min.js": {"path": "webextension-polyfill.0.3.1.browser-polyfill.min.js"}}, "is_webextension": true, "name": "Media Keys", "emptyFiles": [], "firefoxMinVersion": "57.0", "processed_by_addons_linter": true, "unknownMinifiedFiles": ["data/play.pocketcasts.com-view.js", "data/player.spotify.com-view.js", "data/play.spotify.com-view.js", "data/vk.com-view.js", "lib/isFirefoxPromise.js"], "version": "2.1.4", "listed": true, "totalScannedFileSize": 75228, "type": 1, "id": "jid1-4GP7z3tkUd3Tzg@jetpack", "jsLibs": {"lib/browser-polyfill.min.js": "webextension-polyfill.0.3.1.browser-polyfill.min.js"}}}, "processed_by_addons_linter": true}
```

Release Notes
=============
```bash
curl "https://addons.mozilla.org/en-US/developers/addon/media-keys/versions/submit/2691594/details" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0" -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" -H "Accept-Language: en-US,en;q=0.5" --compressed -H "Referer: https://addons.mozilla.org/en-US/developers/addon/media-keys/versions/submit/2691594/details" -H "Content-Type: application/x-www-form-urlencoded" -H "Connection: keep-alive" -H "Cookie: sessionid="".eJxVjM1OAjEURt-lazO5_Zlp69JAiGTcoEB0M7ltby0o0zhTFGJ8d4eEDcsv5zvnl8UTdmPBQuyeoaaouZGNtlbrqKwnlF6FiM4HSwFCU4OQXKvagUUKWiEJ4ZR3EcBZdsc6PJbUHUcaul2YkpwL0EqbW5RwTBMkHgACmYhYG2GdQ7SNceRdAwQQo5DIJeCt7NB_UH-Jhz3277nyuS_DzlWXS3WlY_WUA30-XL9TwI9DLHlakwjr1da_pc3ydE6qfWxfy9C3RIt8MO3LcFh9le0iPsP5e05REq9nG52E92qd6UfE-Yz9_QM3Y2Vy:1gm6ts:kctNXf1o0E8_6xTqo-3oXEL8PmM""; __utma=164683759.1130220560.1548204108.1548204108.1548204108.1; __utmb=164683759.9.10.1548204108; __utmc=164683759; __utmz=164683759.1548204108.1.1.utmcsr=accounts.firefox.com|utmccn=(referral)|utmcmd=referral|utmcct=/; frontend_auth_token=""eyJhdXRoX2hhc2giOiJlMWQwMGRlOGZhYTU4MjliYmFhOTY4YmVjYjYwZTAwZmYyM2ExMzBhIiwidXNlcl9pZCI6MTEyMDc0Nzh9:1gm6cH:TdHiCe0vIE34ft53SQ59aNtLOaw""; __utmt=1" -H "Upgrade-Insecure-Requests: 1" --data "csrfmiddlewaretoken=srB9BqXOMaajGJwRmJXXi0tlw6lZjYsvS0GTEjGryhQhFcPb1bDRzYrJ28rKsMKh&release_notes_en-us=Fixed+support+for+plex.tv"%"2C+and+added+support+for+stitcher.com.&release_notes_init=&approval_notes="
```