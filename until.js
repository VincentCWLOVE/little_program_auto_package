const glob = require('glob');

exports.getEntries = (context, extension) => {
  let ctx = context;
  let ext = extension;

  if (context[context.length - 1] !== '/') {
    ctx += '/';
  }

  ext = `.${extension}`;

  const files = glob.sync(`${ctx}**/*${ext}`);
  const entries = {};

  files.forEach((file) => {
    entries[file.replace(ctx, '').replace(ext, '')] = file;
  });

  return entries;
};