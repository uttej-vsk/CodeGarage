import React, { useEffect } from 'react';
import { useWebContainer } from '../../providers/WebContainerProvider/useWebContainer';

function Preview() {
  const { webContainer } = useWebContainer();
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!webContainer || !iframeRef.current) return;

    webContainer.on('server-ready', (_, url) => {
      iframeRef.current!.src = url;
    });
  }, [webContainer]);

  return (
    <iframe
      ref={iframeRef}
      className="h-full w-full border-2"
      src="loading.html"
    />
  );
}

export default Preview;
