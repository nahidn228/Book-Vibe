import { toast } from "react-toastify";

const getStoredReadList = () => {
  //read-list

  const storedListStr = localStorage.getItem("read-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //Already Exist, do not add it
    toast.error("Already exist in the read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast.success(" Added to you read list");
  }
};

export { addToStoredReadList, getStoredReadList };
