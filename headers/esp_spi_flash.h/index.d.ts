declare module "ts2c-target-esp-idf/esp_spi_flash.h" {

    const CHIP_FEATURE_EMB_FLASH: number;
    function spi_flash_get_chip_size(): number;
}
