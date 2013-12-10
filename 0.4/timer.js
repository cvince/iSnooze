
			var checkTime = function(i) {
				if (i < 10) {
					i = "0" + i;
				}
				return i;
			}

			var currentTime = function() {
			
				var today = new Date();

				var h = checkTime(today.getHours());
				var m = checkTime(today.getMinutes());
				var s = checkTime(today.getSeconds());

				$('#currentTime').html(h + ":" + m + ":" + s);

				setTimeout(currentTime, 1000);

			}

			currentTime();

			// $("#time1").timePicker();

