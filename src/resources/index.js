export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/activity-type-to-route'),
    PLATFORM.moduleName('./value-converters/date'),
  ]);
}
