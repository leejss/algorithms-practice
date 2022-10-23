function solution(bridge_length, weight, truck_weights) {
  const totalTrucks = truck_weights.length;
  const trucks = truck_weights.map((t) => [t, 1]);
  const bridge = [];
  let bridgeWeight = 0;
  let passed = 0;
  let time = 0;
  while (passed < totalTrucks) {
    time++;
    if (bridge.length === 0) {
      const pushed = trucks.shift();
      bridge.push(pushed);
      bridgeWeight += pushed[0];
      continue;
    }

    const firstTruck = bridge[0];
    if (firstTruck[1] === bridge_length) {
      const shifted = bridge.shift();
      bridgeWeight -= shifted[0];
      passed += 1;
    } else {
      firstTruck[1] += 1;
    }
  }

  return time;
}

console.log(solution(100, 100, [10]));
