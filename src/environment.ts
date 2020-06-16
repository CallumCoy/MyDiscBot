import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../.env') });

const Environment = {
  DiscordToken: process.env.DISCORD_TOKEN,
  CommandToken: process.env.COMMAND_KEY,
  Playground: process.env.NODE_ENV,
};

export default Environment;
