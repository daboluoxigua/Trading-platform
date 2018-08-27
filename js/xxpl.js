$(function () {
    $('#age').highcharts({
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
        colors: ['#49b7f1', '#7485df', '#61c4ce'],
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
            symbolHeight:20,
            y: 33,
            itemMarginBottom:20,
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
            name: '年龄',
            data: [
                ['25岁以下',25],
                ['25岁到35岁',25],
                ['35岁以上',25]
            ]
        }]
    });
    
    
    $('#education').highcharts({
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
        colors: ['#49b7f1', '#7485df', '#61c4ce'],
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
            symbolHeight:20,
            y: 33,
            itemMarginBottom:20,
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
            name: '年龄',
            data: [
                ['大专及本科',25],
                ['硕士及博士',25],
                ['其他',25]
            ]
        }]
    });
    
    
});
