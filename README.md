ESP-IDF target for TS2C transpiler
==================================

This projects provides header definitions and tooling for using [TS2C](https://github.com/andrei-markeev/ts2c-target-esp-idf) for ESP-IDF development.

**Status:** Work in progress.

Usage
-----

```
npm install ts2c-target-esp-idf
```

After that, you can create .ts files, `import` all necessary ESP-IDF dependencies and use them. Examples [here](https://github.com/andrei-markeev/ts2c/tree/master/tests).

When your code is ready:

```
npm i -g ts2c
ts2c your-file.ts
```

That will create corresponding .c file, which you can then compile and flash using ESP-IDF tools.