$(function () {
    $('#earnings').highcharts({
    	 chart: {
            spacingLeft: 0,
			width: 380
        },
        title: {
            text: null
        },
        credits: {
			enabled: false // 禁用版权信息
		},
        colors: ['#61c4ce', '#ffc000', '#49b7f1', '#e27f90','#7485df'],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        legend: {
        	itemDistance:900,
            align: 'right',
            verticalAlign: 'top',
            layout:"vertical",
            symbolRadius:0,
            symbolWidth:20,
            symbolHeight:10,
            y: 204,
            itemMarginBottom:27,
            temStyle: { cursor: 'pointer', color: '#333333'}
        },tooltip:{
        	 style: {  
		        fontSize: "14px",
		        fontWeight: "normal",
		        fontFamily: "Microsoft Yahei"
		    },
		    shared: true,
		    useHTML: true,
		    headerFormat: '<small style="font-size:14px;">{point.key}</small><table>',
		    pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
		        '<td style="text-align: right"><b>{point.y}%</b></td></tr>',
		    footerFormat: '</table>',
		    valueDecimals: 0
        },
        series: [{
            type: 'pie',
            name: '名字',
            data: [
                ['智能投资',25],
                ['钱包包',25],
                ['钱袋子',25],
                ['票据宝',25],
                ['存管标',25]
            ]
        }]
    });
    
    $('#invest').highcharts({
    	 chart: {
            spacingLeft: 0,
			width: 380
        },
        title: {
            text: null
        },
        credits: {
			enabled: false // 禁用版权信息
		},
        colors: ['#61c4ce', '#ffc000', '#49b7f1', '#e27f90','#7485df'],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        legend: {
        	itemDistance:900,
            align: 'right',
            verticalAlign: 'top',
            layout:"vertical",
            symbolRadius:0,
            symbolWidth:20,
            symbolHeight:10,
            y: 202,
            itemMarginBottom:27,
            temStyle: { cursor: 'pointer', color: '#333333'}
        },
        series: [{
            type: 'pie',
            name: '名字',
            data: [
                ['智能投资',25],
                ['钱包包',25],
                ['钱袋子',25],
                ['票据宝',25],
                ['存管标',25]
            ]
        }]
    });
    
});
