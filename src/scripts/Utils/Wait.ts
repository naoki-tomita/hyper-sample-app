export async function wait(ms: number) {
  return new Promise(done => setTimeout(done, ms));
}

export async function waitRandom() {
  await wait(500 + Math.random() * 800);
}
