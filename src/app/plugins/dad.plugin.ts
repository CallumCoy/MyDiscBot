import Constants from '../../common/constants';
import { Plugin } from '../../common/plugin';
import { ChannelType, IContainer, IHttpResponse, IMessage } from '../../common/types';

export class DadPlugin extends Plugin {
    public name: string = 'Dad Plugin';
    public description: string = 'Generates dad jokes.';
    public usage: string = 'dad';
    public permission: ChannelType = ChannelType.Public;

    constructor(public container: IContainer) {
        super();
    }

    private _API_URL: string = 'https://icanhazdadjoke.com/';

    public async execute(message: IMessage, args?: string[]) {

        //calls the request package
        const bent = require('bent');

        //defines the type of object
        const getJSON = bent('json');

        //calls for a response and waits till it gets one
        const obj = await getJSON(this._API_URL);

        //sends the picture
        message.channel.send(obj.joke);
    }
}
