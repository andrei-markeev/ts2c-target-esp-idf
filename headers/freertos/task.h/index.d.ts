declare module "ts2c-target-esp-idf/freertos/task.h" {
    const portTICK_PERIOD_MS: number;
    /** Delay a task for a given number of ticks. */
    function vTaskDelay(ticks: number): void;
}
