

		$(function () {
			var datas = [
				{
					event : '余额',
					cast : 124,
					msg : '',
					thumb : ''
			},
				{
					event : '新会员',
					cast : 2600,
					msg: '13*200',
					thumb: '20220522.jpg'
			},
				{
					event : '充卡',
					cast : -2000,
					msg : '',
					thumb : ''
			},
				{
					event : '20220523',
					cast : 188,
					msg : '1',
					thumb: '20220523.jpg'
				},
				{
					event : '-------',
					cast : -580,
					msg : '球',
					thumb: ''
				},
				{
					event : '20220527',
					cast : 172,
					msg : '2',
					thumb: '20220527.png'
				},
				{
					event : '20220530',
					cast : 72.8+13,// 南风天 6.5 折 + 个人红包
					msg : '3',
					thumb: '20220530.png'
				},
				{
					event : '20220601',
					cast : 80,
					msg : '4',
					thumb: '20220601.png'
				},
				{
					event : '20220606',
					cast : 56,
					msg : '5',
					thumb: '20220606.png'
				},
				{
					event : '20220608',
					cast : 96,
					msg : '6',
					thumb: '20220608.png'
				},
				{
					event : '20220610',
					cast : 45,
					msg : '7',
					thumb: '20220610.png'
				},
				{
					event : '20220613',
					cast : 76,
					msg : '8',
					thumb: '20220613.png'
				},
				{
					event : '-------',
					cast : -590,
					msg : '球',
					thumb: ''
				},
				{
					event : '20220615',
					cast : 80,
					msg : '9',
					thumb: '20220615.png'
				},
				{
					event : '20220617',
					cast : 76,
					msg : '10',
					thumb: '20220617.png'
				},
				{
					event : '20220620',
					cast : 76,
					msg : '11',
					thumb: '20220620.png'
				},
				{
					event : '20220622',
					cast : 128,
					msg : '12',
					thumb: '20220622.png'
				},
				{
					event : '20220624',
					cast : 148,//+20 亦晨红包
					msg : '13',
					thumb: '20220624.png'
				},
				{
					event : '20220627',
					cast : 60,
					msg : '14',
					thumb: '20220627.png'
				},
				{
					event : '20220629',
					cast : 203,	// 35+16+20+20+112
					msg : '15',
					thumb: '20220629.png'
				},
				{
					event : '-------',
					cast : -600,
					msg : '',
					thumb: ''
				},
				{
					event : '20220704',
					cast : 192,	// 20+16红包
					msg : '16',
					thumb: '20220704.png'
				},
				{
					event : '2022070617',
					cast : 140,
					msg : '17',
					thumb: '20220706.png'
				},
				{
					event : '20220708',
					cast : 128,
					msg : '18',
					thumb: '20220708.png'
				},
			];

			var balance = 0;
			for (var n = 0; n < datas.length; n++) {
				var clas = '';
				if (datas[n].cast < 0)
					clas = ' style="color:Red"';

				var img = '';
				if (datas[n].thumb.length > 0)
					img = '<a target="_blank" href="' + datas[n].thumb + '">||||</a>';

				$("#tb-body").append('<tr><td scope="row">' + datas[n].event + '</td><th' + clas + '>' + datas[n].cast + '</th><td>' + datas[n].msg + '</td><td>' + img + '</td></tr>');
				balance += datas[n].cast;
			}

			var cls = ' style="color: #24ed24; font-size: 32px"';
				if (balance < 0)
					cls = ' style="color:Red;  font-size: 32px"';
			balance = balance.toFixed(1);
			$("#tb-body").append('<tr><td scope="row" style="font-size:28px">余额</td><th ' + cls +  '>' + balance + '</th><td></td><td></td></tr>');
		})
