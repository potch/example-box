import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';

import { render, useRef } from 'preact';
import { html, Component } from 'htm/preact';

window.cm = new CodeMirror(document.body, {
  value: 'woo',
  mode: 'javascript',
  theme: "solarized",
  tabMode: "indent",
  lineWrapping: true,
  lineNumbers: true,
  matchBrackets: true,
});

console.log(cm);

class CodeExample extends Component {
  constructor () {
    this.editorContainer = useRef();
  }

  componentDidMount() {
    this.editor = new CodeMirror(this.editorContainer.current, {
      value: 'woo',
      mode: 'javascript',
      theme: "solarized",
      tabMode: "indent",
      lineWrapping: true,
      lineNumbers: true,
      matchBrackets: true,
    });
  }

  render ({

  }) {
    return html`
      <div class="code-example" ref=${this.editor}>
        <div class="code-example__editor-container">
        </div>
        <div class="code-example__preview">
        </div>
      </div>;
    `
  }
}