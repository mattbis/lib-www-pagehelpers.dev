// todo: scope, names of thing are all wrong...

// caveats: i like computing to be distributed since its doing nothing unusal it will do a bit as they must pay for the viewing
// and computation.

/* const runtimeHelpers // dont look for helpers */
const lwwwca_InitDate= Date.now()

/* determine available libraries for viewTimeHelper Resolution */
function __lwca_getRuntimeJsEnv() {}

/* use modern api / or fallback into one timer for no cpu */
// a blocking event emitter would work here... 
// however can just do it in the code where necessary..
class _lwca_ViewTimeHelper /* extends ConfigurableEventEmitter */ {
  MODES= {}
  /* cannot block must use this instead : with manifest for track type */
  workers= {}
  /* for the page, the only central emitters */
  registry= {}
  handles= {}
  constructor() {
    this.mode= 0/* Integer: num */
    // it stores just the min values, and resets... however depends on the mode, and the type of the user and the service type page.. 
    this.logs= []
  }
  init() {}
  clear() {}
  reset() {}
  remember() {}
  _LegacyTimer() {}
  _legacyTimerClearHandle() {}
  start(handle) {}
  stop() {}
  focused() {}
  absent() {}
  idled() {}
  departed() {}
  _DomTimer(){}
  /* fingerprint */
  // now you cannot get anything but classes of type
  //fingerprint(resolution= ..3) {}
    // 0.. the os and browser
    // 1.. the location if its reported
    // 2.. im not sure i need anything else.. 
  /* type= .. 3 */
  //mixin
  //get(..){}
  //state(..){}
}
