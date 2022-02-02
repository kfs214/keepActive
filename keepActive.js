const SLEEP_SECS = 2;
const FIELD_ID = 'searchInputField'
let ACTIVATED = true;

const sleepByPromise = async () => {
  console.log("sleeping...");
  return new Promise((resolve) => setTimeout(resolve, SLEEP_SECS * 1000));
};

const setValue = (value) => {
  console.log("working...");
  document.getElementById(FIELD_ID).value = value
}

const handleInputChange = async () => {
  setValue('Working')
  await sleepByPromise()
  setValue('Working.')
  await sleepByPromise()
  setValue('Working..')
  await sleepByPromise()
  setValue('Working...')
  await sleepByPromise()
};

const keepActive = async () => {
  while (ACTIVATED) {
    await handleInputChange()
  }
};

const setActivated = (activatedCondition) => {
  ACTIVATED = activatedCondition;
};

keepActive();