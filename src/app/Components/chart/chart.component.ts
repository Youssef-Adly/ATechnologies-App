import { Component } from '@angular/core';
import * as echarts from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  providers: [provideEcharts()],
})
export class ChartComponent {
  gradientColor = ['#8A74F9', '#8a74f943', '#8a74f900'];

  options: echarts.EChartsOption = {
    title: {
      text: 'إحصائيات إستخدام القسيمة',
      left: 'right',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      formatter: function (params: any) {
        // Assuming you have a single data series
        return `أستخدام ${params[0].value}`;
      },
      backgroundColor: '#1E1B39',
      borderRadius: 10,
      textStyle: { color: 'white', fontSize: '12.11px' },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisPointer: {
        value: 'اغسطس',
        type: 'line',
        snap: true,
        lineStyle: {
          color: '#7581BD',
          width: 5,
          type: 'solid',
        },
        label: {
          show: true,
          formatter: function (params: any) {
            return params.value;
          },
          backgroundColor: '#7581BD',
          borderRadius: 50,
        },
        handle: {
          show: true,
          color: '#7581BD',
          icon: '#8A74F9',
        },
      },
      data: [
        'ديسمبر',
        'نوفمبر',
        'اكتوبر',
        'سبتمبر',
        'اغسطس',
        'يونيو',
        'مايو',
        'ابريل',
        'مارس',
        'فبراير',
        'يناير',
      ],
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: [130, 190, 90, 150, 250, 180, 225, 200, 120, 120, 100, 230],
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 3,
          type: 'solid',
        },
        areaStyle: {},
      },
    ],
    markLine: {},
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: this.gradientColor[0] },
          { offset: 0.5, color: this.gradientColor[1] },
          { offset: 1, color: this.gradientColor[2] },
        ],
      },
    },
  };
}
