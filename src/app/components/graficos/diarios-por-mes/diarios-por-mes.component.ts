import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { Gasto } from 'src/app/core/models/gasto.model';
import { GastosCharts } from 'src/app/core/models/gastos-por-dia.model';

@Component({
  selector: 'app-diarios-por-mes',
  templateUrl: './diarios-por-mes.component.html',
  styleUrls: ['./diarios-por-mes.component.scss']
})
export class DiariosPorMesComponent implements AfterViewInit {

  @Input()
  public gastosPorDia: GastosCharts = new GastosCharts();

  @Input()
  public mediaDeGastosDiarios: Gasto = new Gasto();

  ngAfterViewInit(){
    console.log(this.gastosPorDia)
    this.valoresDiariosChart();
  }

  

  valoresDiariosChart() {

    var myChart = new Chart("valoresDiariosPorMesChart", {
      type: 'bar',
      data: {
        labels: this.gastosPorDia.valoresDiariosLabel,
        datasets: [{
          label: `${this.mediaDeGastosDiarios.diaMesAno} : ${this.mediaDeGastosDiarios.totalGasto}`,
          data: this.gastosPorDia.valoresDiariosData,
          backgroundColor: this.gastosPorDia.valoresDiariosbackgroundColor,
          borderColor: this.gastosPorDia.valoresDiariosborderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


}
