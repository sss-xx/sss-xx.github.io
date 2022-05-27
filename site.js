

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