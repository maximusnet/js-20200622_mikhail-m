export default class ColumnChart {
  element = null;
  data = [];
  label = "";
  link = "";
  chartHeight = null;

  constructor({data = null,label,value, link}={} ){
    this.data=data;
    this.label=label;
    this.chartHeight=value;
    this.link=link;
    this.element = document.createElement(`div`);

    if( !label && !link && !data && !this.chartHeight) {
      this.chartHeight=50;
      this.renderBlank();
    }else
      {
      this.render();
    }
  }

  render(){

    let data_column = "";//на случай пустых data, но с другими labael link etc
    if(this.data){
      const maxValue = Math.max(...this.data);
      const scale = 50 / maxValue;

      data_column = this.data.reduce((acc, elem,index) => {
        const percent = (elem / maxValue * 100).toFixed(0) + '%';
        const value=String(Math.floor(elem*scale));
        acc +=` <div style="--value:${value}" data-tooltip="${percent}"></div>\n`;
        return acc;
      },"" );
    }
    this.element.className=`dashboard__charts`;
    const title_column = `<div class="column-chart__title">${this.label}<a href="${this.link}" class="column-chart__link">View all</a></div>`;
    const chartContainer = document.createElement(`div`);
    chartContainer.className = `column-chart__container`;
    const chartHeader = document.createElement(`div`);
    chartHeader.className = `column-chart__header`;
    const valueText = document.createTextNode(this.chartHeight);
    const chartDashboard = document.createElement(`div`);
    chartDashboard.className = `column-chart dashboard__chart_orders`
    const chartChart = document.createElement(`div`);
    chartChart.className = `column-chart__chart`;
    chartChart.innerHTML = data_column;
    //1) dashboard__charts -> 2) column-chart dashboard__chart_orders->3) column-chart__title(label,link)->4)column-chart__container
    // ->5)column-chart__header(valueText)->6)column-chart__chart(data)
    //5
    chartHeader.appendChild(valueText);
    //4
    chartContainer.appendChild(chartHeader);
    chartContainer.innerHTML+=data_column;
    //2-3
    chartDashboard.innerHTML += title_column;
    chartDashboard.appendChild(chartContainer);
    //6
    chartContainer.appendChild(chartChart);

    this.element.appendChild(chartDashboard);





  }
  renderBlank()
  {
    //Только заглушка
    this.element.className=`column-chart column-chart_loading`;
    this.element.setAttribute('chartHeight',`50`);
    this.element.innerHTML = `
          <div class="column-chart__title">
        Total orders
        <a class="column-chart__link" href="#">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">
          344
        </div>
        <div data-element="body" class="column-chart__chart">

        </div>
      </div>

  `;
  }



  remove () {
    this.element.remove();
  }
  destroy(){
    this.remove();
  }
  update({bodyData}){
    this.element.remove();
    this.data=bodyData;
    this.render();
  }
}
