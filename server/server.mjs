import http2 from 'http2';
import fs from 'fs';
import path from 'path';
import { __init__, getPath } from '@trio/pathUtils/index.mjs';

__init__(import.meta.url);

const server = http2.createSecureServer({
  key: fs.readFileSync(getPath('./certificates/localhost.key')),
  cert: fs.readFileSync(getPath('./certificates/localhost.crt')),
});


