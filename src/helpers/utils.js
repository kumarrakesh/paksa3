// generate unique ids
export function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function delay(response) {
  await sleep(1000);

  return response;
}

export function capitalizeFirstLetter(string) {
  if (string == undefined) {
    return "";
  }
  return string[0].toUpperCase() + string.slice(1);
}