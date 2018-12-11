const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(newDriver) {
  drivers.push(newDriver);
};

function destructivelyPrependDriver(newDriver) {
  drivers.unshift(newDriver);
};

function destructivelyRemoveLastDriver(newDriver) {
  drivers.pop(newDriver);
};

function destructivelyRemoveFirstDriver(newDriver) {
  drivers.shift(newDriver);
};

function appendDriver(newDriver) {
  let newDrivers = [...drivers, newDriver]
  return newDrivers;
};

function prependDriver(newDriver) {
  let newDrivers = [newDriver,...drivers]
  return newDrivers;
};

function removeLastDriver() {
  let newDrivers = drivers.slice(0, drivers.length - 1)
  return newDrivers;
};

function removeFirstDriver() {
  let newDrivers = drivers.slice(1)
  return newDrivers;
};
