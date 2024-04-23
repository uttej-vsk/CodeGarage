import { WebContainer } from '@webcontainer/api';
import { Template } from '../../templates/react-vite';
import { createContext, useEffect, useState } from 'react';

export const WebContainerContext = createContext<{
  webContainer: WebContainer | null;
  template: Template;
}>({
  webContainer: null,
  template: {} as Template,
});

type WebContainerProviderProps = {
  template: Template;
};

export default function WebContainerProvider({
  template,
  children,
}: React.PropsWithChildren<WebContainerProviderProps>) {
  const [webContainer, setWebContainer] = useState<WebContainer | null>(null);

  useEffect(() => {
    let instance: WebContainer | null = null;
    const initWebContainer = async () => {
      try {
        instance = await WebContainer.boot();
        await instance.mount(template.files);
        setWebContainer(instance);
      } catch (e) {
        console.log(e);
      }
    };

    initWebContainer();
  }, [template.files]);

  return (
    <WebContainerContext.Provider value={{ webContainer, template }}>
      {children}
    </WebContainerContext.Provider>
  );
}
