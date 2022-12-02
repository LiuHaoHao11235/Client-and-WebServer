import { useEffect, useState } from "react";
function getStorageValue(key, initValue) {
  let StoredValue;
  if (localStorage.getItem(key) !== "undefined") {
    StoredValue = JSON.parse(localStorage.getItem(key));
    console.log(`取得localStorage中的值....key=${key}:value=${StoredValue} `);
    return StoredValue;
  } else {
    console.log(
      `localStorage中沒有這個key....新設定key=${key}:initValue=${initValue}`
    );
    localStorage.setItem(key, JSON.stringify(initValue));
  }
}
export const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, initValue);
  }); //在載入時 執行第一次而已 再重新載入時才執行
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return { value, setValue };
};
