export default class SortableTable {
  element;
  subElements = {};
  headersConfig = [];
  data = [];

  constructor(headersConfig, {
    data = []
  } = {}) {
    this.headersConfig = headersConfig;
    this.data = data;
    this.render();
  }

  getHeader() {
    return `<div data-element="header" class="sortable-table__header sortable-table__row">${this.headersConfig.
    map((item)=> this.getRow(item)).join('')}</div>`;
  }

  getRow({id, title, sortable}) {
    return `<div class="sortable-table__cell" data-id="${id}" data-sortable="${sortable}"><span>${title}</span>
        ${this.getArrow()}</div>`;
  }

  getArrow() {
    return `<span data-element="arrow" class="sortable-table__sort-arrow"><span class="sort-arrow"></span></span>`;
  }

  getTableBody(data) {
    return `
      <div data-element="body" class="sortable-table__body">
        ${this.getTableRows(data)}
      </div>`;
  }

  getTableRows(data) {
    return data.map(item => ` <div class="sortable-table__row">${this.getTableRow(item, data)}</div>`).join('');
  }

  getTableRow(item) {
    const cells = this.headersConfig.map(({id, template}) => {return {id, template };
    });

    return cells.map(({id, template}) => {
      return template ? template(item[id]) : `<div class="sortable-table__cell">${item[id]}</div>`;
    }).join('');
  }

  getTable(data) {
    return `<div class="sortable-table">${this.getHeader()}${this.getTableBody(data)}</div>`;
  }

  render() {
    const temp = document.createElement('div');
    temp.innerHTML = this.getTable(this.data);
    const element = temp.firstElementChild;
    this.element = element;
    this.subElements = this.getSubElements(element);
  }

  sort(field, order) {
    const sortedData = this.sortData(field, order);
    const allColumns = this.element.querySelectorAll('.sortable-table__cell[data-id]');
    const currentColumn = this.element.querySelector(`.sortable-table__cell[data-id="${field}"]`);

    allColumns.forEach(column => {
      column.dataset.order = '';
    });

    currentColumn.dataset.order = order;

    this.subElements.body.innerHTML = this.getTableRows(sortedData);
  }

  sortData(field, order) {
    const arr = this.data.slice();
    const column = this.headersConfig.find(item => item.id === field);
    const {sortType, customSorting} = column;
    const direction = order === 'asc' ? 1 : -1;

    return arr.sort((a, b) => {
      switch (sortType) {
      case 'number':
        return direction * (a[field] - b[field]);
      case 'string':
        return direction * a[field].localeCompare(b[field], 'ru');
      case 'custom':
        return direction * customSorting(a, b);
      default:
        return direction * (a[field] - b[field]);
      }
    });
  }

  getSubElements(element) {
    const elements = element.querySelectorAll('[data-element]');

    return [...elements].reduce((accum, subElement) => {
      accum[subElement.dataset.element] = subElement;

      return accum;
    }, {});
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    this.subElements = {};
  }
}
