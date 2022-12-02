import { useEffect, useState } from "react";
function getStorageValue(key, initValue) {
  let StoredValue;
  if (sessionStorage.getItem(key) !== "undefined") {
    StoredValue = JSON.parse(sessionStorage.getItem(key));
    console.log(`取得sessionStorage中的值....key=${key}:value=${StoredValue} `);
    return StoredValue;
  } else {
    console.log(
      `sessionStorage中沒有這個key....新設定key=${key}:initValue=${initValue}`
    );
    sessionStorage.setItem(key, JSON.stringify(initValue));
  }
}
export const useSessionStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, initValue);
  }); //在載入時 執行第一次而已 再重新載入時才執行
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return { value, setValue };
};
