// $('#productDetails').each(function(){
// 	var $product = $(this),
// 		$originHeader = $('.productDataItemHeader:contains("Country of Origin")');
// 	if ($originHeader) {
// 		console.log($originHeader);
// 	} else {
// 		console.log($product);
// 	}
// });
(function(){
	
	var data = {};
	data.countries = [{"code": "AD","name": "Andorra"},
		 {"code": "AE","name": "United Arab Emirates"},
		 {"code": "AF","name": "Afghanistan"},
		 {"code": "AG","name": "Antigua and Barbuda"},
		 {"code": "AI","name": "Anguilla"},
		 {"code": "AL","name": "Albania"},
		 {"code": "AM","name": "Armenia"},
		 {"code": "AN","name": "Netherlands Antilles"},
		 {"code": "AO","name": "Angola"},
		 {"code": "AQ","name": "Antarctica"},
		 {"code": "AR","name": "Argentina"},
		 {"code": "AS","name": "American Samoa"},
		 {"code": "AT","name": "Austria"},
		 {"code": "AU","name": "Australia"},
		 {"code": "AW","name": "Aruba"},
		 {"code": "AZ","name": "Azerbaijan"},
		 {"code": "BA","name": "Bosnia and Herzegovina"},
		 {"code": "BB","name": "Barbados"},
		 {"code": "BD","name": "Bangladesh"},
		 {"code": "BE","name": "Belgium"},
		 {"code": "BF","name": "Burkina Faso"},
		 {"code": "BG","name": "Bulgaria"},
		 {"code": "BH","name": "Bahrain"},
		 {"code": "BI","name": "Burundi"},
		 {"code": "BJ","name": "Benin"},
		 {"code": "BM","name": "Bermuda"},
		 {"code": "BN","name": "Brunei Darussalam"},
		 {"code": "BO","name": "Bolivia"},
		 {"code": "BR","name": "Brazil"},
		 {"code": "BS","name": "Bahamas"},
		 {"code": "BT","name": "Bhutan"},
		 {"code": "BV","name": "Bouvet Island"},
		 {"code": "BW","name": "Botswana"},
		 {"code": "BY","name": "Belarus"},
		 {"code": "BZ","name": "Belize"},
		 {"code": "CA","name": "Canada"},
		 {"code": "CC","name": "Cocos (Keeling) Islands"},
		 {"code": "CD","name": "Congo, the Democratic Republic of the"},
		 {"code": "CF","name": "Central African Republic"},
		 {"code": "CG","name": "Congo"},
		 {"code": "CH","name": "Switzerland"},
		 {"code": "CI","name": "Cote D\'Ivoire"},
		 {"code": "CK","name": "Cook Islands"},
		 {"code": "CL","name": "Chile"},
		 {"code": "CM","name": "Cameroon"},
		 {"code": "CN","name": "China"},
		 {"code": "CO","name": "Colombia"},
		 {"code": "CR","name": "Costa Rica"},
		 {"code": "CS","name": "Serbia and Montenegro"},
		 {"code": "CU","name": "Cuba"},
		 {"code": "CV","name": "Cape Verde"},
		 {"code": "CX","name": "Christmas Island"},
		 {"code": "CY","name": "Cyprus"},
		 {"code": "CZ","name": "Czech Republic"},
		 {"code": "DE","name": "Germany"},
		 {"code": "DJ","name": "Djibouti"},
		 {"code": "DK","name": "Denmark"},
		 {"code": "DM","name": "Dominica"},
		 {"code": "DO","name": "Dominican Republic"},
		 {"code": "DZ","name": "Algeria"},
		 {"code": "EC","name": "Ecuador"},
		 {"code": "EE","name": "Estonia"},
		 {"code": "EG","name": "Egypt"},
		 {"code": "EH","name": "Western Sahara"},
		 {"code": "ER","name": "Eritrea"},
		 {"code": "ES","name": "Spain"},
		 {"code": "ET","name": "Ethiopia"},
		 {"code": "FI","name": "Finland"},
		 {"code": "FJ","name": "Fiji"},
		 {"code": "FK","name": "Falkland Islands (Malvinas)"},
		 {"code": "FM","name": "Micronesia, Federated States of"},
		 {"code": "FO","name": "Faroe Islands"},
		 {"code": "FR","name": "France"},
		 {"code": "GA","name": "Gabon"},
		 {"code": "GB","name": "United Kingdom"},
		 {"code": "GD","name": "Grenada"},
		 {"code": "GE","name": "Georgia"},
		 {"code": "GF","name": "French Guiana"},
		 {"code": "GH","name": "Ghana"},
		 {"code": "GI","name": "Gibraltar"},
		 {"code": "GL","name": "Greenland"},
		 {"code": "GM","name": "Gambia"},
		 {"code": "GN","name": "Guinea"},
		 {"code": "GP","name": "Guadeloupe"},
		 {"code": "GQ","name": "Equatorial Guinea"},
		 {"code": "GR","name": "Greece"},
		 {"code": "GS","name": "South Georgia and the South Sandwich Islands"},
		 {"code": "GT","name": "Guatemala"},
		 {"code": "GU","name": "Guam"},
		 {"code": "GW","name": "Guinea-Bissau"},
		 {"code": "GY","name": "Guyana"},
		 {"code": "HK","name": "Hong Kong"},
		 {"code": "HM","name": "Heard Island and Mcdonald Islands"},
		 {"code": "HN","name": "Honduras"},
		 {"code": "HR","name": "Croatia"},
		 {"code": "HT","name": "Haiti"},
		 {"code": "HU","name": "Hungary"},
		 {"code": "ID","name": "Indonesia"},
		 {"code": "IE","name": "Ireland"},
		 {"code": "IL","name": "Israel"},
		 {"code": "IN","name": "India"},
		 {"code": "IO","name": "British Indian Ocean Territory"},
		 {"code": "IQ","name": "Iraq"},
		 {"code": "IR","name": "Iran, Islamic Republic of"},
		 {"code": "IS","name": "Iceland"},
		 {"code": "IT","name": "Italy"},
		 {"code": "JM","name": "Jamaica"},
		 {"code": "JO","name": "Jordan"},
		 {"code": "JP","name": "Japan"},
		 {"code": "KE","name": "Kenya"},
		 {"code": "KG","name": "Kyrgyzstan"},
		 {"code": "KH","name": "Cambodia"},
		 {"code": "KI","name": "Kiribati"},
		 {"code": "KM","name": "Comoros"},
		 {"code": "KN","name": "Saint Kitts and Nevis"},
		 {"code": "KP","name": "Korea, Democratic People\'s Republic of"},
		 {"code": "KR","name": "Korea, Republic of"},
		 {"code": "KW","name": "Kuwait"},
		 {"code": "KY","name": "Cayman Islands"},
		 {"code": "KZ","name": "Kazakhstan"},
		 {"code": "LA","name": "Lao People\'s Democratic Republic"},
		 {"code": "LB","name": "Lebanon"},
		 {"code": "LC","name": "Saint Lucia"},
		 {"code": "LI","name": "Liechtenstein"},
		 {"code": "LK","name": "Sri Lanka"},
		 {"code": "LR","name": "Liberia"},
		 {"code": "LS","name": "Lesotho"},
		 {"code": "LT","name": "Lithuania"},
		 {"code": "LU","name": "Luxembourg"},
		 {"code": "LV","name": "Latvia"},
		 {"code": "LY","name": "Libyan Arab Jamahiriya"},
		 {"code": "MA","name": "Morocco"},
		 {"code": "MC","name": "Monaco"},
		 {"code": "MD","name": "Moldova, Republic of"},
		 {"code": "MG","name": "Madagascar"},
		 {"code": "MH","name": "Marshall Islands"},
		 {"code": "MK","name": "Macedonia, the Former Yugoslav Republic of"},
		 {"code": "ML","name": "Mali"},
		 {"code": "MM","name": "Myanmar"},
		 {"code": "MN","name": "Mongolia"},
		 {"code": "MO","name": "Macao"},
		 {"code": "MP","name": "Northern Mariana Islands"},
		 {"code": "MQ","name": "Martinique"},
		 {"code": "MR","name": "Mauritania"},
		 {"code": "MS","name": "Montserrat"},
		 {"code": "MT","name": "Malta"},
		 {"code": "MU","name": "Mauritius"},
		 {"code": "MV","name": "Maldives"},
		 {"code": "MW","name": "Malawi"},
		 {"code": "MX","name": "Mexico"},
		 {"code": "MY","name": "Malaysia"},
		 {"code": "MZ","name": "Mozambique"},
		 {"code": "NA","name": "Namibia"},
		 {"code": "NC","name": "New Caledonia"},
		 {"code": "NE","name": "Niger"},
		 {"code": "NF","name": "Norfolk Island"},
		 {"code": "NG","name": "Nigeria"},
		 {"code": "NI","name": "Nicaragua"},
		 {"code": "NL","name": "Netherlands"},
		 {"code": "NO","name": "Norway"},
		 {"code": "NP","name": "Nepal"},
		 {"code": "NR","name": "Nauru"},
		 {"code": "NU","name": "Niue"},
		 {"code": "NZ","name": "New Zealand"},
		 {"code": "OM","name": "Oman"},
		 {"code": "PA","name": "Panama"},
		 {"code": "PE","name": "Peru"},
		 {"code": "PF","name": "French Polynesia"},
		 {"code": "PG","name": "Papua New Guinea"},
		 {"code": "PH","name": "Philippines"},
		 {"code": "PK","name": "Pakistan"},
		 {"code": "PL","name": "Poland"},
		 {"code": "PM","name": "Saint Pierre and Miquelon"},
		 {"code": "PN","name": "Pitcairn"},
		 {"code": "PR","name": "Puerto Rico"},
		 {"code": "PS","name": "Palestinian Territory, Occupied"},
		 {"code": "PT","name": "Portugal"},
		 {"code": "PW","name": "Palau"},
		 {"code": "PY","name": "Paraguay"},
		 {"code": "QA","name": "Qatar"},
		 {"code": "RE","name": "Reunion"},
		 {"code": "RO","name": "Romania"},
		 {"code": "RU","name": "Russian Federation"},
		 {"code": "RW","name": "Rwanda"},
		 {"code": "SA","name": "Saudi Arabia"},
		 {"code": "SB","name": "Solomon Islands"},
		 {"code": "SC","name": "Seychelles"},
		 {"code": "SD","name": "Sudan"},
		 {"code": "SE","name": "Sweden"},
		 {"code": "SG","name": "Singapore"},
		 {"code": "SH","name": "Saint Helena"},
		 {"code": "SI","name": "Slovenia"},
		 {"code": "SJ","name": "Svalbard and Jan Mayen"},
		 {"code": "SK","name": "Slovakia"},
		 {"code": "SL","name": "Sierra Leone"},
		 {"code": "SM","name": "San Marino"},
		 {"code": "SN","name": "Senegal"},
		 {"code": "SO","name": "Somalia"},
		 {"code": "SR","name": "Suriname"},
		 {"code": "ST","name": "Sao Tome and Principe"},
		 {"code": "SV","name": "El Salvador"},
		 {"code": "SY","name": "Syrian Arab Republic"},
		 {"code": "SZ","name": "Swaziland"},
		 {"code": "TC","name": "Turks and Caicos Islands"},
		 {"code": "TD","name": "Chad"},
		 {"code": "TF","name": "French Southern Territories"},
		 {"code": "TG","name": "Togo"},
		 {"code": "TH","name": "Thailand"},
		 {"code": "TJ","name": "Tajikistan"},
		 {"code": "TK","name": "Tokelau"},
		 {"code": "TL","name": "Timor-Leste"},
		 {"code": "TM","name": "Turkmenistan"},
		 {"code": "TN","name": "Tunisia"},
		 {"code": "TO","name": "Tonga"},
		 {"code": "TR","name": "Turkey"},
		 {"code": "TT","name": "Trinidad and Tobago"},
		 {"code": "TV","name": "Tuvalu"},
		 {"code": "TW","name": "Taiwan, Province of China"},
		 {"code": "TZ","name": "Tanzania, United Republic of"},
		 {"code": "UA","name": "Ukraine"},
		 {"code": "UG","name": "Uganda"},
		 {"code": "UM","name": "United States Minor Outlying Islands"},
		 {"code": "US","name": "United States"},
		 {"code": "UY","name": "Uruguay"},
		 {"code": "UZ","name": "Uzbekistan"},
		 {"code": "VA","name": "Holy See (Vatican City State)"},
		 {"code": "VC","name": "Saint Vincent and the Grenadines"},
		 {"code": "VE","name": "Venezuela"},
		 {"code": "VG","name": "Virgin Islands, British"},
		 {"code": "VI","name": "Virgin Islands, U.s."},
		 {"code": "VN","name": "Viet Nam"},
		 {"code": "VU","name": "Vanuatu"},
		 {"code": "WF","name": "Wallis and Futuna"},
		 {"code": "WS","name": "Samoa"},
		 {"code": "YE","name": "Yemen"},
		 {"code": "YT","name": "Mayotte"},
		 {"code": "ZA","name": "South Africa"},
		 {"code": "ZM","name": "Zambia"},
		 {"code": "ZW","name": "Zimbabwe"}];

	var api_root = "http://api.worldbank.org/countries/{codes}/indicators/TM.TAX.MRCH.SM.AR.ZS?per_page=10&date=2006:2015&format=json";
	function requestTariffData(producer, consumer){
		var url = api_root.replace('{codes}', [producer, consumer].join(';'));
		return $.ajax({
			url: url,
			dataType: 'json'
		});
	};

	function extractTariffValues(data){
		var values = {};
		$.each(data[1], function(){
			if(!values[this.country.id]) {
				values[this.country.id] = this.value;
			}
		});
		return values;
	};

	var mongo = "https://api.mongolab.com/api/1/databases/dfid-wb/collections/wbc?apiKey=5066b0b9e4b022999d4e56a8&q={%22COUNTRY%20NAME%22:%22{country}%22}&f={%22Cost%20to%20export%20(US$%20per%20container)%22:1}"
	function requestExportCosts(producer_name){
		var url = mongo.replace('{country}', producer_name);
		return $.ajax({
			url: url,
			dataType: 'json'
		});
	};

	function displayTariffs(t_data, target){
		// var $insert = $('<div/>');
		// $('<dl/>')
		// 	.append('<dt>Export Tariff</dt>')
		// 	.append('<dd>' + data[data.producer_code] + '%</dd>')
		// 	.append('<dt>Import Tariff</dt>')
		// 	.append('<dd>' + data[data.consumer_code] + '%</dd>')
		// 	.appendTo($insert);
		// target.html($insert);
		//var el = $('<div/>');
		var r = Raphael(target, 210, 260);

		var colors = {
			high: '#ed212c',
			"av.": '#f7811f',
			low: '#74c046'
		}

		function getTariffColor(pc) {
			if (pc <= 2) {
				return colors.low;
			}
			if (pc > 2 && pc <= 5 ) {
				return colors['av.'];
			}
			return colors.high;
		}

		function getExportName(cost) {
			if (cost <= 1000) {
				return "low";
			}
			if (cost > 1000 && cost <= 2500 ) {
				return "av.";
			}
			return "high";
		}

		r.customAttributes.segment = function (x, y, r, a1, a2, col) {
            var flag = (a2 - a1) > 180;
            a1 = (a1 % 360) * Math.PI / 180;
            a2 = (a2 % 360) * Math.PI / 180;
            return {
                path: [["M", x, y], ["l", r * Math.cos(a1), r * Math.sin(a1)], ["A", r, r, 0, +flag, 1, x + r * Math.cos(a2), y + r * Math.sin(a2)], ["z"]],
                fill: col
            };
        };

        // Draw a circle!
        r.circle(100, 150, 100).attr({stroke: "#fff", "stroke-width": 4});

        // Import Tariff Sector
        r.path().attr({
    		segment: [100, 150, 100, 235, 360, getTariffColor(t_data[t_data.consumer_code])], 
    		stroke: "#fff",
    		"stroke-width": 4
    	});
        // Export Tariff Sector
        r.path().attr({
    		segment: [100, 150, 100, 0, 120, getTariffColor(t_data[t_data.producer_code])], 
    		stroke: "#fff",
    		"stroke-width": 4
    	});
    	// Last Sector
        r.path().attr({
    		segment: [100, 150, 100, 120, 235, colors[getExportName(t_data.export_cost)]], 
    		stroke: "#fff",
    		"stroke-width": 4
    	});

        // Producer Country
        r.text(100, 20, t_data.producer).attr({font: '100 30px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', fill: "#000"});
        // Import Tariffs
        r.text(120, 80, "Import").attr({font: '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', fill: "#fff"});
        r.text(130, 100, "Tariffs").attr({font: '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', fill: "#fff"});
        r.text(140, 120, t_data[t_data.consumer_code].toString() + '%').attr({font: '100 24px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif',"font-weight": 'bold', fill: "#fff"});
        // Export Tariffs
        r.text(130, 170, "Export").attr({font: '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', fill: "#fff"});
        r.text(125, 190, "Tariffs").attr({font: '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', fill: "#fff"});
        r.text(120, 210, t_data[t_data.producer_code].toString() + '%').attr({font: '100 24px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif',"font-weight": 'bold', fill: "#fff"});
		
		// Export Costs
		r.text(40, 132, "Freight").attr({font: '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', fill: "#fff"});
		r.text(40, 152, "Duties").attr({font: '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', fill: "#fff"});
		r.text(45, 171, getExportName(t_data.export_cost).charAt(0).toUpperCase() + getExportName(t_data.export_cost).slice(1)).attr({font: '100 24px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif', "font-weight": 'bold', fill: "#fff"});
		//target.html(el);
	};

 $('.productDataItemHeader:contains("Country of Origin")').each(function(){
		var mumbles = ["Produced in ", "(United Republic Of)", 'Packed in'],
			$header = $(this),
			$target = $header.next('.productText'),
			rawOrigin = $target.text(),
			producer = rawOrigin,
			consumer_code = "GB",
			producer_rex,
			producer_code,
			t_data;
		// Clear out extraneous mummbling in product origin
		$.each(mumbles, function(){
			producer = producer.replace(this, '');
		});
		producer_rex = new RegExp($.trim(producer.toLowerCase()));
		$.each(data.countries, function(){
			if (producer_rex.test(this.name.toLowerCase())) {
				producer_code = this.code;
			}
		});
		// Bug out if we're not looking at an import
		if (producer_code === consumer_code) {
			return;
		}
		tdata = requestTariffData(producer_code, consumer_code);
		tdata.done(function(data){
			t_data = extractTariffValues(data);
			t_data.producer = producer;
			t_data.producer_code = producer_code;
			t_data.consumer_code = consumer_code;
			edata = requestExportCosts(producer);
			edata.done(function(data){
				if (data.length) {
					t_data.export_cost = data[0]['Cost to export (US$ per container)'];
				} else {
					t_data.export_cost = 1500; //YUCK - probably median
				}
				displayTariffs(t_data, $target);
			});
			
		});
		

	});

})();


