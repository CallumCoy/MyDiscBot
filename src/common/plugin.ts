import { ChannelType, IContainer, IMessage, IPlugin } from './types';
import Constants from './constants';

export abstract class Plugin implements IPlugin {
  public abstract container: IContainer;

  public abstract get name(): string;

  public abstract get description(): string;

  public abstract get usage(): string;

  public abstract get permission(): ChannelType;

  public pluginChannelName?: string;

  public validate(message: IMessage, args: string[]) {
    return true;
  }

  public hasPermission(message: IMessage): boolean {
    const channelName = this.container.messageService.getChannel(message).name;

    console.log(ChannelType);
    console.log(ChannelType.Public);
    console.log(ChannelType.Public == this.pluginChannelName);
    console.log(typeof this.pluginChannelName === 'string' && this.pluginChannelName !== channelName && this.permission != ChannelType.Public);
    console.log(ChannelType.Public !== this.permission);
    console.log(this.permission);

    if (typeof this.pluginChannelName === 'string' && this.pluginChannelName !== channelName && this.permission != ChannelType.Public) {
      message.reply(`Please use this command in the \`#${this.pluginChannelName}\` channel.`);
      return false;
    }

    const response = this.container.channelService.hasPermission(channelName, this.permission);
    console.log(response)
    if (!response) {
      message.reply(`Please use this command in a \`${this.permission}\` channel`);
    }
    return response;
  }

  public abstract async execute(message: IMessage, args?: string[]): Promise<void>;
}
