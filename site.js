

		$(function () {
			var datas = [
				{
					event : '余额',
					cast : 1103,
					msg : '',
					thumb : ''
			},
				{
					event : '新会员',
					cast : 2600,
					msg: '13*200',
					thumb: 'vip2.png'
			},
				{
					event : '充卡',
					cast : -3000,
					msg : '',
					thumb : ''
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
