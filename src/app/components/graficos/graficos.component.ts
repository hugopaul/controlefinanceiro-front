import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GastosCharts } from 'src/app/core/models/gastos-por-dia.model';
import { HttpService } from 'src/app/core/services/http/http.service';
Chart.register(...registerables);

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  showCharts:boolean = false;
  gastosPorDia: GastosCharts = new GastosCharts();
  gastosPorMes: GastosCharts = new GastosCharts();

  constructor(private http: HttpService) {

  }

  async ngOnInit(): Promise<void> {
    await this.popularGastosPorDia();
    await this.popularGastosPorMes();

    this.showCharts = true;
  }

  async popularGastosPorDia() {
    try {
      const success = await this.http.getChartBuscarValorDiarioUltimos30().toPromise();
      if (success !== undefined) {
        success.forEach(e => {
          this.gastosPorDia.valoresDiariosLabel.push(e.diaMesAno);
          this.gastosPorDia.valoresDiariosData.push(e.totalGasto);
          this.gastosPorDia.valoresDiariosbackgroundColor.push(this.randomColor())
          this.gastosPorDia.valoresDiariosborderColor.push(this.randomColor())
        });
      }
    } catch (error) {
    }
  }
  async popularGastosPorMes() {
    try {
      const success = await this.http.getChartBuscarValorMensalUltimosAno().toPromise();
      if (success !== undefined) {
        console.log("success mensais --> " , success)
        success.forEach(e => {
          this.gastosPorMes.valoresDiariosLabel.push(e.diaMesAno);
          this.gastosPorMes.valoresDiariosData.push(e.totalGasto);
          this.gastosPorMes.valoresDiariosbackgroundColor.push(this.randomColor())
          this.gastosPorMes.valoresDiariosborderColor.push(this.randomColor())
        });
      }
    } catch (error) {
    }
  }

  randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}

