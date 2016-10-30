if (process.env.NODE_ENV === 'production') {
  const { exec } = require('child_process');
  const { join } = require('path');

  const webpackConfig = join(__dirname, '../config/webpack.production.config.js');
  const cmd = `webpack -p --config ${webpackConfig} --progress`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log('exec error: ' + error);
    }

    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
  });
}
