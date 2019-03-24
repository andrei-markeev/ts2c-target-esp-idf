ESP-IDF target for TS2C transpiler
==================================

This projects provides header definitions and tooling for using [TS2C](https://github.com/andrei-markeev/ts2c-target-esp-idf) for ESP-IDF development.

**Status:** Work in progress.

Usage
-----

```
npm install ts2c-target-esp-idf
```

After that, you can create .ts files, `import` all necessary ESP-IDF dependencies and use them:

```ts
import { esp_restart } from 'ts2c-target-esp-idf/esp_system.h';
import { portTICK_PERIOD_MS, vTaskDelay } from 'ts2c-target-esp-idf/freertos/task.h';
import 'ts2c-target-esp-idf/freertos/FreeRTOS.h/index';

console.log("Hello world!");

console.log("Restarting in 10 seconds...");
vTaskDelay(10000 / portTICK_PERIOD_MS);
esp_restart();
```

When your code is ready:

```
npm i -g ts2c
ts2c your-file.ts
```

That will create corresponding .c file, which you can then compile and flash using ESP-IDF tools.

Example above will be transpiled to the following .c file:

````c
#include <stdio.h>
#include <esp_system.h>
#include <freertos/task.h>
#include <freertos/FreeRTOS.h>
int main(void) {
    printf("Hello world!\n");
    printf("Restarting in 10 seconds...\n");
    vTaskDelay(10000 / portTICK_PERIOD_MS);
    esp_restart();

    return 0;
}
```

More examples - in [examples](https://github.com/andrei-markeev/ts2c-target-esp-idf/tree/master/examples) folder.
