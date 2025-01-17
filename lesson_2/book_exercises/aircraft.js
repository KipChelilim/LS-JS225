let aircraft = {
  // state
  fuel: 23.5,
  speed: 111,
  flight: false,

  // behaviors
  takeOff() {
    this.flight = true;
  },

  land() {
    this.flight = false;
  },
};