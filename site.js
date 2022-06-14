

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
					event : '2022-05-23',
					cast : 188,
					msg : '球费',
					thumb: '20220523.jpg'
				},
				{
					event : '2022-05-25',
					cast : -580,
					msg : '球10桶',
					thumb: ''
				},
				{
					event : '2022-05-27',
					cast : 172,
					msg : '球费',
					thumb: '20220527.png'
				},
				{
					event : '2022-05-30',
					cast : 72.8+13,// 南风天 6.5 折 + 个人红包
					msg : '球费',
					thumb: '20220530.png'
				},
				{
					event : '2022-06-01',
					cast : 80,
					msg : '球费',
					thumb: '20220601.png'
				},
				{
					event : '2022-06-06',
					cast : 56,
					msg : '球费',
					thumb: '20220606.png'
				},
				{
					event : '2022-06-08',
					cast : 96,
					msg : '球费',
					thumb: '20220608.png'
				},
				{
					event : '2022-06-10',
					cast : 45,
					msg : '球费',
					thumb: '20220610.png'
				},
				{
					event : '2022-06-13',
					cast : 76,
					msg : '球费',
					thumb: '20220613.png'
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
			$("#tb-body").append('<tr><td scope="row" style="font-size:28px">余额</td><th ' + cls +  '>' + balance + '</th><td></td><td></td></tr>');
		})
