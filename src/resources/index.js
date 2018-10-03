export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/activity-type-to-route')
  ]);
}
