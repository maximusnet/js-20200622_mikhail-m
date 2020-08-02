class Tooltip {
  static instance;
  element;

  constructor()
  {
  if(Tooltip.instance)
  {
    Tooltip.instance
  }
    Tooltip.instance=this;
  }
  removeTooltip() {

    if (this.element) {
      this.element.remove();
      document.removeEventListener('pointermove', this.onMouseMove);
    }


  }
}

const tooltip = new Tooltip();

export default tooltip;
