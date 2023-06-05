import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Observable } from 'rxjs';
import { Gasto } from 'src/app/core/models/gasto.model';
import { GastosCharts } from 'src/app/core/models/gastos-por-dia.model';
import { HttpService } from 'src/app/core/services/http/http.service';
Chart.register(...registerables);

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {
  showCharts = false;
  gastosPorDia = new GastosCharts();
  gastosPorMes = new GastosCharts();
  mediaDeGastosDiarios = new Gasto();
  mediaDeGastosMensais = new Gasto();

  constructor(private http: HttpService) {}

  async ngOnInit() {
    await this.populaCharts();
  }

  async populaCharts() {
    
    try {
      const mediaDiariaUltimos30Dias = await this.http.getChartBuscarMediaDiariaUltimos30Dias().toPromise();
      const mediaMensalUltimos12Meses = await this.http.getChartBuscarMediaMensalUltimos12Meses().toPromise();
      const valorDiarioUltimos30 = await this.http.getChartBuscarValorDiarioUltimos30().toPromise();
      const valorMensalUltimosAno = await this.http.getChartBuscarValorMensalUltimosAno().toPromise();

      if (valorDiarioUltimos30 !== undefined) {
        console.log('valorDiarioUltimos30' , valorDiarioUltimos30)
        this.popularGastosPorDia(valorDiarioUltimos30);
      }
      if (valorMensalUltimosAno !== undefined) {
        console.log('valorMensalUltimosAno' , valorMensalUltimosAno)
        this.popularGastosPorMes(valorMensalUltimosAno);
      }
      if (mediaDiariaUltimos30Dias !== undefined) {
        console.log('mediaDiariaUltimos30Dias', mediaDiariaUltimos30Dias)
        this.populaMediaDeGastosDiarios(
          mediaDiariaUltimos30Dias
        );
      }
      if (mediaMensalUltimos12Meses !== undefined) {
        console.log('mediaMensalUltimos12Meses', mediaMensalUltimos12Meses)
        this.populaMediaDeGastosMensais(
          mediaMensalUltimos12Meses
        );
      }
      console.log(this.gastosPorDia);
      
    this.showCharts = true;
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  }

  populaMediaDeGastosDiarios(mediaDeGastosDiarios: Gasto): void {
    this.mediaDeGastosDiarios = mediaDeGastosDiarios;
  }//

  populaMediaDeGastosMensais(mediaDeGastosMensais: Gasto): void {
    this.mediaDeGastosMensais = mediaDeGastosMensais;
  }//

  popularGastosPorDia(gastos: Gasto[]): void {
    gastos.forEach((gasto: Gasto) => {
      this.processarGastoGastosPorDia(gasto);
    });
  }//

  popularGastosPorMes(gastos: Gasto[]): void {
    gastos.forEach((gasto: Gasto) => {
      this.processarPopularGastosPorMes(gasto);
    });
  }//

  private processarGastoGastosPorDia(gasto: Gasto): void {
    this.gastosPorDia.valoresDiariosLabel.push(gasto.diaMesAno);
    this.gastosPorDia.valoresDiariosData.push(gasto.totalGasto);
    this.gastosPorDia.valoresDiariosbackgroundColor.push(this.randomColor());
    this.gastosPorDia.valoresDiariosborderColor.push(this.randomColor());
  }

  private processarPopularGastosPorMes(gasto: Gasto): void {
    this.gastosPorMes.valoresDiariosLabel.push(gasto.diaMesAno);
    this.gastosPorMes.valoresDiariosData.push(gasto.totalGasto);
    this.gastosPorMes.valoresDiariosbackgroundColor.push(this.randomColor());
    this.gastosPorMes.valoresDiariosborderColor.push(this.randomColor());
  }

  randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}
