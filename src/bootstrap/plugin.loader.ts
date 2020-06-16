import { DogPlugin } from '../app/plugins/dog.plugin';
import { HelpPlugin } from '../app/plugins/help.plugin';
import { CatPlugin } from '../app/plugins/cat.plugin';
import { DadPlugin } from '../app/plugins/dad.plugin';

const PluginStore: { [pluginName: string]: any } = {
  dad: DadPlugin,
  dog: DogPlugin,
  help: HelpPlugin,
  cat: CatPlugin,
};

export class PluginLoader {
  constructor(pluginName: string, args?: any) {
    if (!PluginStore[pluginName]) {
      throw new Error(`Plugin ${pluginName} does not exist within the PluginStore.`);
    }
    return new PluginStore[pluginName](args);
  }
}
