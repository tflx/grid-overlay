class GridOverlay {
  constructor({ gridClass = "grid", columnProp = "--grid-columns" } = {}) {
    this.columnProp = columnProp;

    this.overlay = document.createElement("div");
    this.overlay.classList.add("grid-overlay");
    document.body.appendChild(this.overlay);

    this.grid = document.createElement("div");
    this.grid.classList.add(gridClass, "grid-container");
    this.overlay.appendChild(this.grid);

    const toggle = document.createElement("button");
    toggle.classList.add("grid-overlay-button");
    this.overlay.appendChild(toggle);
    toggle.addEventListener("click", this.toggleOverlay);

    
    var css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));
    document.head.appendChild(css);
    
    this.render();
    window.addEventListener("resize", this.render);
  }

  handleResize = () => {
    this.render();
  };

  render = () => {
    const columns = getComputedStyle(document.documentElement).getPropertyValue(
      this.columnProp
    );
    this.renderColumns(columns);
  };

  renderColumns(no) {
    this.grid.innerHTML = "";
    let columns = "";
    for (let index = 0; index < no; index++) {
      columns += `<div class='grid-column'>${index + 1}</div>`;
    }
    this.grid.innerHTML = columns;
  }

  toggleOverlay = () => {
    this.grid.classList.toggle("visible");
  };
}

export default GridOverlay;

const styles = `
.grid-overlay {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.grid-container.visible {
  visibility: visible;
}

.grid-container {
    visibility: hidden;
  position: relative;
  height: 100%;
  padding: 0;
}

.grid-column {
  background-color: rgba(255, 0, 0, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  color: #999;
  font-size: 10px;
  padding: 10px 0 0 1px;
  display: flex;
  justify-content: center;
  font-family: monospace;
}

.grid-overlay-button {
    background: transparent;
    padding: 0;
  appearance: none;
  border: none;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0wLDB2NTEyaDUxMlYwSDB6IE0xNjAuNjYxLDQ4MkgzMFYzNTEuMzI4aDEzMC42NjFWNDgyeiBNMTYwLjY2MSwzMjEuMzI4SDMwVjE5MC42NjFoMTMwLjY2MVYzMjEuMzI4eiBNMTYwLjY2MSwxNjAuNjYxDQoJCQlIMzBWMzBoMTMwLjY2MVYxNjAuNjYxeiBNMzIxLjMyOCw0ODJIMTkwLjY2MVYzNTEuMzI4aDEzMC42NjdWNDgyeiBNMzIxLjMyOCwzMjEuMzI4SDE5MC42NjFWMTkwLjY2MWgxMzAuNjY3VjMyMS4zMjh6DQoJCQkgTTMyMS4zMjgsMTYwLjY2MUgxOTAuNjYxVjMwaDEzMC42NjdWMTYwLjY2MXogTTQ4Miw0ODJIMzUxLjMyOFYzNTEuMzI4SDQ4MlY0ODJ6IE00ODIsMzIxLjMyOEgzNTEuMzI4VjE5MC42NjFINDgyVjMyMS4zMjh6DQoJCQkgTTQ4MiwxNjAuNjYxSDM1MS4zMjhWMzBINDgyVjE2MC42NjF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
  background-size: cover;
  bottom: 30px;
  cursor: pointer;
  height: 26px;
  opacity: 0.6;
  position: absolute;
  right: 10px;
  width: 26px;
  opacity: 0.2;
  pointer-events: all;
}
`;
