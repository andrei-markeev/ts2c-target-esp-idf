// Ported from ESP-IDF hello-world example

import { esp_chip_info, CHIP_FEATURE_BLE, CHIP_FEATURE_BT, esp_restart, esp_chip_info_t } from 'ts2c-target-esp-idf/esp_system.h';
import { spi_flash_get_chip_size, CHIP_FEATURE_EMB_FLASH } from 'ts2c-target-esp-idf/esp_spi_flash.h';
import { portTICK_PERIOD_MS, vTaskDelay } from 'ts2c-target-esp-idf/freertos/task.h';
import 'ts2c-target-esp-idf/freertos/FreeRTOS.h/index';

console.log("Hello world!");

var chip_info: esp_chip_info_t = {};
esp_chip_info(chip_info);

console.log("This is ESP32 chip with", chip_info.cores, "CPU cores, WiFi",
            chip_info.features & CHIP_FEATURE_BT ? "/BT" : "",
            chip_info.features & CHIP_FEATURE_BLE ? "/BLE" : "",
			", silicon revision", chip_info.revision,
            spi_flash_get_chip_size() / (1024 * 1024), "Mb",
            chip_info.features & CHIP_FEATURE_EMB_FLASH ? "embedded" : "external", "flash");

for (var i = 10; i >= 0; i--) {
  console.log("Restarting in", i, "seconds...");
  vTaskDelay(1000 / portTICK_PERIOD_MS);
}
console.log("Restarting now.");
//fflush(stdout);
esp_restart();

