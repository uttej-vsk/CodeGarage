import { cn } from '../../utils/classNames';

type FileTabsProps = {
  activeFile: string;
  onFileChange: (filename: string) => void;
  files: string[];
};

function FileTabs({ files, activeFile, onFileChange }: FileTabsProps) {
  return (
    <div>
      <ul className="flex overflow-x-auto overflow-y-hidden bg-gray-800">
        {files.map((filename) => (
          <li key={filename}>
            <button
              className={cn(
                'bg-gray-800 px-2 py-1 text-white hover:bg-gray-700',
                activeFile === filename && 'bg-gray-950 hover:bg-gray-900',
              )}
              onClick={() => onFileChange(filename)}
            >
              {filename}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileTabs;
