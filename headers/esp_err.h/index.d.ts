declare module "ts2c-target-esp-idf/esp_err.h" {
    const ESP_OK;
    const ESP_FAIL;
    const ESP_ERR_NO_MEM;
    const ESP_ERR_INVALID_ARG;
    const ESP_ERR_INVALID_STATE;
    const ESP_ERR_NOT_FOUND;
    const ESP_ERR_NOT_SUPPORTED;
    const ESP_ERR_TIMEOUT;
    const ESP_ERR_INVALID_RESPONSE;
    const ESP_ERR_INVALID_CRC;
    const ESP_ERR_INVALID_VERSION;
    const ESP_ERR_INVALID_MAC;
    const ESP_ERR_WIFI_BASE;
    const ESP_ERR_MESH_BASE;

    /** Returns string for esp_err_t error codes. */
    function esp_err_to_name(err_code: number): string;
}
