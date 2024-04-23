import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import CodeEditor from './components/CodeEditor';

export default function App() {
  return (
    <div className="h-dvh p-2">
      <PanelGroup direction="horizontal">
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>
              <CodeEditor />
            </Panel>
            <PanelResizeHandle className="h-2 bg-blue-300" />

            <Panel>
              <div className="h-full border bg-red-100">Terminal</div>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle className="w-2 bg-blue-300" />

        <Panel>
          <div className="h-full border bg-red-100">Preview</div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
