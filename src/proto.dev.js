// todo: scope, names of thing are all wrong...

// caveats: i like computing to be distributed since its doing nothing unusal it will do a bit as they must pay for the viewing
// and computation.

/* const runtimeHelpers // dont look for helpers */
const lwwwca_InitDate= Date.now()

/* determine available libraries for viewTimeHelper Resolution */
function __lwca_getRuntimeJsEnv() {}

class _lwca_Finger {
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

/* the api knows roughly and api but I also really like to know if they match , or just where people are as its coooool.. and fine since its
not precise */
class _lwca_GeoApproximator() {
  _getCity() {}
  _getRegion() {}
  _getRoughLocation() {}
  /* private: */
  _getClosestLocationForCustomer() {} // this is to know roughly the best guess we have so that if the account goes mental .. we have a vector to check against.. etc... 
  getLocation() {} // ==> _getRoughLocation --> resolves to just hte city.. that all i really want.. 
}

/* use modern api / or fallback into one timer for no cpu */
// a blocking event emitter would work here... 
// however can just do it in the code where necessary..
class _lwca_ViewTimeHelper /* extends ConfigurableEventEmitter */ {
  MODES= {}
  DEFAULT= {
  track:{},
  send:{},
  registry:{},
  pending:{}}
  /* cannot block must use this instead : with manifest for track type */
  workers= {}
  /* for the page, the only central emitters */
  registry= {}
  // part of this is to stop doing stupid stuff to clients.. 
  run={handles:{bg:{},fg:{}},counts:{init,send,get}}
  flaggs= {}
  constructor() {
    this.c_el= {}
    this.c_mode= 0/* Integer: num */
    // it stores just the min values, and resets... however depends on the mode, and the type of the user and the service type page.. 
    this.sagg_logs= []
    // stores the sessions
    this.sagg= []
    this.flaggs= {}
  }
  init() {
  }
  _task() {}
  _element() {}
  bg() {}
  fg() {}
  protocol() {}
  _createHandles() {}
  config({destructive,backup}) {}
  // optimistic
  asynctee({background,payload}) {}
  // from server in real time depending on customer or viewer
  asyncgee({manifest,payload}) {}
  clear() {}
  reset() {
    _resetCache() {}
    _resetFlags() {}
  }
  remember() {}
  _LegacyTimer() {}
  _legacyTimerClearHandle() {}
  start(handle) {}
  stop() {}
  focused() {}
  absent() {}
  /* programmable pause */
  pause() {}
  idled() {}
  departed() {}
  /* time is the amount of time they are viewing the page before they left it .. and when they came back etc */
  time() {}
  _DomTimer(){}
  /* track is used to determine roughly in teh fastest way where something was clicked based on what i determine by how everyone else does it
  but i dont really wanna know anything to precise so tw methods() ? but the second is actually way more expensive */
  action() {}
  /*persistence() {}*/
  track({element, actionType, persistence, deviceType}) {}
  FastMouseTracker() {}
  FastTouchTracker() {}
  /* zone is a ambiguous way to set stuff to happen .. its better to use the onload method for complex data */
  zone({element,id,ids,elements,ref,data,event}) {}
  _createZone() {}
  _zoneElementHelper() {}
  _zoneEventHelper() {}
  createEmitter({options}) {}
  on() {}
  removeEmitter({hard,soft}) {}
  /* instead of their scripts doing whatever, it sends on this which only happens when action is made.. just one function */
  // depends if theyhave some api so i dont need to include some script i have no control over.. 
  ___actionExport() {}
  __get() {}
  __send() {}
  _backup() {}
}
