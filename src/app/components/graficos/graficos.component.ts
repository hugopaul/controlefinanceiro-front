import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GastoPorDia } from 'src/app/core/models/gasto-por-dia.model';
import { HttpService } from 'src/app/core/services/http/http.service';
Chart.register(...registerables);

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  gastoPorDia: GastoPorDia[] = [];
  valoresDiariosLabel: string[] = [];
  valoresDiariosData: any[] = [];
  valoresDiariosbackgroundColor: string[] = [];
  valoresDiariosborderColor: string[] = [];

  constructor(private http: HttpService) {

  }

  async ngOnInit(): Promise<void> {
    await this.popularGastoPorDia();

    this.valoresDiariosChart();
  }
  async popularGastoPorDia() {
    try {
      const success = await this.http.getChartBuscarValorDiarioUltimos30().toPromise();
      if (success !== undefined) {
        console.log(success)
        this.gastoPorDia = success;
        this.gastoPorDia.forEach(e => {
          console.log(e)
          this.valoresDiariosLabel.push(e.dia);
          this.valoresDiariosData.push(e.totalGasto);
          this.valoresDiariosbackgroundColor.push(this.randomColor())
          this.valoresDiariosborderColor.push(this.randomColor())
        });
      }
    } catch (error) {
    }

    
  }

  valoresDiariosChart() {
    console.log('valoresDiariosLabel -->', this.valoresDiariosLabel)
    console.log('valoresDiariosData -->', this.valoresDiariosData)

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.valoresDiariosLabel,
        datasets: [{
          label: 'Valores Diários (Últimos 30 dias)',
          data: this.valoresDiariosData,
          backgroundColor: this.valoresDiariosbackgroundColor,
          borderColor: this.valoresDiariosborderColor,
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


  randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}

