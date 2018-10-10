import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;
  columnDefs; //for column headings
   sortingOrder;
  constructor(private http:HttpClient){
    this.columnDefs=[
      {
        headerName:"EAN10",
        field:"EAN10",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"ProductName",
        field:"Product Name",
        width:250,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"DimmingProtocol",
        field:"Dimming method",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"OutputVoltage R(V)",
        field:"Output Voltage\n [V]",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"OutputPower R(W)",
        field:"Output Power [W]",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"InputVoltage(V)",
        field:"Input Voltage\n[V]",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Dimension(mm)",
        field:"Dimensions\n(L x W x H)\n[mm]",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"CE",
        field:"CE",
        width:70,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"BIS",
        field:"BIS",
        width:70,
        sortingOrder:["asc","desc"]
      }
    ];
    this.sortingOrder=["desc","asc",null]
  }

  onGridReady(params)
  {
  this.gridApi=params.api;
   this.gridColumnApi=params.columnApi;
   this.http
   .get("https://api.myjson.com/bins/kf1zg")
   .subscribe(data=>{
    params.api.setRowData(data);
   });
   //let dataValue=[{"ean":29229,"product":"abc"},{"ean":2929,"product":"abcvv"},{"ean":292,"product":"abcxvvxv"}];
   //params.api.setRowData(dataValue);
  }

}
