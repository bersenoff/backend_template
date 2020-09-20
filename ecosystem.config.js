module.exports = {
  apps: [
    {
      name: "backend",
      script: "build/index.js",
      watch: ["build"],
      env: {
        COMMON_VARIABLE: "true",
      },
      env_production: {
        NODE_ENV: "production",
      },
      output: "./logs/out.log",
      error: "./logs/error.log",
      log: "./logs/combined.outerr.log",
    },
  ]
};