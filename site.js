

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
					msg: '毅、冷、扣、武、勇、梁、飞猪、刘政委、凤、熬、菲、随缘、x',
					thumb: '20220522.jpg'
			},
				{
					event : '冲卡',
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

				$("#tb-body").append('<tr><th scope="row">' + datas[n].event + '</th><th' + clas + '>' + datas[n].cast + '</th><td style="font-size:12px">' + datas[n].msg + '</td><td>' + img + '</td></tr>');
				balance += datas[n].cast;
			}

			$("#tb-body").append('<tr style="color:BLUE"><th scope="row">余额</th><th>' + balance + '</th><td></td><td></td></tr>');
		})