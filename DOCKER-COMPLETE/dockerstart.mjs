const connectToDatabase = () => {
  const dummyFile = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return dummyFile;
};

export default connectToDb;
