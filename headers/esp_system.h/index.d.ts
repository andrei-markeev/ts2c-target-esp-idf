declare module "ts2c-target-esp-idf/esp_system.h" {
    const CHIP_FEATURE_EMB_FLASH: number;
    const CHIP_FEATURE_WIFI_BGN: number;
    const CHIP_FEATURE_BLE: number;
    const CHIP_FEATURE_BT: number;
    const CHIP_ESP32: number;

    /** @ctype esp_chip_info_t * */
    interface esp_chip_info_t {
        model?: number,
        features?: number,
        revision?: number,
        cores?: number
    }

    /** Get information about the chip. */
    function esp_chip_info(out_info: esp_chip_info_t): void;

    /** Restart PRO and APP CPUs. */
    function esp_restart(): void;

    /** Get the size of available heap, in bytes. */
    function esp_get_free_heap_size(): number;

    /** Get the minimum heap that has ever been available. */
    function esp_get_minimum_free_heap_size(): number;

    /** Get one random 32-bit word from hardware RNG.
     * @returns Random value between 0 and UINT32_MAX
     */
    function esp_random(): number;

    /** Read base MAC address and set MAC address of the interface.
     * This function first get base MAC address using esp_base_mac_addr_get or reads base MAC address from BLK0 of EFUSE. Then set the MAC address of the interface including wifi station, wifi softap, bluetooth and ethernet.
     * @param mac MAC address of the interface, length: 6 bytes
     * @param type type of MAC address, 0:wifi station, 1:wifi softap, 2:bluetooth, 3:ethernet
     * @returns ESP_OK on success
     */
    function esp_read_mac(mac: Uint8Array, type: number): number;
    
}
