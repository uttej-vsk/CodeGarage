import { Editor } from '@monaco-editor/react';
import { VITE_REACT_TEMPLATE } from '../../templates/react-vite';
import { useState } from 'react';
import FileTabs from './FileTabs';
import { getLanguageFromFileName } from './getLanguageFromFileName';

function CodeEditor() {
  const [activeFile, setActiveFile] = useState(() => VITE_REACT_TEMPLATE.entry);

  console.log(activeFile);

  const currentFile = VITE_REACT_TEMPLATE.files[activeFile];
  const language = getLanguageFromFileName(activeFile);
  console.log(currentFile);

  return (
    <div className="h-full">
      <FileTabs
        files={VITE_REACT_TEMPLATE.visibleFiles}
        activeFile={activeFile}
        onFileChange={setActiveFile}
      />
      <Editor
        theme="vs-dark"
        path={activeFile}
        defaultValue={currentFile.contents}
        defaultLanguage={language}
      />
    </div>
  );
}

export default CodeEditor;
