function getResultByPath(path, obj) {
  //write your implementation here
  const normalizedPath = path.replace(/\[(\d+)\]/g, `.$1`);
  const keys = normalizedPath.split(".");

  let result = obj;
  for (let key of keys) {
    if (!result) break;
    result = result[key];
  }
  return result;
}
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
getResultByPath(path, obj);
// module.exports = getResultByPath;
